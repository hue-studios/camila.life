<template>
    <transition enter-active-class="uk-animation-slide-top uk-animation-fast" leave-active-class="uk-animation-slide-top uk-animation-reverse uk-animation-fast">
<div :id="item.product_id" v-if="status">

    <vk-grid class="uk-flex uk-flex-center uk-flex-middle list-row">
  <div class="uk-width-auto">
    <input class="uk-checkbox" type="checkbox" v-model="purchased">
    <img v-if="item.image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + item.image" /></div>
  <div class="uk-width-1-4"><h4>{{item.name}}</h4>
    <h5 v-if="item.brand"><span>BRAND: </span>{{item.brand}}</h5></div>
  <div class="uk-width-1-4"><h4>{{item.category}}</h4></div>

  <vk-icon @click="removeFromList(item.product_id)" icon="close" ratio="2"></vk-icon>
  <nuxt-link :to="'/plant-based-vegan-products/' + item.url"><vk-icon icon="chevron-right" ratio="2"></vk-icon></nuxt-link>
</vk-grid>

</div>
</transition>
</template>

<script>
import axios from 'axios'

export default {
  props: ['item', 'group', 'index'],
  data() {
    return {
      status: true,
      purchased: false
    }
  },
  components: {},
  created: function () {

  },
  computed: {},
  methods: {
    removeFromList (product) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&product_id=' + product + '&action=delete').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = false
        }
        this.updateListTotal()
        // this.showDeleteMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>removed <span class='condensed-bold'>` + this.product.name + `</span> FROM SHOPPING LIST</span>`, image: 'https://huestudios.com' + this.product.images.data[0].url})
      }).catch(function (error) {
        console.log(error)
      })
    },

    updateListTotal () {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[type][eq]=ingredient').then(res => {
        console.log("PETER" + res.data.data)
        this.$store.commit('SET_LISTITEMS', res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
      console.log("LIST" + this.$store.state.list)
    },
    purchasedItem () {
      var element1 = document.getElementById('title-' + index)
      var element2 = document.getElementById('content-' + index)
      var element3 = document.getElementById('step-' + index)
      var element4 = document.getElementById('checkbox-' + index)

      element1.classList.toggle('strike-through')
      element2.classList.toggle('strike-through')
      element3.classList.toggle('change-to-grey')
    },
    truncate(str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 90
        }
        if (ending == null) {
          ending = '...'
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending
        } else {
          return str
        }
      } else {
        return str
      }
    }
  }
}
</script>
