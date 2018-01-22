
<template>
 <div id="container" class="grid-container full">
  <div class="grid-x">
    <div id="top" class="small-12 cell">
      <div id="intro"> </div>
      <div class="angled-crop">
        <div id="intro-image"></div>
        <p>Hello health wonderers...my name is Camila.<span class="show-for-medium"> I too like all of you have been on a “discovering good and health journey”.</span> My journey started in 2010 and I’m still on it!</p>
        <p>This site is my next phase and soon you will see a lot of ingredients, recipes, ideas, and even a shopping assistant for your own vegan adventures.</p>
        <p>For this first phase, I am excited to launch my online boutique!! <span class="show-for-medium">Check it out <nuxt-link to="/camila-life-boutique" class="underline-link">here</nuxt-link> and stay tuned!!</span></p>
      </div>
      <div id="quote" :style="'background-image: url(https://huestudios.com' + quoteImage + ')'">
        <h5 class="serif">{{quote.quote}}<span>-{{quote.author}}</span></h5>
      </div>
    </div>
  </div>
  <div id="home-boutique" class="grid-x">
    <h1 id="home-boutique-title" class="small-12 cell pink">BOUTIQUE</h1>
    <!-- <div class="small-12 large-8 cell promo text-center">
      <div class="promo-container">
        <div class="background-cover">
          <h5>WEAR. STRUT. GIVE THE LOVE.</h5>
          <h2>PRE-SALE EVENT</h2>
          <h1 class="green">GET 20% OFF</h1>
          <h5>ON ALL ITEMS</h5>
          <p class="condensed-bold">UNTIL DEC 11TH</p>
          <h3>ENTER CODE <strong>SHOPTHELOVE</strong> AT CHECKOUT</h3>
          <p class="condensed-bold instructions">*ITEMS WILL BE SHIPPED BY DEC 15TH</p>
        </div>
      </div>
    </div> -->
    <product class="small-6 medium-4 cell" v-for="(product, index) in products" :product="product" v-if="index < 6" :index="index" v-bind:key="product.id"></product>
    <nuxt-link class="small-6 medium-4 cell" to="camila-life-boutique" id="home-boutique-link">
      <div class="home-boutique-link-container">
        <h5><span>GO TO</span> BOUTIQUE <i class="fa fa-angle-right" aria-hidden="true"></i></h5>
      </div>
    </nuxt-link>
  </div>
  <mailing-list-inline></mailing-list-inline>
  <camila-footer></camila-footer>
</div>
</template>
<script>
import axios from 'axios'
import product from '~/components/product.vue'
import mailingListInline from '~/components/mailingListInline'
import camilaFooter from '~/components/camilaFooter'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: true,
  fetch ({ store }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
    }
  },
  async asyncData ({ query, error }) {
    let [homePageReq, quoteReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/home_page/rows/1'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/quotes/rows/')
    ])
    return {
      featuredArticle: homePageReq.data.data.featured_article.data[0],
      featuredItems: homePageReq.data.data.featured_items.data,
      featuredProducts: homePageReq.data.data.home_page_products.data,
      featuredIngredients: homePageReq.data.data.home_page_ingredients.data,
      featuredRecipes: homePageReq.data.data.home_page_recipes.data,
      quote: quoteReq.data.data[0],
      quoteImage: quoteReq.data.data[0].image.data.url
    }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  data () {
    return {
      products: [],
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
        { hid: 'og:url', property: 'og:url', content: 'http://www.camila.life' },
        { hid: 'og:image', property: 'og:image', content: 'http://huestudios.com/sites/camila.life/content/storage/uploads/CAMILA-FB.jpg' },
        { hid: 'og:title', property: 'og:title', content: 'camila.life - Plant-Based Vegan Living - Loving a Healthy Life' },
        { hid: 'og:description', property: 'og:description', content: 'camila.life is focused on plant-based living to discover your own potential to live a happy, healthy life full of wellth!!' }
      ]
    }
  },
  components: {
    product,
    mailingListInline,
    camilaFooter
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
