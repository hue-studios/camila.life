<template>
<div class="ingredient-buttons">
   <nuxt-link class="details-btn" :to="'/plant-based-vegan-products/' + product.url">DETAILS</nuxt-link>
   
    <a v-if="!status && isAuthenticated" class="add-btn" @click.prevent="addToList(id)">ADD TO LIST</a>
    
    <a v-if="status && isAuthenticated" class="remove-btn" @click.prevent="removeFromList(id)">DELETE FROM LIST</a>
    <a v-if="!isAuthenticated" class="login-btn" @click.prevent="showLoginScreen()">SIGN IN TO CREATE SHOPPING LIST</a>
    <p v-if="!isAuthenticated" class="list-help-link"><i class="fa fa-question" aria-hidden="true"></i> WHAT IS THE SHOPPING LIST?</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  props: ['id', 'product'],
  data: function () {
    return {
      status: null
    }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  created: function () {
    if (this.$store.state.user) {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$store.state.user.email + '&filters[product_id][eq]=' + this.id).then(response => {
        if (response.data.data.length >= 1) {
          this.status = true
        } else {
          this.status = false
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  methods: {
    showLoginScreen () {
      var loginForm = document.getElementById('login-screen')
      loginForm.classList.remove('close')
    },
    addToList (product) {
      axios.post('http://camila.life/scripts/list.php?email=' + this.$store.state.user.email + '&product_id=' + product + '&action=add&status=1').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = true
        }
        this.updateListTotal()
        this.showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + this.product.name + `</span> TO SHOPPING LIST</span>`})
      }).catch(function (error) {
        console.log(error)
      })
    },
    removeFromList (product) {
      axios.post('http://camila.life/scripts/list.php?email=' + this.$store.state.user.email + '&product_id=' + product + '&action=delete').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = false
        }
        this.updateListTotal()
      }).catch(function (error) {
        console.log(error)
      })
    },
    updateListTotal () {
      axios.get('http://camila.life/admin/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$store.state.user.email).then(res => {
        this.$store.commit('SET_LISTITEMS', res.data.meta.total)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'center',
      color: 'white',
      message: '',
      timeout: 2000,
      cb: function () {
      },
      onClosing: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        setTimeout(function () {
          listTotalBadge.classList.add('pulseEffect')
        }, 1000)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
.activeClass {
    display: none;
}
 .ingredient-buttons {
   padding-top: 15px;
   display: flex;
   justify-content: space-around;
   width: 100%;
   position:realtive;
   @media (min-width: $medium) {
     justify-content: space-between;     
  }
  a {
    border: thin solid $green;
    border-radius: 2px;
    color: $green;
    font-family: $condensed-bold-font;
    padding: 10px 10px 8px;
    font-size: 20px;
    text-align: center;
    line-height: 1em;
  }
  .details-btn {
    align-self: flex-start
  }
  .add-btn {
    border: thin solid $blue;
    color: $blue;
  }
  .remove-btn {
    border: thin solid $black;
    color: $black;
  }
  .login-btn {
  
  }
  .list-help-link {
    text-transform: uppercase;
    font-family: $condensed-font;
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    right: 35px;
    bottom: -40px;
    text-decoration: underline;
    i {
      border-radius: 50%;
      bordeR: thin solid $black;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      text-align:center;
    }
  }
  
}
</style>