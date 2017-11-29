
<template>
 <div id="container" class="grid-container full">
 <div class="grid-x">

 <div id="top" class="small-12 cell">
 <div id="intro">

 </div>
 <div class="angled-crop">
 <p v-if="isAuthenticated" class="small-12 medium-6 cell condensed text-uppercase">Welcome <span>{{loggedUser.given_name}}</span>!</p>
  <h5>discover the <svg id="love-icon" data-name="love-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><title>Love Icon</title><path d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/></svg></h5>
<h5>create the <svg id="love-icon" data-name="love-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><title>Love Icon</title><path d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/></svg></h5>
<h5>wear the <svg id="love-icon" data-name="love-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><title>Love Icon</title><path d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/></svg></h5>
<h5>read the <svg id="love-icon" data-name="love-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><title>Love Icon</title><path d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/></svg></h5>
<h5>share the <svg id="love-icon" data-name="love-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><title>Love Icon</title><path d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/></svg></h5>
 </div>
<div id="quote" :style="'background-image: url(http://camila.life' + quoteImage + ')'"><h5 class="serif">{{quote.quote}}<span>-{{quote.author}}</span></h5></div>
</div>
 </div>
 
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
  async asyncData ({ query, error }) {
    let [productsReq, ingredientsReq, recipesReq, quoteReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/admin/api/1.1/tables/products/rows/'),
      axios.get('https://huestudios.com/sites/camila.life/admin/api/1.1/tables/ingredients/rows/'),
      axios.get('https://huestudios.com/sites/camila.life/admin/api/1.1/tables/recipes/rows/'),
      axios.get('https://huestudios.com/sites/camila.life/admin/api/1.1/tables/quotes/rows/')
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
      const scene = new this.$scrollmagic.Scene({triggerElement: '.page-container', duration: 1000}).setTween(new this.$gsap.TimelineMax().add([
        this.$gsap.TweenMax.to('#quote h5', 1, {marginLeft: '0px', ease: this.$gsap.Linear.easeNone}),
        this.$gsap.TweenMax.to('#quote h5 span', 1, {right: '-125%', opacity: '0.5', ease: this.$gsap.Linear.easeNone}),
        this.$gsap.TweenMax.to('.angled-crop', 1, {left: '26%', ease: this.$gsap.Linear.easeNone})
      ]))
      this.$ksvuescr.$emit('addScene', 'pinTopScene', scene)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
#top {
height: 100vh;
position:relative;
.angled-crop {
  width: 40%;
  height: 100%;
  background: $pink;
  position: absolute;
  left: 20%;
  top: 0px;
  z-index: 10;
  display: flex;
  align-content: center;
  align-items:center;
  text-align: center;
  flex-direction: column;
  h5 {
  color: $white;
    display: flex;
    svg {
      width: 20px;
      height: auto;
      path {
        fill:#d75a4a;
      }
    }
  }
  p { 
    font-size: 48px;
    color: $white;
  }
}
.angled-crop::before {
    width: 80px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: -80px;
    content: '';
    border-right: 80px solid $pink;
    border-top: 100vh solid transparent;
    z-index:5;
}
.angled-crop::after {
    width: 80px;
    height: 100%;
    position: absolute;
    top: 0px;
    right: -80px;
    content: '';
    border-left: 80px solid $pink;
    border-bottom: 100vh solid transparent;
    z-index:5;
}
#intro {
  height: 100%;
  width: 40%;
  position: absolute;
  left: 0px;
  top: 0px;
  background: $blue;
  box-shadow: inset 0px 0px 20px $black;
  background-image: url(http://camila.life/admin/storage/uploads/camila-sun.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
  background-color: rgba($black, 0.5);
  background-blend-mode: color-dodge;
  
}
#quote {
  box-shadow: inset 0px 0px 20px $black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 40%;
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: rgba($black, 0.9);
  background-blend-mode: exclusion;
  color: $pink;
  display: flex;
  align-items: flex-end;
  h5 {
    font-size: 124px;
    line-height: 0.7em;
    width: 50%;
    margin-bottom: -15px;
    margin-left: 80px;
    position: relative;
    display: block;
    span {
      position: absolute;
      z-index: 5;
      font-size: 22px;
      line-height: 20px;
      color: $white;
      font-family: $serif-font;
      text-transform: uppercase;
      bottom: 43px;
      right: -50%;
    }
  }
}
}
.featured {
  height: 100vh;
}
.sidebar {
  height: 100vh;
}
</style>
