<template>
<div class="grid-container full">
  <div class="grid-x grid-padding-x align-center-middle text-center">
  <h1 class="small-12 cell condensed-bold text-uppercase">SIGNING <span class="pink">IN</span>.</h1>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import { setToken, checkSecret, extractInfoFromHash, getUserFromLocalStorage } from '~/utils/auth'

export default {
  data () {
    return {
      user_id: '',
      ip_address: ''
    }
  },
  mounted () {
    const { token, secret } = extractInfoFromHash()
    if (!checkSecret(secret) || !token) {
      console.error('Something happened with the Sign In request')
    }
    setToken(token)
    this.$store.commit('SET_USER', getUserFromLocalStorage())
    axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?table=users&name=' + this.$store.state.user.name + '&email=' + this.$store.state.user.email + '&given_name=' + this.$store.state.user.given_name + '&family_name=' + this.$store.state.user.family_name + '&email_verified=' + this.$store.state.user.email_verified + '&gender=' + this.$store.state.user.gender + '&birthday=' + this.$store.state.user.birthday + '&last_login=' + this.$store.state.user.updated_at + '&created_at=' + this.$store.state.user.created_at + '&time_zone=' + this.$store.state.user.timezone + '&picture=' + escape(this.$store.state.user.picture) + '&picture_large=' + escape(this.$store.state.user.picture_large) + '&identity=' + this.$store.state.user.identities[0].connection + '&social_id=' + this.$store.state.user.identities[0].user_id).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
    const vm = this
    axios.get('https://api.ipify.org')
      .then((res) => {
        vm.ip_address = (res.data)
        console.log(vm.ip_address)
      })
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/users/rows/?filters[email][eq]=' + this.$store.state.user.email)
      .then((res) => {
        console.log(res)
        vm.user_id = res.data.data[0].id
      }).then(function () {
        axios.post('https://huestudios.com/sites/camila.life/scripts/ip.php?ip=' + vm.ip_address + '&user_id=' + vm.user_id + '&status=1').then(res => {
          console.log(res)
        }).catch(function (error) {
          console.log(error)
        })
      })
    if (this.$store.state.user.given_name) {
      // this.$router.replace('/')
    } else {
      // this.$router.replace('/account')
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
