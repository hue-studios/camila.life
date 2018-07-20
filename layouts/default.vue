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
  <!-- <nuxt-link to="/list" id="grocery-list-btn">
    <h2 class="condensed uk-text-uppercase uk-position-relative">GROCERY<transition name="fade"><span class="uk-badge uk-position-absolute" v-if="$store.state.list.length > 0">{{this.$store.state.list.length}}</span></transition></h2>
    <h3 class="condensed-bold">LIST</h3>
  </nuxt-link>
  <div id="shopping-bag-btn">
    <h2 class="condensed uk-text-uppercase uk-position-relative">SHOPPING <transition name="fade"><span class="uk-badge uk-position-absolute" v-if="$store.state.bag.length > 0">{{$store.state.bag.length}}</span></transition></h2>
    <h3 class="condensed-bold">BAG</h3>
  </div> -->
  <div id="nav-btn" @click.prevent="sideMenuToggle()">
    <div id="nav-icon"> <span></span> <span></span> </div>
  </div>
  <nav id="nav-bar" @click.prevent="closeSideMenu()">
    <p>
      <nuxt-link to="/">Home</nuxt-link>
    </p>
    <p>
      <nuxt-link to="plant-based-vegan-products">Vegan Products</nuxt-link>
    </p>

    <p>
      <nuxt-link to="/vegan-plant-based-recipes">Vegan Recipes</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/plant-based-living">Plant-Based Living</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/camila-life-boutique">boutique</nuxt-link>
    </p>

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

    <vk-grid class="uk-flex uk-flex-center uk-flex-top uk-grid-small uk-text-center uk-margin-top">
      <div v-if="$auth.$state.loggedIn">
        <h5 class="uk-width-1-1 white uk-margin-remove-bottom">{{$auth.user.email}}</h5>
        <div class="uk-width-1-1">
          <nuxt-link to="/account">
          <img :src='$auth.user.picture' style="width: 50px; height: 50px; border-radius: 50%;margin-top: 5px;" />
        </nuxt-link>
        </div>
        <div class="uk-width-1-1 uk-margin-small-top">
          <nuxt-link class="uk-button uk-button-default uk-text-center" to="/logout">LOGOUT</nuxt-link>
        </div>
      </div>
      <div class="uk-width-1-1" v-else>
        <button class="uk-button uk-button-default uk-text-center uk-margin-small-top" @click.prevent="$auth.loginWith('auth0')">LOGIN</button>
      </div>
    </vk-grid>
  </nav>
  <div id="page-container">
    <nuxt/>
  </div>


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
        <div class="uk-text-center"><button @click="$auth.loginWith('auth0')" class="uk-button uk-button-default">Login</button></div>
      </div>
    </vk-grid>

  </vk-modal>
</div>
</template>
<script>
import axios from 'axios'
import toolbar from '~/components/toolbar'
import {
  mapState
} from 'vuex'

export default {
  scrollToTop: true,
  data() {
    return {
      ip_address: ''
    }
  },

  created() {
    if (this.$auth.$state.loggedIn) {
      this.$store.dispatch('GET_LIST_ITEMS', this.$auth.user.email)
      console.log(this.$auth.user)
      const vm = this
      axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?table=users&name=' + this.$auth.user.name + '&email=' + this.$auth.user.email + '&given_name=' + this.$auth.user.given_name + '&family_name=' + this.$auth.user.family_name +
        '&email_verified=' + this.$auth.user.email_verified + '&gender=' + this.$auth.user.gender + '&birthday=' + this.$auth.user.birthday + '&last_login=' + this.$auth.user.updated_at + '&created_at=' + this.$auth.user.created_at + '&time_zone=' +
        this.$auth.user.timezone + '&picture=' + escape(this.$auth.user.picture) + '&identity=' + this.$auth.user.identities[0].connection + '&social_id=' + this.$auth.user.identities[
          0].user_id).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
      axios.get('https://api.ipify.org')
        .then((res) => {
          vm.ip_address = (res.data)
          console.log(vm.ip_address)
        })
    }
  },
  computed: mapState(['page']),

  // list() {
  //   return this.$store.getters.GET_LIST;
  // },

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
<style lang="scss">
</style>
