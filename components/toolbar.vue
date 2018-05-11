<template>
<div id="toolbar" class="">
    <nuxt-link to="/">RECIPES</nuxt-link>
    <div uk-toggle="target: #list; animation: uk-animation-slide-bottom">GROCERY LIST <span class="uk-badge">{{$store.state.list.length}}</span></div>
    <nuxt-link to="/" class="uk-visible@s">PRODUCTS</nuxt-link>
    <nuxt-link to="/">SHOP<span class="uk-badge">{{$store.state.bag.length}}</span></nuxt-link>
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
