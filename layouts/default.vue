<template>
<div id="page-container-box">

  <div id="nav-bg-one" @click.prevent="closeSideMenu()">
    <div>
      <p class="body-font quote">"You alone are enough."</p>
      <p class="author">-Maya Angelou</p>
    </div>
  </div>
  <div id="nav-bg-two"></div>
  <div id="nav-bg-three"></div>
  <div id="logo" uk-parallax="scale:0.5; y: 3px; x: 7px; target: .top-section; easing: 0;">
    <nuxt-link to="/">
      <h1 uk-parallax="color: #FB00DA, #00bfff;">CAMILA</h1>
    </nuxt-link>
  </div>
  <div id="nav-btn" @click.prevent="sideMenuToggle()">
    <div id="nav-icon"> <span></span> <span></span> </div>
  </div>
  <nav id="nav-bar" @click.prevent="closeSideMenu()">
    <p>
      <nuxt-link to="/">Home</nuxt-link>
    </p>
    <p>
      <nuxt-link to="plant-based-vegan-products">Vegan INGREDIENTS</nuxt-link>
    </p>

    <p>
      <nuxt-link to="/vegan-plant-based-recipes">Vegan Recipes</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/plant-based-living">Plant-Based Living</nuxt-link>
    </p>
    <!-- <p>
      <nuxt-link to="/camila-life-boutique">boutique</nuxt-link>
    </p> -->



    <div id="social-links">
      <a href="https://twitter.com/hue_studios" target="_blank">
        <vk-icon icon="twitter"></vk-icon>
      </a>
      <a href="https://facebook.com/huestudios" target="_blank">
        <vk-icon icon="facebook"></vk-icon>
      </a>
      <a href="https://instagram.com/huestudios" target="_blank">
        <vk-icon icon="instagram"></vk-icon>
      </a>
    </div>

    <vk-grid class="uk-flex uk-flex-center uk-flex-top uk-grid-small uk-text-center uk-margin-top account-btns">
      <div class="uk-width-1-1">
        <nuxt-link class="uk-button uk-button-default uk-text-center uk-margin-small-top white" to="/account/login/">LOGIN</nuxt-link>
      </div>
    </vk-grid>
  </nav>
  <div id="page-container">
    <nuxt/>
  </div>
<nuxt-link class="" id="log-btn" to="/account/login/"><span class="uk-visible@s condensed">LOGIN</span> </nuxt-link>
  <toolbar />
  <vk-modal id="account-modal" size="container" :show.sync="$store.state.loginModal" center>
    <vk-modal-close @click.prevent="$store.commit('SET_LOGINMODAL', false)"></vk-modal-close>
    <vk-grid class="uk-flex uk-flex-center">
      <div class="">
        <h3 class="uk-text-center body-font uk-text-lowercase">CREATE A <span class="pink bold">CAMILA.LIFE</span> ACCOUNT</h3>
        <p class="uk-text-center">An account will give you the following:</p>
        <ul class="uk-text-lowercase script-font">
          <li>A personalized <span class="pink">grocery list</span> for your favorite vegan products</li>
          <li>Your own <span class="pink">recipe list</span> to keep track of what you love and what to try next</li>
          <li><span class="pink">Direct access</span> to Camila for answers to questions, plus tips and tricks when preparing vegan dishes</li>
          <li>Plus, you'll be the first to know of <span class="pink">new features</span>, products, and recipes!</li>
        </ul>
        <p class="uk-text-center">Sign up now to get started and stay connected.</p>
        <div class="uk-text-center"><nuxt-link to="/account/login/" class="uk-button uk-button-default">Login</nuxt-link></div>
      </div>
    </vk-grid>

  </vk-modal>
</div>
</template>
<script>
import toolbar from '~/components/toolbar'
import {
  mapState
} from 'vuex'

export default {
  scrollToTop: true,
  data() {
    return {
    }
  },
  created() {
  },
  computed: mapState(['page']),

  methods: {
    sideMenuToggle() {
      var elementBG1 = document.getElementById('nav-bg-one')
      var elementBG2 = document.getElementById('nav-bg-two')
      var elementBG3 = document.getElementById('nav-bg-three')
      var element = document.getElementById('nav-bar')
      var element2 = document.getElementById('nav-btn')
      var element3 = document.getElementById('page-container')
      element.classList.toggle('in-left')
      element2.classList.toggle('open')
      element3.classList.toggle('open')
      elementBG1.classList.toggle('open')
      elementBG2.classList.toggle('open')
      elementBG3.classList.toggle('open')
    },
    closeSideMenu() {
      var elementBG1 = document.getElementById('nav-bg-one')
      var elementBG2 = document.getElementById('nav-bg-two')
      var elementBG3 = document.getElementById('nav-bg-three')
      var element = document.getElementById('nav-bar')
      var element2 = document.getElementById('nav-btn')
      var element3 = document.getElementById('page-container')
      element.classList.remove('in-left')
      element2.classList.remove('open')
      element3.classList.remove('open')
      elementBG1.classList.remove('open')
      elementBG2.classList.remove('open')
      elementBG3.classList.remove('open')
    }
  },
  components: {
    toolbar
  }

}
</script>
