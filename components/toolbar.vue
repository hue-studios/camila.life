<template>
<div id="toolbar" class="">
  <nuxt-link to="/plant-based-vegan-products"><span class="uk-visible@s">VEGAN </span> INGREDIENTS <span id="grocery-list-count" v-if="$store.state.list.length > 0 && $auth.$state.loggedIn" class="uk-badge">{{$store.state.list.length}}</span></nuxt-link>
    <nuxt-link to="/vegan-plant-based-recipes"><span class="uk-visible@s">VEGAN </span> RECIPES <span class="uk-badge" v-if="$store.state.recipes.length > 0 && $auth.$state.loggedIn">{{$store.state.recipes.length}}</span></nuxt-link>

    <nuxt-link class="uk-visible@s" to="/plant-based-living">PLANT-BASED LIVING</nuxt-link>
    <!-- <nuxt-link to="/camila-life-boutique" class="uk-visible@s">BOUTIQUE<span class="uk-badge">{{$store.state.bag.length}}</span></nuxt-link> -->
    <nuxt-link to="/account/" id="account-btn" v-if="$auth.$state.loggedIn"><vk-icon icon="user"></vk-icon><span class="uk-badge">{{$store.state.list.length + $store.state.recipes.length}}</span></nuxt-link>
    <a @click.prevent="showLoginModal()" v-else id="account-btn"><vk-icon icon="user"></vk-icon></a>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    showLoginModal () {
      this.$store.commit('SET_LOGINMODAL', true)
    }
  },
  mounted: function () {
  }
}
</script>
