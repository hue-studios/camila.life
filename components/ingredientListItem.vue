<template>
<div :id="id">
  <transition enter-active-class="uk-animation-slide-top" leave-active-class="uk-animation-slide-top uk-animation-reverse">
    <vk-grid v-if="status" class="list-row">
  <div class="uk-text-center uk-width-1-5 uk-width-1-4@s"><input class="uk-checkbox" type="checkbox" v-model="completed">
  </div>

  <div class="uk-width-1-4"><h4>{{item.name}}</h4>
    <h5 v-if="item.brand"><span>BRAND: </span>{{item.brand}}</h5></div>
  <div class="uk-width-1-4"><h4>{{item.category}}</h4></div>
  <!-- <div class="uk-width-1-4"><img v-if="image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + image" /></div> -->
  <vk-icon @click="removeFromList(id)" icon="close" ratio="2"></vk-icon>
  <nuxt-link :to="'/plant-based-vegan-products/' + item.url"><vk-icon icon="chevron-right" ratio="2"></vk-icon></nuxt-link>
</vk-grid>
</transition>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id', 'group', 'index', 'completed'],
  data() {
    return {
      item: {},
      status: true
    }
  },
  components: {},
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[id][eq]=' + this.id).then(response => {
      this.item = response.data.data[0]
    }).catch(e => {
      this.errors.push(e)
    })
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
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email).then(res => {
        console.log("PETER" + res.data.data)
        this.$store.commit('SET_LISTITEMS', res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
      console.log("LIST" + this.$store.state.list)
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
