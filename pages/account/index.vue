
<template>
<vk-grid class="uk-flex uk-flex-center" id="account">
  <div class="uk-width-5-6 uk-width-2-3@m uk-text-center top-section">
    <img :src="$auth.user.picture" style=""/>
    <h5 class="uk-margin-remove-top"><span class="pink">{{email}}</span></h5>
  </div>
  <div class="uk-width-5-6 uk-width-2-3@m">
    <vk-tabs align="justify" animation="fade">
      <vk-tabs-item title="PROFILE" id="profile" class="uk-flex uk-flex-center">
        <form class="uk-flex uk-flex-center uk-flex-middle uk-flex-column" uk-grid>
          <div class="uk-width-1-1">
            <h3 class="script-font uk-text-lowercase uk-text-center">hey <span class="pink"><span v-if="given_name">{{given_name}}</span><span v-else>{{this.$auth.user.nickname}}</span></span>! </h3>
            <p>this is your camila.life profile. we will be updating this to help customize the experience and help you <span class="pink">track your journey</span>. so, make sure it's accurate and keep enjoying the <span class="script-font pink">love</span>!!</p>
            <div id="social-notice" class="" v-if="this.$auth.user.identities[0].isSocial">
              <h5>Your account is connected to your social media account you used to login with.  Certain fields are directly connected to that account.</h5>
            </div>
          </div>

            <div class="uk-width-1-1">
              <vk-grid class="uk-flex uk-flex-middle">
            <div class="uk-width-1-1 form-field">
              <label>Email</label>

              <input class="uk-input" type="email" placeholder="" :value="email" readonly disabled>
            </div>
            <div class="uk-width-1-1 uk-width-1-2@s form-field">
              <label>first name</label>
              <input class="uk-input" type="text" placeholder="" v-model="given_name" v-if="this.$auth.user.identities[0].isSocial" readonly disabled>
              <input class="uk-input" type="text"  placeholder="" v-model="given_name" v-else required>
              <div id="given-name-error" class="error">REQUIRED</div>
            </div>

            <div class="uk-width-1-1 uk-width-1-2@s form-field">
              <label>last name</label>
              <input type="text" v-if="this.$auth.user.identities[0].isSocial" class="uk-input" placeholder="" v-model="family_name" readonly disabled>
              <input type="text" class="uk-input" v-else placeholder="" v-model="family_name" required>
              <div id="family-name-error" class="error">REQUIRED</div>
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
            <option value="" selected>Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <input class="uk-input" type="text" v-else v-model="gender" readonly disabled>
            </div>
            <div class="uk-width-1-1 uk-text-center">
              <button class="uk-button uk-button-default" type="submit" @click.prevent="updateUser()">UPDATE</button>
            </div>
          </vk-grid>
        </div>
        </form>
      </vk-tabs-item>
      <vk-tabs-item title="GROCERY LIST"></vk-tabs-item>
      <vk-tabs-item title="SAVED RECIPES"></vk-tabs-item>
    </vk-tabs>

  </div>
  <div class="uk-width-5-6 uk-width-2-3@m">


  </div>

</vk-grid>
</template>

<script>
import axios from 'axios'

export default {
  fetch({
    app
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/users/rows/?filters[email][eq]=' + app.$auth.user.email)
      .then((res) => {
        console.log(res)
      })
  },
  data() {
    return {
      email: this.$auth.user.email,
      given_name: this.$auth.user.given_name,
      family_name: this.$auth.user.family_name,
      zip_code: this.$auth.user.zipcode,
      birthday: this.$auth.user.birthday,
      gender: this.$auth.user.gender
    }
  },
  components: {},
  scrollToTop: true,
  created() {
    const vm = this
    axios.get('https://api.ipify.org')
      .then((res) => {
        vm.ip_address = (res.data)
      })
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/users/rows/?filters[email][eq]=' + this.$auth.user.email)
      .then((res) => {
        // console.log(res)
        // var givenNameError = document.getElementById('given-name-error')
        // var familyNameError = document.getElementById('family-name-error')

        if (!vm.given_name || vm.given_name == 'undefined') {
          vm.given_name = res.data.data[0].given_name
        }
        if (!vm.family_name || vm.family_name == 'undefined') {
          vm.family_name = res.data.data[0].family_name
        }
        if (!vm.zip_code || vm.zip_code == 'undefined') {
          vm.zip_code = res.data.data[0].zip_code
        }
        if (!vm.birthday || vm.birthday == 'undefined') {
          vm.birthday = res.data.data[0].birthday
        }
        // if (!vm.given_name) {
        //   givenNameError.classList.add('fadeInDown')
        //   console.log('no given name')
        // } else {
        //   givenNameError.classList.remove('fadeInDown')
        // }
        // if (!vm.family_name) {
        //   familyNameError.classList.add('fadeInDown')
        // } else {
        //   familyNameError.classList.remove('fadeInDown')
        // }

      })
  },
  methods: {
    updateUser() {
      if (this.given_name && this.family_name && this.birthday) {
        axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?email=' + this.email + '&given_name=' + this.given_name + '&family_name=' + this.family_name + '&birthday=' + this.birthday + '&zip_code=' + this.zip_code + '&table=users' +
          '&ip=' + this.ip_address).then(res => {
          console.log(res)
        }).catch(function (error) {
          console.log(error)
        })
        this.showSuccessMsg({
          title: `<span class='condensed' style='font-size: 20px; font-weight: 100;'>successully updated profile`,
          image: this.$auth.user.picture
        })
      } else {

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
