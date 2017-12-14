<template>
  <div class="recipe__container" :class="[{ 'small-12 medium-8 large-6': index === 0 || index === 5 }, { 'small-6 medium-4 large-3': index !== 0 || index !== 5 }]">
  <div class="grid-x recipe__grid" :style="'background-image: url(https://huestudios.com' + recipe.images.data[0].thumbnail_url + ')'">
    <div class="small-11 medium-auto cell recipe-description">
     <nuxt-link :to="'/vegan-plant-based-recipes/' + recipe.url"> <h1 class="text-center">{{ makeHeart(recipe.name) }} <i class="fa fa-heart" aria-hidden="true"></i></h1></nuxt-link>
      <div class="recipe-sub-title">
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
    makeHeart (str) {
      var lastIndex = str.lastIndexOf(' ')
      str = str.substring(0, lastIndex)
      return str
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
