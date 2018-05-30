<template>
<div class="list-buttons">
   <transition enter-active-class="uk-animation-scale-up"
    leave-active-class="uk-animation-scale-down">

    <a v-if="status == 0" class="add-btn" @click.prevent="addToList(id, category, name, type, url)" uk-icon="icon: plus"></a>

    <a v-else-if="status == 1" class="remove-btn" @click.prevent="removeFromList(id)" uk-icon="icon: minus"></a>
    <!-- <div v-else uk-spinner></div> -->
  </transition>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id', 'category', 'name', 'type', 'url'],
  data: function () {
    return {
      status: 3
    }
  },
  async asyncData({ app }) {

  },
  mounted: function () {
    this.$axios.get('list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[product_id][eq]=' + this.id).then(response => {
      if (response.data.data.length >= 1) {
        this.status = 1
      } else {
        this.status = 0
      }
    }).catch(function (error) {
      console.log(error)
    })

  },
  methods: {
    addToList (product, category, name, type, url) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&product_id=' + product + '&category=' + category + '&name=' + name + '&type=' + type + '&url=' + url + '&purchased=0&action=add&status=1').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = 1
        }
        this.updateListTotal()
        // this.showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + this.product.name + `</span> TO SHOPPING LIST</span>`, image: 'https://huestudios.com' + this.product.images.data[0].url})
      }).catch(function (error) {
        console.log(error)
      })
    },
    removeFromList (product) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&product_id=' + product + '&action=delete').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = 0
        }
        this.updateListTotal()
        // this.showDeleteMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>removed <span class='condensed-bold'>` + this.product.name + `</span> FROM SHOPPING LIST</span>`, image: 'https://huestudios.com' + this.product.images.data[0].url})
      }).catch(function (error) {
        console.log(error)
      })
    },
    updateListTotal () {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email).then(res => {
        console.log("PETER" + res.data.data)
        this.$store.commit('SET_LISTITEMS', res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
      console.log("LIST" + this.$store.state.list)
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
