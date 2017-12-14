<template>
<div class="ingredient-buttons">
   <transition enter-active-class="animated fadeInUpBig"
    leave-active-class="animated fadeOutUpBig">
    <a v-if="!status" class="add-btn" @click.prevent="addToList(id)">+</a>

    <a v-else class="remove-btn" @click.prevent="removeFromList(id)">-</a>
  </transition>
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
    addToList (product) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$store.state.user.email + '&product_id=' + product + '&action=add&status=1').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = true
        }
        this.updateListTotal()
        this.showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + this.product.name + `</span> TO SHOPPING LIST</span>`, image: 'https://huestudios.com' + this.product.images.data[0].url})
      }).catch(function (error) {
        console.log(error)
      })
    },
    removeFromList (product) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$store.state.user.email + '&product_id=' + product + '&action=delete').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = false
        }
        this.updateListTotal()
        this.showDeleteMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>removed <span class='condensed-bold'>` + this.product.name + `</span> FROM SHOPPING LIST</span>`, image: 'https://huestudios.com' + this.product.images.data[0].url})
      }).catch(function (error) {
        console.log(error)
      })
    },
    updateListTotal () {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$store.state.user.email).then(res => {
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
      position: 'bottomRight',
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
    },
    showDeleteMsg: {
      type: 'warn',
      title: 'removed from list',
      position: 'bottomRight',
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
   position: absolute;
   left: -20px;
   top: -20px;
   width: 40px;
   z-index: 5;
    @media (min-width: $medium) {
       left: -25px;
       top: -25px;
       width: 50px;

     }
  a {
    display: block;
    border: thin solid $green;
    border-radius: 50%;
    color: $green;
    padding: 0;
    font-size: 38px;
    text-align: center;
    vertical-align: middle;
    position: relative;
    width: 40px;
    height: 40px;
    line-height: 37px;
    position: relative;
    z-index: 2;
    transition: all .5s ease-out;

  @media (min-width: $medium) {
    width: 50px;
    height: 50px;
    line-height: 47px;

  }
   @media (min-width: $large) {

   }
   }
  .add-btn {
    border: thin solid $green;
    color: $black;
    background: $green;
  }
  .remove-btn {
    border: thin solid $black;
    color: $green;
    background: $black;
    line-height: 26px;
    font-size: 60px;
    @media (min-width: $medium) {
      line-height: 36px;
      font-size: 60px;
    }
  }



}
</style>
