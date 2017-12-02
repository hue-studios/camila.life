
<template>
 <div id="container" class="grid-container full">
 <div class="grid-x">

 <div id="top" class="small-12 cell">
 <div id="intro">

 </div>
 <div class="angled-crop">
 
 </div>
<div id="quote" :style="'background-image: url(https://huestudios.com' + quoteImage + ')'"><h5 class="serif">{{quote.quote}}<span>-{{quote.author}}</span></h5></div>
</div>
 </div>
 
 <div class="grid-x">
<product class="small-6 medium-8 cell hero" v-for="(product, index) in products" :product="product" v-if="index == 1" :index="index" v-bind:key="product.id"></product>
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
  async asyncData ({ query, error }) {
    let [productsReq, ingredientsReq, recipesReq, quoteReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/products/rows/'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/quotes/rows/')
    ])
    return {
      products: productsReq.data.data,
      ingredients: ingredientsReq.data.data,
      recipes: recipesReq.data.data,
      quote: quoteReq.data.data[0],
      quoteImage: quoteReq.data.data[0].image.data.url
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
      quote: '',
      quoteImage: ''
    }
  },
  components: {
    product
  },
  created: function () {
  },
  mounted () {
    this.$nextTick(this.pinTopScene)
  },
  methods: {
    pinTopScene () {
      const scene = new this.$scrollmagic.Scene({triggerElement: '.page-container', duration: 900}).setTween(new this.$gsap.TimelineMax().add([
        this.$gsap.TweenMax.to('#quote h5', 1, {marginLeft: '0px', ease: this.$gsap.Linear.easeNone}),
        this.$gsap.TweenMax.to('#quote h5 span', 1, {right: '-125%', opacity: '0.5', ease: this.$gsap.Linear.easeNone}),
        this.$gsap.TweenMax.to('.angled-crop', 1, {left: '24%', ease: this.$gsap.Linear.easeNone})
      ]))
      this.$ksvuescr.$emit('addScene', 'pinTopScene', scene)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
