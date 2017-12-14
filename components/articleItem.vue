<template>
  <div class="recipe__container" :class="[{ 'small-12 medium-8 large-6': index === 0 || index === 5 }, { 'small-6 medium-4 large-3': index !== 0 || index !== 5 }]">
  <div class="grid-x recipe__grid" :style="'background-image: url(https://huestudios.com' + article.image.data.thumbnail_url + ')'">
    <div class="small-11 medium-auto cell recipe-description">
     <nuxt-link :to="'/plant-based-living/' + article.url"> <h1 class="text-center">{{article.title}}</h1></nuxt-link>
      <div class="recipe-sub-title">
        <h5 class="style">{{article.category}} </h5>
      </div>
      <div class="white" v-html="truncate(article.description)"></div>
      <nuxt-link class="details-btn" :to="'/plant-based-living/' + article.url">DETAILS<span></span><span></span></nuxt-link>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['article', 'index'],
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
    console.log(this.article.image.data.thumbnail_url)
  },
  methods: {
    makeArray (str) {
      var newArray = str.split(',')
      return newArray
    },
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 130
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
