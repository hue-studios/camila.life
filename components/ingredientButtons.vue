<template>
<div class="ingredient-buttons">
  <transition mode="out-in">
    <button v-if="!status && isAuthenticated" @click.prevent="addToList(id)">ADD TO LIST</button>
    
    <button v-if="status && isAuthenticated" @click.prevent="removeFromList(id)">DELETE FROM LIST</button>
  </transition>  
    <button v-if="!isAuthenticated">SIGN IN TO CREATE SHOPPING LIST</button>
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
      axios.get('http://camila.life/admin/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$store.state.user.email + '&filters[product_id][eq]=' + this.id).then(response => {
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
  a, button {
    border: thin solid $blue;
    padding: 5px 10px;
    display: inline-block;
    margin: 5px;
  }
}
</style>