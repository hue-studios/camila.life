<template>
  <div class="grid-container full">
  <div class="grid-x grid-padding-x align-center-middle text-center">
  <h1 class="small-12 cell condensed-bold text-uppercase">PLEASE SIGN IN <a @click.prevent="showLoginScreen()">HERE</a>.</h1>
  </div>
  </div>
</template>

<script>

export default {
  middleware: 'anonymous',
  mounted () {
    var loginForm = document.getElementById('login-screen')
    loginForm.classList.remove('close')
  },
  methods: {
    showLoginScreen () {
      var loginForm = document.getElementById('login-screen')
      loginForm.classList.remove('close')
    }
  }
}
</script>
<style lang="scss" scoped>
  .grid-x {
    height: 70vh;
    align-items: center;
  }
</style>