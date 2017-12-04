
<template>
 <div id="container" class="grid-container full">
 <div class="grid-x">

 <div id="top" class="small-12 cell">
 <div id="intro">

 </div>
 <div class="angled-crop">
 <div id="intro-image"></div>
 <p>Hello health wonderers...my name is Camila. I too like all of you have been on a “discovering good and health journey”.  My journey started in 2010 and I’m still on it!</p>
 <p>This site is my next phase and soon you will see a lot of ingredients, recipes, ideas, and even a shopping assistant for your own vegan adventures.</p>
 <p>For this first phase, I am excited to launch my online boutique!! Check it out <a href="/camila-life-boutique" class="underline-link">here</a>, follow me on <a href="https://www.instagram.com/camila.life.now/" target="_blank" class="underline-link">Instagram</a>, and stay tuned!!</p>
 </div>
<div id="quote" :style="'background-image: url(https://huestudios.com' + quoteImage + ')'"><h5 class="serif">{{quote.quote}}<span>-{{quote.author}}</span></h5></div>
</div>
 </div>
 
 <div id="home-boutique" class="grid-x">
 <h1 id="home-boutique-title" class="small-12 cell pink">BOUTIQUE</h1>
<product class="small-6 medium-8 cell hero" v-for="(product, index) in products" :product="product" v-if="index == 1" :index="index" v-bind:key="product.id"></product>
<product class="small-6 medium-4 cell" v-for="(product, index) in products" :product="product" v-if="index !== 1 && index < 4" :index="index" v-bind:key="product.id"></product>
<nuxt-link class="small-6 medium-4 cell" to="camila-life-boutique" id="home-boutique-link"><h5><span>GO TO</span> BOUTIQUE <i class="fa fa-angle-right" aria-hidden="true"></i></h5></nuxt-link>
 
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
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/products/rows/?order[sort]'),
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
  data () {
    return {
      quote: '',
      quoteImage: ''
    }
  },
  head () {
    return {
      title: 'camila.life - Plant-Based Living - Vegan - Loving Life - Boutique',
      meta: [
        { name: 'robots', content: 'index, follow' },
        { hid: 'description', name: 'description', content: 'camila.life is focused on plant-based living to discover your own potential to live a happy, healthy life full of wellth!!' },
        { hid: 'og:url', property: 'og:url', content: 'https://www.camila.life' },
        { hid: 'og:image', property: 'og:image', content: 'https://huestudios.com/sites/camila.life/content/storage/uploads/CAMILA-FB.jpg' },
        { hid: 'og:title', property: 'og:title', content: 'camila.life - Plant-Based Vegan Living - Loving a Healthy Life' },
        { hid: 'og:description', property: 'og:description', content: 'camila.life is focused on plant-based living to discover your own potential to live a happy, healthy life full of wellth!!' }
      ]
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
      const scene = new this.$scrollmagic.Scene({triggerElement: '.page-container', duration: 1030}).setTween(new this.$gsap.TimelineMax().add([
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
