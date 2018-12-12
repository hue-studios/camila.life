
<template>
<vk-grid class="uk-flex uk-flex-center" id="account">
  <div class="uk-width-5-6 uk-width-2-3@m uk-text-center top-section">
    <img :src="this.$store.state.picture" style=""/>
    <h5 class="uk-margin-remove-top"><span class="pink">{{this.$store.state.user.email}}</span></h5>
  </div>
  <div class="uk-width-5-6 uk-width-2-3@m">
    <vk-tabs align="justify" animation="fade">
      <vk-tabs-item title="PROFILE" id="profile" class="uk-flex uk-flex-center">
        <form @submit.prevent="updateUser()" class="uk-flex uk-flex-center uk-flex-middle uk-flex-column" uk-grid>
          <div class="uk-width-1-1">
            <h3 class="script-font uk-text-lowercase uk-text-center uk-animation-shake">hey <span class="pink"><span v-if="given_name">{{given_name}}</span><span v-else>{{this.$auth.user.nickname}}</span></span>! </h3>
            <p>this is your camila.life profile. we will be updating this to help customize the experience and help you <span class="pink">track your journey</span>. so, make sure it's accurate and keep enjoying the <span class="script-font pink">love</span>!!</p>
            <div id="social-notice" class="" v-if="this.$auth.strategy !== 'local'">
              <h5>Your account is connected to your social media account you used to login with.  Certain fields are directly connected to that account.</h5>
            </div>
          </div>

            <div class="uk-width-1-1">
              <vk-grid class="uk-flex uk-flex-middle">
            <div class="uk-width-1-1 form-field">
              <label>Email</label>

              <input class="uk-input" type="email" placeholder="" :value="email" readonly disabled>
            </div>
            <div class="uk-width-1-1 uk-width-1-2@s form-field" v-bind:class="[given_name_error ? 'uk-animation-shake' : '']">
              <label >first name <span id="family-name-error" class="error">REQUIRED</span></label>
              <input class="uk-input" type="text" placeholder="" v-model="given_name" v-if="this.$auth.strategy !== 'local'" v-bind:class="[given_name_error ? 'pink-porder' : '']" readonly disabled>
              <input class="uk-input" type="text"  placeholder="" v-model="given_name" v-else v-bind:class="[given_name_error ? 'pink-border' : '']" required>

            </div>

            <div class="uk-width-1-1 uk-width-1-2@s form-field" v-bind:class="[family_name_error ? 'uk-animation-shake' : '']">
              <label v-bind:class="[family_name_error ? 'uk-animation-shake' : '']">last name <span id="family-name-error" class="error" >REQUIRED</span></label>
              <input type="text" v-if="this.$auth.strategy !== 'local'" class="uk-input" placeholder="" v-model="family_name" v-bind:class="[family_name_error ? 'pink-border' : '']" readonly disabled>
              <input type="text" class="uk-input" v-else placeholder="" v-model="family_name" v-bind:class="[family_name_error ? 'pink-border' : '']" required>

            </div>

            <div class="uk-width-1-1 uk-width-auto@s form-field" id="birthday">
              <label>birthday</label>


              <input class="uk-input" type="date" placeholder="" v-model="birthday">
            </div>

            <div class="uk-width-expand uk-width-auto@s form-field" id="zip">
              <label>zip</label>

              <input class="uk-input" type="text" placeholder="" maxlength="5" v-model="zip_code">
            </div>
            <div class="uk-width-1-1 uk-width-auto@s form-field" id="gender">
              <label>gender</label>
              <select v-if="!this.$auth.user.gender" class="uk-select" v-model="gender">
            <option value="No response" selected>Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <input class="uk-input" type="text" v-else v-model="gender" readonly disabled>
            </div>
            <div class="uk-width-1-1 uk-text-center">
              <button v-bind:class="[family_name && given_name ? 'pink-border' : '']" class="uk-button uk-button-default" type="submit" :disabled="(!given_name || !family_name)">UPDATE</button>
            </div>
          </vk-grid>
        </div>
        </form>
      </vk-tabs-item>
      <vk-tabs-item title="GROCERY LIST">
        <list />
      </vk-tabs-item>
      <vk-tabs-item title="SAVED RECIPES"></vk-tabs-item>
    </vk-tabs>

  </div>
  <div class="uk-width-5-6 uk-width-2-3@m">


  </div>

</vk-grid>
</template>

<script>
import axios from 'axios'
import list from '~/components/list/list'

export default {
  layout: 'authorized',
  // fetch({
  //   app
  // }) {
  //   return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/users/rows/?filters[email][eq]=' + app.$auth.user.email)
  //     .then((res) => {
  //       console.log(res)
  //     })
  // },
  middleware: 'auth',
  data() {
    return {
      email: '',
      given_name: this.$store.state.user.given_name,
      family_name: this.$store.state.user.family_name,
      zip_code: this.$store.state.user.zipcode,
      birthday: this.$store.state.user.birthday,
      gender: this.$store.state.user.gender,
      given_name_error: false,
      family_name_error: false
    }
  },
  components: {
    list
  },
  scrollToTop: true,
  mounted () {
    if(!this.$store.state.user) {
      this.$axios.get('/tables/users/rows/?filters[email][eq]=' + this.$auth.user.email, {
        headers: {
          'Authorization': 'Bearer 9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF'
        }
      }).then((res) => {
        console.log(res)
        app.$store.commit('SET_USER', res.data.data[0])
      })
    }
  },
  created() {

    const vm = this
    axios.get('https://api.ipify.org')
      .then((res) => {
        vm.ip_address = (res.data)
      })
  },
  watch: {
  },
  methods: {
    updateUser() {

      if (this.given_name && this.family_name) {
        this.given_name_error = false
        this.family_name_error = false
        axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?email=' + this.email + '&given_name=' + this.given_name + '&name=' + this.given_name + ' ' + this.family_name + '&family_name=' + this.family_name + '&birthday=' + this.birthday + '&gender=' + this.gender + '&zip_code=' + this.zip_code + '&table=users' +
          '&ip=' + this.ip_address).then(res => {
          console.log(res)
        }).catch(function (error) {
          console.log(error)
        })
        this.showSuccessMsg({
          title: `<span class='condensed' style='font-size: 20px; font-weight: 100;'>successully updated profile`,
          image: this.$auth.user.picture
        })
      } else if (!this.given_name && this.family_name) {
        this.given_name_error = true
        this.family_name_error = false
      } else if (this.given_name && !this.family_name) {
        this.given_name_error = false
        this.family_name_error = true
      } else {
        this.given_name_error = true
        this.family_name_error = true
      }
    },
    getFirstWord(string) {
      var first = string.split(' ')
      return first[0]
    },
    getLastWord(val) {
      var n = val.split(' ')
      return n[n.length - 1]
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successully updated profile',
      position: 'bottomRight',
      color: 'white',
      message: '',
      timeout: 2000,
      titleLineHeight: '20px'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
