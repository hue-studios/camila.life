<template>
<div id="toolbar" class="">
  <nuxt-link to="/plant-based-vegan-products"><span class="uk-visible@s">VEGAN </span> INGREDIENTS</nuxt-link>
    <nuxt-link to="/vegan-plant-based-recipes"><span class="uk-visible@s">VEGAN </span> RECIPES</nuxt-link>

    <nuxt-link class="uk-visible@s" to="/plant-based-living">PLANT-BASED LIVING</nuxt-link>
    <!-- <nuxt-link to="/camila-life-boutique" class="uk-visible@s">BOUTIQUE</nuxt-link> -->

    <a @click.prevent="showLoginModal()" id="account-btn"><vk-icon icon="user"></vk-icon></a>
</div>
</template>
<script>

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
