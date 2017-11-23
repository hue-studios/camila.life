<template>
  <div>
<nav @click.prevent="closeSideMenu()">
<svg id="c-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.19 400"><title>C Icon</title><path class="cls-1" d="M298.87,132.62H290.2c0-62.26-52.51-123.44-119.11-123.44C74.72,9.18,61.72,128.83,61.72,199.76s13,190.58,109.37,190.58c68.22,0,119.11-67.14,119.11-134.82h8.67V383.84H290.2c0-10.83-5.41-27.07-18.4-27.07-16.25,0-44.94,42.23-100.71,42.23C79.59,399,0,310.75,0,199.76S79.59.51,171.09.51c55.22,0,79,39.53,99.08,39.53,15.16,0,20-10.29,20-23.28h8.67Z"/></svg>
<nuxt-link to="/" exact>Home</nuxt-link>
   <nuxt-link to="/camila-life-boutique">Boutique</nuxt-link>
  <nuxt-link to="/plant-based-vegan-products">Products</nuxt-link>
  <nuxt-link to="/vegan-plant-based-recipes">Recipes</nuxt-link>
  <nuxt-link to="/plant-based-living">Plant-Based Living</nuxt-link>
    <div id="user-links">
    <a v-if="!isAuthenticated" @click.prevent="showLoginScreen ()">Sign In</a>
    <nuxt-link v-else to="/auth/sign-off">Sign Off</nuxt-link>
</div>
    </nav>
     <div id="account-icon">
    <nuxt-link to="/account" v-if="loggedUser"><img :src="loggedUser.picture" alt="User Profile Image" /></nuxt-link>
    
    <a @click.prevent="showLoginScreen()" v-else><i class="fa fa-sign-in" aria-hidden="true"></i></a>
    </div>
    <header class="grid-x">
     
    <nuxt-link :to="$store.state.backLink" id="back-btn" v-if="$store.state.backLink"><div><span></span><span></span></div></nuxt-link>
  <nuxt-link to="/" id="logo" class="shrink cell" exact>camila</nuxt-link>
  
</header>
<header-icons></header-icons>
<div id="nav-btn" @click.prevent="sideMenuToggle()">
  <div id="nav-icon"> <span></span> <span></span> <span></span> </div>
  </div>
  <div class="page-container" @click.prevent="closeSideMenu()">
  
    <nuxt/>
    </div>
 
     <toolbar></toolbar>
   <login></login>
     <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="OTRlYjBmNDktYjdiMC00OTAyLWJhNDktYzVkMGI5NDZkNjY5NjM2MzgwODM2NDQ3OTY4NDk2" data-autopop="false"></script>
  </div>
</template>
<script>
import $ from 'jquery'
import login from '~/components/login.vue'
import headerIcons from '~/components/headerIcons.vue'
import toolbar from '~/components/toolbar.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  scrollToTop: true,
  data () {
    return {
      userData: {},
      user: {},
      loginBtn: false
    }
  },
  components: {
    login,
    toolbar,
    headerIcons
  },
  fetch ({store}) {
  },
  mounted () {
    this.hideOnScroll('header')
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  methods: {
    sideMenuToggle () {
      $('nav').toggleClass('in-left')
      $('.page-container').toggleClass('open')
      $('#account-icons').toggleClass('open')
      $('header').toggleClass('open')
      $('#nav-btn').toggleClass('open')
    },
    closeSideMenu () {
      $('nav').removeClass('in-left')
      $('.page-container').removeClass('open')
      $('#account-icons').removeClass('open')
      $('header').toggleClass('open')
      $('#nav-btn').removeClass('open')
    },
    hideOnScroll (element) {
      var position = $(window).scrollTop()
      $(window).scroll(function () {
        var scroll = $(window).scrollTop()
        if (scroll > position) {
          console.log('down')
          $(element).addClass('hideThis')
        } else {
          console.log('up')
          $(element).removeClass('hideThis')
        }
        position = scroll
      })
    },
    updateListItems () {
      axios.get('http://camila.life/admin/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$store.state.user.email).then(res => {
        console.log(res.data.meta)
        this.$store.commit('SET_LISTITEMS', res.data.meta.total)
      }).catch(function (error) {
        console.log(error)
      })
    },
    showLoginScreen () {
      var loginForm = document.getElementById('login-screen')
      loginForm.classList.remove('close')
    },
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
header {
transform: translateY(0px);
  transition: all 0.3s ease-out;
}
header.hideThis {
  transform: translateY(-120px);
}
</style>

