
<template>
  <div class="grid-x">
   <h1 class="small-11 cell">account</h1>
   <div class="content" v-if="loggedUser">
    <img :src="loggedUser.picture" style="width: 50px; height: 50px;"/>
    <p>Hi {{ getFirstWord(loggedUser.name) }}!</p>
   <form>
  <div class="grid-x grid-padding-x">
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">Email</label>
    </div>
    <div class="small-9 cell">
      <input type="email" id="middle-label" placeholder="" :value="email">
    </div>
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">Name</label>
    </div>
    <div class="small-9 cell">
      <input type="text" id="middle-label" placeholder="" :value="name">
    </div>
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">birthday</label>
    </div>
    <div class="small-9 cell">
      <input type="email" id="middle-label" placeholder="" :value="birthday">
    </div>
    <div class="small-3 cell">
      <label for="middle-label" class="text-right middle">zip</label>
    </div>
    <div class="small-9 cell">
      <input type="text" id="middle-label" placeholder="" :value="zip">
    </div>
  </div>
</form>
<nuxt-link to="/auth/sign-off">Sign Off</nuxt-link>
<nuxt-link v-if="this.$store.state.user.email" :to="'/account/' + this.$store.state.user.email">SHOPPING LIST</nuxt-link>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      email: this.$store.state.user.email,
      name: this.$store.state.user.name,
      zip_code: this.$store.state.user.zipcode,
      birthday: this.$store.state.user.birthday
    }
  },
  middleware: 'authenticated',
  computed: mapGetters(['loggedUser']),
  scrollToTop: true,
  created () {
  },
  methods: {
    updateUser () {
      return axios.post('http://camila.life/scripts/user.php').then(res => {
        console.log(res)
      }).catch(function (error) {
        console.log(error)
      })
    },
    getFirstWord (string) {
      var first = string.split(' ')
      return first[0]
    },
    getLastWord (val) {
      var n = val.split(' ')
      return n[n.length - 1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
label {
  text-transform: uppercase;
  font-family: $condensed-bold-font;
}
input {
  border: none;
  border-bottom: thin solid $pink ;
  box-shadow: none;
}
input:focus {
  border: none;
  border-bottom: thin solid $blue;
  box-shadow: none;
}
</style>
