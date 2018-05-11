<template>
<div>
  <div class="uk-offcanvas-content">
    <div id="logo">
      <nuxt-link to="/">
        <h1>CAMILA</h1>
      </nuxt-link>
    </div>
    <div id="grocery-list-btn" uk-toggle="target: #list; animation: uk-animation-slide-bottom">
      <h2 class="condensed uk-text-uppercase uk-position-relative">GROCERY<transition name="fade"><span class="uk-badge uk-position-absolute" v-if="$store.state.list.length > 0">{{this.$store.state.list.length}}</span></transition></h2>
      <h3 class="condensed-bold">LIST</h3>
    </div>
    <div id="shopping-bag-btn">
      <h2 class="condensed uk-text-uppercase uk-position-relative">SHOPPING <transition name="fade"><span class="uk-badge uk-position-absolute" v-if="$store.state.bag.length > 0">{{$store.state.bag.length}}</span></transition></h2>
      <h3 class="condensed-bold">BAG</h3>
    </div>
    <div id="nav-btn" uk-toggle="target: #nav" type="button" @click="full = false">
      <div id="nav-icon"><span></span><span></span></div>
    </div>
    <div id="nav" uk-offcanvas="overlay: true; mode: slide">
      <div class="uk-offcanvas-bar uk-flex uk-flex-column">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-margin-auto-vertical">
          <li>
            <nuxt-link to="/" class="condensed one">HOME</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/plant-based-living" class="condensed one">PLANT BASED LIVING</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/vegan-plant-based-recipes" class="condensed two">RECIPES</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/plant-based-vegan-products" class="condensed three">PRODUCTS</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="condensed four">SHOP</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/account" class="condensed five">ACCOUNT</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <nuxt/>

    <toolbar />

  </div>
  <div id="list" class="uk-animation-slide-bottom uk-box-shadow-xlarge" hidden>
    <vk-icon-button id="close-btn" icon="close" uk-toggle="target: #list; animation: uk-animation-slide-bottom, uk-animation-slide-bottom"></vk-icon-button>
    <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-grid uk-child-width-1-1" v-if="!$auth.$state.loggedIn" v-vk-height-viewport="{ minHeight: 600 }">
      <div class="uk-width-auto">
        <h2 class="white uk-text-center">CREATE YOUR OWN GROCERY LIST</h2>
        <ul class="checkmark-list script-font">
          <li>create personalized grocery list</li>
          <li>save your favorite vegan products</li>
          <li>save recipes to use in your kitchen</li>
          <li>ask Camila questions</li>
        </ul>
        <button class="uk-button uk-button-default condensed uk-light uk-text-center" @click.prevent="$auth.loginWith('auth0')">LOGIN</button>
      </div>
    </vk-grid>
    <vk-grid class="uk-flex uk-flex-center uk-grid uk-child-width-1-1" v-else v-vk-height-viewport="{ minHeight: 600 }">
      <h1 class="uk-width-1-1 uk-text-center script-font">{{$auth.user.given_name}}'S GROCERY LIST</h1>

      <ul uk-accordion class="ingredient-list uk-light">
        <li class="uk-open">

          <a class="uk-accordion-title uk-text-uppercase uk-text-center">Dairy-Free</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" v-if="item.category == 'dairy-free'" :id="item.product_id" :index="index" v-bind:key="'list-'+item.product_id" group="dairy-free"></ingredientListItem>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title uk-text-uppercase uk-text-center">Meat-Free</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" v-if="item.category == 'meat-free'" :id="item.product_id" :index="index" v-bind:key="'list-' + item.product_id" group="meat-free"></ingredientListItem>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title uk-text-uppercase uk-text-center">oils / sauces</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" :id="item.product_id" :index="index" v-if="item.category == 'oils / sauces'" v-bind:key="'list-' + item.product_id" group="oils / sauces"></ingredientListItem>
          </div>
        </li>
      </ul>
    </vk-grid>
  </div>
</div>
</template>
<script>
import toolbar from '~/components/toolbar'
import ingredientListItem from '~/components/ingredientListItem'

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
  computed: {
    list() {
      return this.$store.getters.GET_LIST;
    }
  },
  components: {
    toolbar,
    ingredientListItem
  }

}
</script>
<style lang="scss">
</style>
