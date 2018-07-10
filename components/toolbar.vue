<template>
<div id="toolbar" class="">
  <nuxt-link to="/plant-based-vegan-products">VEGAN PRODUCTS</nuxt-link>
    <nuxt-link to="/vegan-plant-based-recipes" class="uk-visible@s">VEGAN RECIPES</nuxt-link>
    <nuxt-link to="/list" v-if="$auth.$state.loggedIn">GROCERY LIST <span id="grocery-list-count" class="uk-badge">{{$store.state.list.length}}</span></nuxt-link>
    <nuxt-link to="/plant-based-living" v-else>PLANT-BASED LIVING</nuxt-link>
    <nuxt-link to="/camila-life-boutique" class="uk-visible@s">BOUTIQUE<span class="uk-badge">{{$store.state.bag.length}}</span></nuxt-link>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {}
  }
}
</script>
