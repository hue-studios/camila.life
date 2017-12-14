
<template>
  <div class="grid-x account-container">
   <h1 class="small-12 cell text-center text-lowercase account__title"><img :src="loggedUser.picture" style="width: 50px; height: 50px;"/> <span class="green">{{ loggedUser.given_name}}'s</span> account</h1>
    
   <form class="small-12 cell">
  <div class="grid-x account__user">
  <p class="small-12 medium-10 medium-offset-1 text-center cell account__user-intro">hey <span class="green">{{loggedUser.given_name}}</span>! <br></br> this is your camila.life profile.  we will be updating this to help customize the experience and track your journey when using our app.  so, make sure it's accurate and keep enjoying the <i class="fa fa-heart red"></i>!!</p>

    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">Email</label>
    </div>
    <div class="small-9 medium-6 large-6 cell">
      <input type="email" id="middle-label" placeholder="" :value="email" readonly>
    </div>
    <div class="small-12 cell show-for-medium"></div>
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">first name</label>
    </div>
    <div class="small-9 medium-6 large-6 cell">
      <input type="text" id="middle-label" placeholder="" :value="given_name" v-model="given_name">
    </div>
    <div class="small-12 cell show-for-medium"></div>
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">last name</label>
    </div>
    <div class="small-9 medium-6 large-6 cell">
      <input type="text" id="middle-label" placeholder="" :value="family_name" v-model="family_name">
    </div>
    <div class="small-12 cell show-for-medium"></div>
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">birthday</label>
    </div>
    <div class="small-9 medium-4 cell">
      <input type="date" id="middle-label" placeholder="" :value="birthday" v-model="birthday">
    </div>
    <div class="small-12 cell show-for-medium"></div>
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">zip</label>
    </div>
    <div class="small-9 medium-4 cell">
      <input type="text" id="middle-label" placeholder="" maxlength="5"  :value="zip_code" v-model="zip_code">
    </div>
    <div class="small-12 cell text-center">
      <button type="submit" @click.prevent="updateUser()">UPDATE</button>
    </div>
  </div>
</form>
<div class="small-12 cell account-links">
<nuxt-link to="/auth/sign-off">Sign Off</nuxt-link>
<nuxt-link v-if="this.$store.state.user.email" :to="'/account/' + this.$store.state.user.email">SHOPPING LIST</nuxt-link>
 </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  fetch ({ store }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email)
      .then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
  },
  data () {
    return {
      email: this.$store.state.user.email,
      given_name: this.$store.state.user.given_name,
      family_name: this.$store.state.user.family_name,
      zip_code: this.$store.state.user.zipcode,
      birthday: this.$store.state.user.birthday
    }
  },
  middleware: 'authenticated',
  computed: mapGetters(['loggedUser']),
  scrollToTop: true,
  created () {
    const vm = this
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/users/rows/?filters[email][eq]=' + this.$store.state.user.email)
      .then((res) => {
        console.log(res)
        if (!vm.zip_code) {
          vm.zip_code = res.data.data[0].zip_code
        }
        if (!vm.birthday) {
          vm.birthday = res.data.data[0].birthday
        }
      })
  },
  methods: {
    updateUser () {
      axios.post('https://huestudios.com/sites/camila.life/scripts/user.php?email=' + this.email + '&given_name=' + this.given_name + '&family_name=' + this.family_name + '&birthday=' + this.birthday + '&zip_code=' + this.zip_code + '&table=users').then(res => {
        console.log(res)
      }).catch(function (error) {
        console.log(error)
      })
      this.showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; font-weight: 100;'>successully updated profile`, image: this.loggedUser.picture})
    },
    getFirstWord (string) {
      var first = string.split(' ')
      return first[0]
    },
    getLastWord (val) {
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
@import './assets/scss/_vars.scss';
.account-container {
  min-height:600px;
  max-width: 700px;
 
  .account__title {
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: $body-font;
    color: $white;
    font-size: 24px;
    line-height: 1em;
    font-weight: 100;
    @media (min-width: $medium) {
      font-size: 32px;
      font-weight: 100;
    }
    img {
      border-radius: 50%;
      border: thin solid $green;
      margin-right: 15px;
      
    }
  }
  .account__title span {
    position:relative;
  }
  .account__title span::before {
    content: '';
    position: absolute;
    width: 11px;
    height: 1px;
    background: $green;
    bottom: 2px;
    left: 1px;
    @media (min-width: $medium) {
      bottom: 5px;
      left: 1px;
      width: 18px;
    }
  }
  .account__user {
    padding: 40px 20px;
    color: $white;
    margin-bottom: 20px;
    margin-top: 10px;
    border: thin solid $pink;
    background: $pink;
    border-radius: 4px;
    background: $pink-gradient-2;
    box-shadow: 0px 2px 15px rgba($black, 0.4);
     width: 90%;
  margin: 0 5%;
  @media (min-width: 800px) {
     margin-right: auto;
     margin-left: auto;
     width: 700px
   }
    .account__user-intro {
      font-size: 16px;
      line-height: 20px;
      font-weight: 900;
      margin-bottom: 20px;
    }
    label {
  text-transform: uppercase;
  font-family: $condensed-font;
  font-size: 15px;
  color: $white;
  padding-right: 5px;
  @media (min-width: $medium) {
    font-size: 18px;
  }
}
input {
  background: none;
  border: none;
  border-bottom: thin solid $white ;
  box-shadow: none;
  color: $white;
  font-family: $bold-font;
}
input:focus {
  border: none;
  border-bottom: thin solid $blue;
  box-shadow: none;
  background: none;
}
    button {
      border: thin solid $green;
      color: $green;
      border-radius: 2px;
      padding: 20px 30px 17px;
      font-family: $condensed-bold-font;
    }
  }
  .account-links {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 70px;
  align-content: center;
  justify-content: center;
  align-items: center;
  a {
      border: thin solid $green;
      color: $green;
      border-radius: 2px;
      padding: 10px 20px 7px;
      width: 200px;
      margin: 10px;
      font-family: $condensed-bold-font;
      text-transform: uppercase;
      display: inline-block;
      text-align: center;
    }
  }
}

</style>
