<template>
<vk-grid class="uk-grid uk-flex uk-flex-center uk-flex-middle uk-text-center">
  <h1 class="uk-width-5-6 body-font uk-text-lowercase">Welcome back<span class="pink" v-if="this.$auth.user.given_name"> {{this.$store.state.user.given_name}} </span>...give us a moment to update your settings.</h1>
</vk-grid>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  middleware: 'auth',
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
  created() {
    var app = this
    console.log("NOW: " + this.$auth.$state.loggedIn)
    console.log(this.$auth.strategy.name + '  ' + app.$auth.user.email)
    this.$axios({
      method: 'get',
      url: '/tables/users/rows/?filters[email]=' + app.$auth.user.email,
      headers: {
        'Authorization': 'Bearer 9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF'
      }
    }).then(res => {
      console.log(res.data.data.length)
      if (res.data.data.length > 0) {
        console.log("User exists in local database.")
        app.$store.commit('SET_USER', res.data.data[0])

      } else {
        console.log("You need to add user to local database.")
        if (app.$auth.strategy.name === 'facebook') {
          app.$axios({
            method: 'post',
            url: '/tables/users/rows/',
            data: {
              email: app.$auth.user.email,
              given_name: app.$auth.user.first_name,
              family_name: app.$auth.user.last_name,
              birthday: app.$auth.user.birthday,
              social_id: app.$auth.user.id,
              identity: app.$auth.strategy.name,
              picture: app.$auth.user.picture.data.url,
              name: app.$auth.user.name
            },
            headers: {
              'Authorization': 'Bearer 9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF'
            }
          }).then(res => {
            app.$store.commit('SET_USER', res.data.data[0])
            app.$router.push({
              path: '/account/'
            })
          })

        } else if (app.$auth.strategy.name === 'google') {
          app.$axios({
            method: 'post',
            url: '/tables/users/rows/',
            data: app.$auth.user,
            identity: app.$auth.strategy.name,
            headers: {
              'Authorization': 'Bearer 9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF'
            }
          }).then(res => {
            app.$store.commit('SET_USER', res.data.data[0])
            app.$router.push({
              path: '/account/'
            })
          })

        } else if (app.$auth.strategy.name === 'local') {
          app.$axios({
            method: 'post',
            url: '/tables/users/rows/',
            data: {
              email: app.$auth.user.email,
              given_name: app.$auth.user.first_name,
              family_name: app.$auth.user.last_name,
              name: app.$auth.user.first_name + ' ' + app.$auth.user.last_name,
              identity: app.$auth.strategy.name,
              user_id: app.$auth.user.id
            },
            headers: {
              'Authorization': 'Bearer 9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF'
            }
          }).then(res => {
            app.$store.commit('SET_USER', res.data.data[0])
            console.log(res)

            app.$router.push({
              path: '/'
            })
          })
        }

      }
    })
    // if (this.$auth.strategy != 'local') {
    //   console.log("Checking if Google user exists in local database.")
    //   app.$axios.$get({
    //     url: '/tables/users/rows/?filters[email]=' + app.$auth.user.email,
    //     headers: {
    //       'Authorization': 'Bearer 9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF'
    //     }
    //   }).then(res => {
    //     if (res.data.length > 0) {
    //       console.log("Google user DOES exist.  Now loggin in locally.")
    //       this.$store.state.loading.message = 'We are saving your information.'
    //       app.$auth.loginWith('local', {
    //         data: {
    //           email: app.$auth.user.email,
    //           password: 'Password1'
    //         }
    //       }).then(res => {
    //         console.log("Logged in locally and redirecting to account page.")
    //         app.$router.push({
    //           path: '/account/'
    //         })
    //       })
    //     } else {
    //       console.log("Google user DOES NOT exist.  Now creating local user and logging in.")
    //       app.$axios({
    //         method: 'post',
    //         url: '/tables/directus_users/rows/',
    //         data: app.$auth.user,
    //         headers: {
    //           'Authorization': 'Bearer 9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF'
    //         }
    //       }).then(res => {
    //         // if (res.status == 200) {
    //         //
    //         //         app.$auth.loginWith('local', {
    //         //           data: {
    //         //             email: app.$auth.user.email,
    //         //             password: app.$store.state.temp_user.password
    //         //           }
    //         //         }).then(res => {
    //       })
    //     }
    //   })
    // } else {
    //   console.log("This is a local user.")
    //   app.$router.push({
    //     path: '/account/'
    //   })
    //   // this.$axios.$get('/tables/directus_users/rows/?filters[email][eq]=' + this.$auth.user.email)
    //   //   .then((res) => {
    //   //     if (res.data.length > 0) {
    //   //       console.log()
    //   //     }
    //   //     console.log(res.data[0])
    //   //   })
    // }


  },
  // created() {

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
  // }
}
</script>
<style lang="scss" scoped>
.uk-grid {
    height: 100vh;
}
</style>
