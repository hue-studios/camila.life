<template>
  <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-text-center" v-vk-height-viewport>
    <div>
      <h1 class="condensed-bold pink">Logging OUT.</h1>
    </div>
  </vk-grid>
</template>

<script>
export default {
  mounted () {
    this.$auth.logout()
    return this.$auth.reset()
    window.localStorage.removeItem('auth.strategy')
    this.$store.commit('SET_LISTITEMS', 0)
    this.$store.commit('SET_RECIPES', 0)
    this.$store.commit('SET_USER', '')
  }
}
</script>

<style lang="scss" scoped>
  .uk-grid {
    min-height: 100vh;
    height: 100vh;
  }
</style>
