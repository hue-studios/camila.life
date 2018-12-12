<template>
  <vk-grid class="uk-grid uk-flex uk-flex-center uk-flex-middle uk-text-center" v-vk-height-viewport>

          <div class="uk-width-5-6">
            <h5 v-if="$auth.$state.redirect">
              You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong>
            </h5>
            <login/>
            <button @click="$auth.loginWith('google')" class="uk-button uk-button-default">Login with Google</button>
            <button @click="$auth.loginWith('facebook')" class="uk-button uk-button-default">Login with Facebook</button>

      </div>


  </vk-grid>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import login from "~/components/login"
export default {
  layout({
    app
  }) {
    return !app.$auth.loggedIn ? 'default' : 'authorized';
  },
  data() {
    return {
      ip_address: '',
      // user: {}
    }
  },
  components: {
    login
  },
  // mounted () {
  //    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/users/rows/?filters[email][eq]=' + this.$auth.user.email)
  //     .then((res) => {
  //       console.log(res.data.data[0])
  //       this.user = res.data.data[0]
  //     })
  // },
  created() {
    console.log(this.$auth.$state.loggedIn)
    // const vm = this
    // if (this.$auth.$state.loggedIn) {
    //   this.$store.dispatch('GET_LIST_ITEMS', this.$auth.user.email)
    //   this.$store.dispatch('GET_SAVED_RECIPES', this.$auth.user.email)
    //   axios.get('https://api.ipify.org')
    //     .then((res) => {
    //       vm.ip_address = (res.data)
    //       axios.post('https://huestudios.com/sites/camila.life/scripts/ip.php?status=1&user_id=' + this.$auth.user.email + '&ip=' + this.ip_address).then(function (response) {
    //         console.log("IP record added.")
    //       }).catch(function (error) {
    //         console.log(error)
    //       })
    //     })
    //
    //   if (this.$auth.user.identities[0].connection == 'google-oauth2') {
    //     axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?table=users&name=' + this.$auth.user.name + '&email=' + this.$auth.user.email + '&given_name=' + this.$auth.user.given_name + '&family_name=' + this.$auth.user
    //       .family_name +
    //       '&nickname=' + this.$auth.user.nickname + '&email_verified=' + this.$auth.user.email_verified + '&gender=' + this.$auth.user.gender + '&last_login=' + this.$auth.user.updated_at + '&created_at=' + this.$auth.user.created_at +
    //       '&picture=' +
    //       escape(this.$auth.user.picture) + '&identity=' + this.$auth.user.identities[0].connection + '&social_id=' + this.$auth.user.identities[0].user_id).then(function (response) {
    //       console.log("User info inserted.")
    //       if (vm.$auth.user.given_name && vm.$auth.user.family_name) {
    //         vm.$router.push({
    //           path: '/'
    //         });
    //       } else {
    //         vm.$router.push({
    //           path: '/account/'
    //         });
    //
    //       }
    //
    //     }).catch(function (error) {
    //       console.log(error)
    //     })
    //   } else {
    //     axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?table=users&nickname=' + this.$auth.user.nickname + '&email=' + this.$auth.user.email + '&email_verified=' + this.$auth.user.email_verified + '&last_login=' +
    //       this.$auth.user
    //       .updated_at + '&created_at=' + this.$auth.user.created_at + '&picture=' + escape(this.$auth.user.picture) + '&identity=' + this.$auth.user.identities[0].connection).then(function (response) {
    //         console.log("user created at ." + moment(vm.$auth.user.created_at).format("MM D, YYYY HH:mm:ss"))
    //       if ((moment(vm.$auth.user.created_at).isBefore(moment().subtract(2, 'minutes')))) {
    //         vm.$router.push({
    //           path: '/'
    //         });
    //       } else {
    //         vm.$router.push({
    //           path: '/account/'
    //         });
    //       }
    //     }).catch(function (error) {
    //       console.log(error)
    //     })
    //   }
    // }
  }
}
</script>
<style lang="scss" scoped>
.uk-grid {
    height: 100vh;
}
</style>
