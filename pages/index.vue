
<template>
 <div class="container-full">
 <p v-if="isAuthenticated">Welcome <span>{{loggedUser.given_name}}</span>!</p>
 <div class="grid-x">
<product class="small-6 medium-8 cell" v-for="(product, index) in products" :product="product" v-if="index == 1" :index="index" v-bind:key="product.id"></product>
<product class="small-6 medium-4 cell" v-for="(product, index) in products" :product="product" v-if="index !== 1" :index="index" v-bind:key="product.id"></product>
 
 </div>
</div>
	
</template>
<script>
import axios from 'axios'
import product from '~/components/product.vue'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: true,
  async asyncData () {
    let { data } = await
      axios.get('http://camila.life/admin/api/1.1/tables/products/rows/')
    return {
      products: data.data
    }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '')
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@nuxt_js' },
      { name: 'twitter:title', content: 'Nuxt.js Twitter Card' },
      { name: 'twitter:description', content: 'Nuxt.js lets you handle custom headers for your app with vue-meta' },
      { name: 'twitter:image', content: 'https://avatars0.githubusercontent.com/u/23360933?v=3' },
      { name: 'twitter:image:alt', content: 'Nuxt.js logo' }
    ]
  },
  data () {
    return {
    }
  },
  components: {
    product
  },
  created () {
    if (this.$store.state.user) {
      console.log(this.$store.state.user)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
.featured {
  height: 100vh;
}
.sidebar {
  height: 100vh;
}
</style>
