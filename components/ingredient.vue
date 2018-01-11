<template>
  <div class="grid-x ingredient__container">
    <div class="cell shrink ingredient__image" :class="{ logged: !isAuthenticated }">
      <img v-if="ingredient.images.data.length > 0" v-bind:src="'https://huestudios.com' + ingredient.images.data[0].thumbnail_url" :alt="ingredient.name"/>
      <img v-else src="/icons/ms-icon-310x310.png" :alt="ingredient.name"/>
      <div class="login-btn" v-if="!isAuthenticated"><a @click.prevent="showLoginScreen" ><span>SIGN IN TO CREATE</span><br>SHOPPING LIST</a></div>
      <nuxt-link class="image-link" v-if="isAuthenticated" :to="'/plant-based-vegan-products/' + ingredient.url"></nuxt-link>
    </div>

    <div class="cell auto ingredient__description">

     <nuxt-link v-if="isAuthenticated" :to="'/plant-based-vegan-products/' + ingredient.url"> <h1 class="text-center">{{ ingredient.name }} </h1></nuxt-link>

     <h1 v-else class="text-center">{{ ingredient.name }} </h1>


      <h5 class="script-font text-lowercase ingredient__goes-with" v-if="ingredient.goes_with"><span class="hide-mobile"><span class="green">goes with</span> <span class="goes-with-item" v-for="goes in goesWith"> {{goes}}, </span> and </span><span class="green">featured in {{total}} recipe<span v-if="total > 1">s</span></span>.</h5>
      <h3>{{ingredient.category}}</h3>
      <nuxt-link class="ingredient__details-btn" :to="'/plant-based-vegan-products/' + ingredient.url">DETAILS<span></span><span></span></nuxt-link>
    </div>
    <ingredient-buttons v-if="isAuthenticated" class="small-12 cell" :id="ingredient.id" :product="ingredient"></ingredient-buttons>
  </div>
</template>

<script>
import ingredientButtons from '~/components/ingredientButtons.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  props: ['ingredient'],
  data () {
    return {
      recipes: [],
      total: '',
      goesWith: []
    }
  },
  components: {
    ingredientButtons
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipe_ingredients/rows/?filters[ingredient][eq]=' + this.ingredient.id).then(response => {
      this.recipes = response.data.data
      this.total = this.recipes.length
    }).catch(e => {
      this.errors.push(e)
    })
    const vm = this
    if (this.ingredient.goes_with) {
      vm.goesWith = this.makeArray(vm.ingredient.goes_with)
      console.log(vm.ingredient.goes_with)
    }
  },
  methods: {
    showLoginScreen () {
      var loginForm = document.getElementById('login-screen')
      loginForm.classList.remove('close')
    },
    truncate300 (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 300
        }
        if (ending == null) {
          ending = '...'
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending
        } else {
          return str
        }
      } else {
        return str
      }
    },
    makeArray (str) {
      var newArray = str.split(',')
      return newArray
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'bottomRight',
      color: 'black',
      message: '',
      timeout: 3000,
      cb: function () {
      },
      onClosing: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        setTimeout(function () {
          listTotalBadge.classList.add('pulseEffect')
          console.log('closed')
        }, 1000)
      }
    }
  }
}
</script>
