<template>
  <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-text-center" v-vk-height-viewport>
    <div>
      <h1 class="condensed-bold pink">LOGGIN OUT.</h1>
    </div>
  </vk-grid>
</template>

<script>
export default {
  layout({
    app
  }) {
    return !app.$auth.loggedIn ? 'default' : 'authorized';
  },
  mounted () {

    this.$auth.logout()
    window.localStorage.removeItem('auth.strategy')
    this.$store.commit('SET_LISTITEMS', 0)
    this.$store.commit('SET_RECIPES', 0)
    this.$store.commit('SET_USER', '')
    // this.$router.push('/')
    location.replace('/')
    this.$auth.reset()

  }
}
</script>

<style lang="scss" scoped>
  .uk-grid {
    min-height: 100vh;
    height: 100vh;
  }
</style>
