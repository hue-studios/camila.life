
<template>
 <div class="container-full">
 <div class="grid-x">
<product class="small-6 medium-8 cell hero" v-for="(product, index) in products" :product="product" v-if="index == 1" :index="index" v-bind:key="product.id"></product>
<product class="small-6 medium-4 cell" v-for="(product, index) in products" :product="product" v-if="index !== 1" :index="index" v-bind:key="product.id"></product>
 
 </div>
</div>
	
</template>
<script>
import axios from 'axios'
import product from '~/components/product.vue'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    let { data } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/products/rows/')
    return {
      products: data.data
    }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '')
  },
  head () {
    return {
      title: 'camila.life boutique - Stylish Plant-Based Living - BeCAUSE Shirts',
      meta: [
        { hid: 'description', name: 'description', content: 'camila.life boutique is focused on positive, healthy living that motivates.' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.camila.life/camila-life-boutique' },
        { hid: 'og:image', property: 'og:image', content: 'https://huestudios.com/sites/camila.life/content/storage/uploads/CAMILA-FB-BOUTIQUE.jpg' },
        { hid: 'og:title', property: 'og:title', content: 'camila.life online boutique- Plant-Based Vegan Living - Loving a Healthy Life' },
        { hid: 'og:description', property: 'og:description', content: 'camila.life boutique is focused on positive, healthy living that motivates.' }
      ]
    }
  },
  data () {
    return {
    }
  },
  components: {
    product
  },
  created () {
  },
  methods: {
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 70
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
    showLoginError: {
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'error'
    },
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'center',
      color: 'white',
      message: '',
      timeout: 3000,
      cb: function () {
      },
      onClosing: function () {
        var cartTotalBadge = document.getElementById('cart-total-badge')
        cartTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var cartTotalBadge = document.getElementById('cart-total-badge')
        setTimeout(function () {
          cartTotalBadge.classList.add('pulseEffect')
          console.log('closed')
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
