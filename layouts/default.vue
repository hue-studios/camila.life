<template>
<div class="uk-offcanvas-content">
  <div id="logo">
    <nuxt-link to="/">
      <h1>CAMILA</h1>
    </nuxt-link>
  </div>
  <nuxt-link to="/list" id="grocery-list-btn">
    <h2 class="condensed uk-text-uppercase uk-position-relative">GROCERY<transition name="fade"><span class="uk-badge uk-position-absolute" v-if="$store.state.list.length > 0">{{this.$store.state.list.length}}</span></transition></h2>
    <h3 class="condensed-bold">LIS</h3>
  </nuxt-link>
  <div id="shopping-bag-btn">
    <h2 class="condensed uk-text-uppercase uk-position-relative">SHOPPING <transition name="fade"><span class="uk-badge uk-position-absolute" v-if="$store.state.bag.length > 0">{{$store.state.bag.length}}</span></transition></h2>
    <h3 class="condensed-bold">BAG</h3>
  </div>
  <div id="nav-btn" uk-toggle="target: #nav" type="button" @click="full = false">
    <div id="nav-icon"><span></span><span></span></div>
  </div>
  <div id="nav" uk-offcanvas="overlay: true; mode: slide">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
      <!-- <button class="uk-offcanvas-close" type="button" uk-close></button> -->
      <ul class="uk-nav uk-nav-primary uk-margin-auto-vertical">
        <li>
          <nuxt-link to="/" class="condensed one">HOME</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/plant-based-living" class="condensed one">PLANT BASED LIVING</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/plant-based-vegan-products" class="condensed three">VEGAN PRODUCTS</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/vegan-plant-based-recipes" class="condensed two">VEGAN RECIPES</nuxt-link>
        </li>

        <li>
          <nuxt-link to="#" class="condensed four">CAMILA BOUTIQUE</nuxt-link>
        </li>
        <li v-if="$auth.$state.loggedIn">
          <nuxt-link to="/account" class="condensed five">ACCOUNT</nuxt-link>
        </li>
        <vk-grid class="uk-flex uk-flex-center uk-flex-top uk-grid-small uk-text-center uk-margin-large-top">
          <div v-if="$auth.$state.loggedIn">
            <h5 class="uk-width-1-1">{{$auth.user.email}}</h5>
            <div class="uk-width-1-1">
              <img :src='$auth.user.picture' style="width: 70px; height: 70px; border-radius: 50%;" />
            </div>
            <div class="uk-width-1-1">
              <nuxt-link class="uk-button uk-button-default uk-text-center" to="/logout">LOGOUT</nuxt-link>
            </div>
          </div>
          <div class="uk-width-1-1" v-else>
            <button class="uk-button uk-button-default uk-text-center uk-margin-large-top" @click.prevent="$auth.loginWith('auth0')">LOGIN</button>
          </div>
        </vk-grid>

      </ul>

      <!-- <h1><span class="uk-badge">{{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}</span></h1> -->


    </div>

  </div>
  <nuxt/>
  <toolbar />

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
    return {}
  },

  created() {
    if (this.$auth.$state.loggedIn) {
      this.$store.dispatch('GET_LIST_ITEMS', this.$auth.user.email)
    }
  },
  computed: mapState(['page']),

  // list() {
  //   return this.$store.getters.GET_LIST;
  // },


  components: {
    toolbar
  }

}
</script>
<style lang="scss">
</style>
