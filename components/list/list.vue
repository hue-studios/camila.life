<template>
<vk-grid class="uk-flex uk-flex-center" id="list">
  <div class="uk-width-1-1">

  </div>
  <h3 class="uk-width-1-1">DAIRY-FREE</h3>
  <transition-group enter-active-class="uk-animation-slide-top uk-animation-fast" leave-active-class="uk-animation-slide-top uk-animation-reverse uk-animation-fast">
    <div class="uk-width-1-1" v-for="(item, index) in dairyList" :id="item.product_id" v-bind:key="index" v-if="item.category=='dairy-free' && !item.purchased">

      <vk-grid class="uk-flex uk-flex-center uk-flex-middle list-row" :id="'item-' + index">
        <div class="uk-width-auto uk-position-relative">

          <input class="uk-checkbox" type="checkbox" v-on:change="purchased(item.id, index)">
          <img v-if="item.image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + item.image" /></div>
        <div class="uk-width-1-4">
          <h4>{{item.name}}</h4>
          <h5 v-if="item.brand"><span class="pink">BRAND: </span>{{item.brand}}</h5>
          <h5 v-if="item.category"><span class="pink">CATEGORY: </span>{{item.category}}</h5></div>
        <vk-icon @click="removeFromList(item.id, item.product_id)" icon="close" ratio="2"></vk-icon>
        <nuxt-link :to="'/plant-based-vegan-products/' + item.url">
          <vk-icon icon="chevron-right" ratio="2"></vk-icon>
        </nuxt-link>
      </vk-grid>

    </div>
  </transition-group>
  <h3 class="uk-width-1-1">MEAT-FREE</h3>
  <transition-group enter-active-class="uk-animation-slide-top uk-animation-fast" leave-active-class="uk-animation-slide-top uk-animation-reverse uk-animation-fast">
    <div class="uk-width-1-1" v-for="(item, index) in meatList" :id="item.product_id" v-bind:key="index">

      <vk-grid class="uk-flex uk-flex-center uk-flex-middle list-row">
        <div class="uk-width-auto">
          <input class="uk-checkbox" type="checkbox" v-on:change="purchased(item.id, index)">
          <img v-if="item.image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + item.image" /></div>
        <div class="uk-width-1-4">
          <h5 v-if="item.brand"><span class="pink">BRAND: </span>{{item.brand}}</h5>
          <h5 v-if="item.category"><span class="pink">CATEGORY: </span>{{item.category}}</h5></div>
        <vk-icon @click="removeFromList(item.id, item.product_id)" icon="close" ratio="2"></vk-icon>
        <nuxt-link :to="'/plant-based-vegan-products/' + item.url">
          <vk-icon icon="chevron-right" ratio="2"></vk-icon>
        </nuxt-link>
      </vk-grid>

    </div>
  </transition-group>
  <h3 class="uk-width-1-1">OILS / SAUCES</h3>
  <transition-group enter-active-class="uk-animation-slide-top uk-animation-fast" leave-active-class="uk-animation-slide-top uk-animation-reverse uk-animation-fast">
    <div class="uk-width-1-1" v-for="(item, index) in sauceList" :id="item.product_id" v-bind:key="index">

      <vk-grid class="uk-flex uk-flex-center uk-flex-middle list-row">
        <div class="uk-width-auto">
          <input class="uk-checkbox" type="checkbox" v-on:change="purchased(item.id, index)">
          <img v-if="item.image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + item.image" /></div>
        <div class="uk-width-1-4">
          <h5 v-if="item.brand"><span class="pink">BRAND: </span>{{item.brand}}</h5>
          <h5 v-if="item.category"><span class="pink">CATEGORY: </span>{{item.category}}</h5></div>
        <vk-icon @click="removeFromList(item.id, item.product_id)" icon="close" ratio="2"></vk-icon>
        <nuxt-link :to="'/plant-based-vegan-products/' + item.url">
          <vk-icon icon="chevron-right" ratio="2"></vk-icon>
        </nuxt-link>
      </vk-grid>

    </div>
  </transition-group>
    <h3 class="uk-width-1-1">HERBS / SPICES</h3>
  <transition-group enter-active-class="uk-animation-slide-top uk-animation-fast" leave-active-class="uk-animation-slide-top uk-animation-reverse uk-animation-fast">
    <div class="uk-width-1-1" v-for="(item, index) in spiceList" :id="item.product_id" v-bind:key="index">

      <vk-grid class="uk-flex uk-flex-center uk-flex-middle list-row">
        <div class="uk-width-auto">
          <input class="uk-checkbox" type="checkbox" v-on:change="purchased(item.id, index)">
          <img v-if="item.image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + item.image" /></div>
        <div class="uk-width-1-4">
          <h5 v-if="item.brand"><span class="pink">BRAND: </span>{{item.brand}}</h5>
          <h5 v-if="item.category"><span class="pink">CATEGORY: </span>{{item.category}}</h5></div>
        <vk-icon @click="removeFromList(item.id, item.product_id)" icon="close" ratio="2"></vk-icon>
        <nuxt-link :to="'/plant-based-vegan-products/' + item.url">
          <vk-icon icon="chevron-right" ratio="2"></vk-icon>
        </nuxt-link>
      </vk-grid>

    </div>
  </transition-group>
  <h3 class="uk-width-1-1">GRAINS</h3>
<transition-group enter-active-class="uk-animation-slide-top uk-animation-fast" leave-active-class="uk-animation-slide-top uk-animation-reverse uk-animation-fast">
  <div class="uk-width-1-1" v-for="(item, index) in grainList" :id="item.product_id" v-bind:key="index">

    <vk-grid class="uk-flex uk-flex-center uk-flex-middle list-row">
      <div class="uk-width-auto">
        <input class="uk-checkbox" type="checkbox" v-on:change="purchased(item.id, index)">
        <img v-if="item.image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + item.image" /></div>
      <div class="uk-width-1-4">
        <h5 v-if="item.brand"><span class="pink">BRAND: </span>{{item.brand}}</h5>
        <h5 v-if="item.category"><span class="pink">CATEGORY: </span>{{item.category}}</h5></div>
      <vk-icon @click="removeFromList(item.id, item.product_id)" icon="close" ratio="2"></vk-icon>
      <nuxt-link :to="'/plant-based-vegan-products/' + item.url">
        <vk-icon icon="chevron-right" ratio="2"></vk-icon>
      </nuxt-link>
    </vk-grid>

  </div>
</transition-group>
</vk-grid>
</template>

<script>
import axios from 'axios'
// import ingredientListItem from '~/components/list/ingredientListItem'

export default {
  data() {
    return {
      search: '',
      items: this.$store.state.list
    }
  },
  components: {},
  created: function () {},
  computed: {
    list () {
      return this.items
    },
    dairyList() {
      return this.items.filter(function (item) {
          return item.category === 'dairy-free';
      })
    },
    meatList() {
      return this.items.filter(function (item) {
          return item.category === 'meat-free';
      })
    },
    sauceList() {
      return this.items.filter(function (item) {
          return item.category === 'oils / sauces';
      })
    },
    spiceList() {
      return this.items.filter(function (item) {
          return item.category === 'hearbs / spices';
      })
    },
    grainList() {
      return this.items.filter(function (item) {
          return item.category === 'grains';
      })
    }
  },
  methods: {
    removeFromList(product, product_id) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&id=' + product + '&product_id=' + product_id + '&action=delete').then(res => {
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

    updateListTotal() {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[type][eq]=ingredient').then(res => {
        console.log("PETER" + res.data.data)
        this.$store.commit('SET_LISTITEMS', res.data.data)
        this.items = res.data.data
      }).catch(function (error) {
        console.log(error)
      })
      console.log("LIST" + this.$store.state.list)
    },
    purchased(id, index) {
      var element = document.getElementById('item-' + index)
      element.classList.toggle('purchased')
      // axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?purchased=1&id=' + id + '&action=update').then(res => {
      //   console.log(res)
      //   if (res.status === 200) {
      //     this.status = false
      //   }
      //   this.updateListTotal()
      // }).catch(function (error) {
      //   console.log(error)
      // })
    },
    // purchase(id, index) {
    //   console.log("HELP ME HERE.")
    //   // axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?purchased=null&id=' + id + '&action=update').then(res => {
    //   //   console.log(res)
    //   //   if (res.status === 200) {
    //   //     this.status = false
    //   //   }
    //   //   this.updateListTotal()
    //   // }).catch(function (error) {
    //   //   console.log(error)
    //   // })
    // },
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
