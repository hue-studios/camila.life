<template>
<div class="grid-y">
  <p class="small-12 cell">signing in.</p>
  </div>
</template>

<script>
import axios from 'axios'
import { setToken, checkSecret, extractInfoFromHash, getUserFromLocalStorage } from '~/utils/auth'

export default {
  mounted () {
    const { token, secret } = extractInfoFromHash()
    if (!checkSecret(secret) || !token) {
      console.error('Something happened with the Sign In request')
    }
    setToken(token)
    this.$store.commit('SET_USER', getUserFromLocalStorage())
    axios.post('http://camila.life/scripts/user.php?table=users&name=' + this.$store.state.user.name + '&email=' + this.$store.state.user.email + '&given_name=' + this.$store.state.user.given_name + '&family_name=' + this.$store.state.user.family_name + '&email_verified=' + this.$store.state.user.email_verified + '&gender=' + this.$store.state.user.gender + '&birthday=' + this.$store.state.user.birthday + '&last_login=' + this.$store.state.user.updated_at + '&created_at=' + this.$store.state.user.created_at + '&time_zone=' + this.$store.state.user.timezone + '&picture=' + escape(this.$store.state.user.picture) + '&picture_large=' + escape(this.$store.state.user.picture_large) + '&identity=' + this.$store.state.user.identities[0].connection + '&social_id=' + this.$store.state.user.identities[0].user_id).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
    this.$router.replace('/')
  }
}
</script>
<style scoped lang="scss">
div {
  height: 100vh;
}
</stlye>