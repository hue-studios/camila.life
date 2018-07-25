<template>
<vk-grid class="uk-grid uk-flex uk-flex-center uk-flex-middle uk-text-center">
  <h1 class="uk-width-5-6">Welcome back {{this.$auth.user.given_name}}...we are updating your settings.</h1>
</vk-grid>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      ip_address: ''
    }
  },
  created() {
    const vm = this
    if (this.$auth.$state.loggedIn) {
      this.$store.dispatch('GET_LIST_ITEMS', this.$auth.user.email)
      this.$store.dispatch('GET_SAVED_RECIPES', this.$auth.user.email)
      axios.get('https://api.ipify.org')
        .then((res) => {
          vm.ip_address = (res.data)
          axios.post('https://huestudios.com/sites/camila.life/scripts/ip.php?status=1&user_id=' + this.$auth.user.email + '&ip=' + this.ip_address).then(function (response) {
            console.log(response)
          }).catch(function (error) {
            console.log(error)
          })
        })
        if (this.$auth.user.identities[0].connection == 'google-oauth2') {
          axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?table=users&name=' + this.$auth.user.name + '&email=' + this.$auth.user.email + '&given_name=' + this.$auth.user.given_name + '&family_name=' + this.$auth.user
            .family_name +
            '&nickname=' + this.$auth.user.nickname + '&email_verified=' + this.$auth.user.email_verified + '&gender=' + this.$auth.user.gender + '&last_login=' + this.$auth.user.updated_at + '&created_at=' + this.$auth.user.created_at +
            '&picture=' +
            escape(this.$auth.user.picture) + '&identity=' + this.$auth.user.identities[0].connection + '&social_id=' + this.$auth.user.identities[0].user_id).then(function (response) {
            if(vm.$auth.user.given_name && vm.$auth.user.family_name) {
              vm.$router.push({
                path: '/'
              });
            } else {
              vm.$router.push({
                path: '/account/'
                // query: {
                //   q: this.q
                // }
              });

            }

          }).catch(function (error) {
            console.log(error)
          })
        } else {
          axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?table=users&nickname=' + this.$auth.user.nickname + '&email=' + this.$auth.user.email + '&email_verified=' + this.$auth.user.email_verified + '&last_login=' +
            this.$auth.user
            .updated_at + '&created_at=' + this.$auth.user.created_at + '&picture=' + escape(this.$auth.user.picture) + '&identity=' + this.$auth.user.identities[0].connection).then(function (response) {
              if( vm.$auth.user.given_name && vm.$auth.user.family_name) {
                vm.$router.push({
                  path: '/'
                });
              } else {
                vm.$router.push({
                  path: '/account/'
                  // query: {
                  //   q: this.q
                  // }
                });

              }
          }).catch(function (error) {
            console.log(error)
          })
        }
    }
  }
}
</script>
<style lang="scss" scoped>
.uk-grid {
    height: 100vh;
}
</style>
