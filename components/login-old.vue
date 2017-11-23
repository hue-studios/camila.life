<template>
  <div id="login-screen" class="open">
  <div id="login-box">
  <a id="close-btn" @click.prevent="closeLogin"><div id="close-box"><span></span><span></span></div></a>
    <label>EMAIL</label>
    <input name="email" v-model="email" type="text">
    <label>PASSWORD:</label>
    <input name="password" v-model="password" type="password">
    <button @click.prevent="login">LOGIN</button>
  </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post(`http://camila.life/admin/api/1.1/auth/request-token`, {
        email: this.email,
        password: this.password
      }).then(function (response) {
        if (response.status === 200) {
          console.log(response)
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
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
