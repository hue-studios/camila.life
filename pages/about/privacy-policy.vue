
<template>
 <div class="grid-x grid-padding-x align-center">
       <h1 id="logo" class="large-12 cell text-center">camila<span class="white">.life</span></h1>
  <h2 class="large-12 cell text-center">privacy policy</h2>
  <div class="medium-10 large-7 cell">

<h5 class="text-center">Information that is gathered from visitors</h5>
<p>In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.</p>

<p>Cookies may be used to remember visitor preferences when interacting with the website.</p>

<p>Where registration is required, the visitor's email and a username will be stored on the server.</p>

<h5 class="text-center">How the Information is used</h5>
<p>The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising.</p>

<p>E-mail addresses will not be sold, rented or leased to 3rd parties.</p>

<p>E-mail may be sent to inform you of news of our services or offers by us or our affiliates.</p>

<h5 class="text-center">Visitor Options</h5>
<p>If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in e-mail that you receive.</p>

<p>You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.</p>

<h5 class="text-center">Cookies</h5>
<p>Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website.</p>

<p>3rd party advertising companies may also use cookies for tracking purposes.</p>

<h5 class="text-center">Google Ads</h5>
<p>Google, as a third party vendor, uses cookies to serve ads.</p>

<p>Google's use of the DART cookie enables it to serve ads to visitors based on their visit to sites they visit on the Internet.</p>

<p>Website visitors may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p>
      
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
