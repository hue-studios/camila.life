<template>
 <div id="login-screen" class="close">
  <div id="login-box">
  <a id="close-btn" @click.prevent="closeLogin"><div id="close-box"><span></span><span></span></div></a>
 <div id="auth0-lock"/>
 </div>
  </div>
</template>
<script>
import { show } from '~/utils/lock'

export default {
  middleware: 'anonymous',
  mounted () {
    show('auth0-lock')
  },
  methods: {
    closeLogin () {
      var loginForm = document.getElementById('login-screen')
      console.log('peter is here')
      loginForm.classList.add('close')
    }
  }
}
</script>
<style lang="scss">


</style>
