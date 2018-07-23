<template>
<div class="list-buttons">

   <transition enter-active-class="uk-animation-scale-up"
    leave-active-class="uk-animation-scale-down" v-if="this.$auth.$state.loggedIn">

    <a v-if="status == 0" class="add-btn" @click.prevent="addToList(id, category, name, brand, type, url, image)"><vk-icon icon="plus"></vk-icon></a>

    <a v-else-if="status == 1" class="remove-btn" @click.prevent="removeFromList(id)"><vk-icon icon="minus"></vk-icon></a>
    <!-- <div v-else uk-spinner></div> -->
  </transition>
  <a @click.prevent="showLoginModal()" v-else class="add-btn" v-vk-tooltip.right="{ title: 'ADD TO GROCERY LIST', animation: 'scale-up fade', }"><vk-icon icon="plus"></vk-icon></a>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id', 'category', 'name', 'brand', 'type', 'url', 'image'],
  data: function () {
    return {
      status: 3
    }
  },
  async asyncData({ app }) {

  },
  mounted: function () {
    if (this.$auth.$state.loggedIn) {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[product_id][eq]=' + this.id).then(response => {
      if (response.data.data.length >= 1) {
        this.status = 1
      } else {
        this.status = 0
      }
    }).catch(function (error) {
      console.log(error)
    })
  }

  },
  methods: {
    addToList (product, category, name, brand, type, url, image) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&product_id=' + product + '&category=' + category + '&name=' + name + '&brand=' + brand + '&type=' + type +  '&url=' + url + '&image=' + image + '&purchased=0&action=add&status=1').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = 1
        }
        this.updateListTotal()
        this.showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + this.name + `</span> TO GROCERY LIST</span>`, image: 'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + this.image})
      }).catch(function (error) {
        console.log(error)
      })
    },
    showLoginModal () {
      this.$store.commit('SET_LOGINMODAL', true)
    },
    removeFromList (product) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&product_id=' + product + '&action=delete').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = 0
        }
        this.updateListTotal()
        this.showDeleteMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>removed <span class='condensed-bold'>` + this.name + `</span> FROM GROCERY LIST</span>`, image: 'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + this.image})
      }).catch(function (error) {
        console.log(error)
      })
    },
    updateListTotal () {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[type][eq]=ingredient').then(res => {
        console.log("PETER" + res.data.data.length)
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
        var listTotalBadge = document.getElementById('grocery-list-count')
        listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('grocery-list-count')
        setTimeout(function () {
          listTotalBadge.classList.add('pulseEffect')
        }, 200)
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
        var listTotalBadge = document.getElementById('grocery-list-count')
        listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('grocery-list-count')
        setTimeout(function () {
          listTotalBadge.classList.add('pulseEffect')
        }, 200)
      }
    }
  }
}
</script>
