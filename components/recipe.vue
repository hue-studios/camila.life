<template>
  <div class="recipe__container" :class="[{ 'small-12 medium-8': index === 0 || index === 6 }, { 'small-6 medium-4 ': index !== 0 || index !== 6 }]">
  <div class="grid-x recipe__grid">
    <div class="cell small-7 medium-shrink recipe-image">
      <img v-bind:src="'https://huestudios.com' + recipe.images.data[0].thumbnail_url" :alt="recipe.name"/>
      <nuxt-link class="image-link" v-if="isAuthenticated" :to="'/vegan-plant-based-recipes/' + recipe.url"></nuxt-link>
    </div>

    <div class="small-11 medium-auto cell recipe-description">
     <nuxt-link v-if="isAuthenticated" :to="'/vegan-plant-based-recipes/' + recipe.url"> <h1 class="text-center">{{ recipe.name }} </h1></nuxt-link>
      <div class="ingredient-sub-title">
        <h5 class="style"><span class="prefix">STYLE: </span>{{recipe.style}} </h5>
        <h5 class="cuisine" v-if="recipe.cuisine"><span class="prefix">CUISINE: </span>{{recipe.cuisine}}</h5>
      </div>

      <nuxt-link class="details-btn" :to="'/vegan-plant-based-recipes/' + recipe.url">DETAILS<span></span><span></span></nuxt-link>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['recipe', 'index'],
  data () {
    return {
      total: ''
    }
  },
  components: {
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  created: function () {
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
    truncate150 (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 150
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
      position: 'center',
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
