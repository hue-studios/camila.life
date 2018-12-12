<template>
<div id="list" class="">
  <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-grid uk-child-width-1-1 login-callout" v-if="!$auth.$state.loggedIn" v-vk-height-viewport="{ minHeight: 600 }">
    <div class="uk-width-auto">
      <h2 class="white uk-text-center">CREATE YOUR OWN GROCERY LIST</h2>
      <ul class="checkmark-list script-font">
        <li>create personalized grocery list</li>
        <li>save your favorite vegan products</li>
        <li>save recipes to use in your kitchen</li>
        <li>ask Camila questions</li>
      </ul>
      <button class="uk-button uk-button-default condensed uk-light uk-text-center" @click.prevent="$auth.loginWith('auth0')">LOGIN</button>
    </div>
  </vk-grid>
  <vk-grid class="uk-flex uk-flex-center uk-grid uk-child-width-1-1" v-else v-vk-height-viewport="{ minHeight: 600 }">

    <div class="uk-width-1-1">
      <h1 class="uk-text-center script-font">{{$auth.user.given_name}}'S GROCERY LIST</h1>
      <ul uk-accordion class="ingredient-list">
        <li class="uk-open">

          <a class="uk-accordion-title uk-text-uppercase uk-text-center uk-padding-small">Dairy-Free</a>
          <div class="uk-accordion-content">
            <transition-group name="card" mode="out-in">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" v-if="item.category == 'dairy-free'" :item="item" :index="index" v-bind:key="'list-' + item.product_id" group="meat-free"></ingredientListItem>
          </transition-group>


          </div>
        </li>

        <li>
          <a class="uk-accordion-title uk-text-uppercase uk-text-center uk-padding-small">Meat-Free</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" v-if="item.category == 'meat-free'" :item="item" :index="index" v-bind:key="'list-' + item.product_id" group="meat-free"></ingredientListItem>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title uk-text-uppercase uk-text-center uk-padding-small">oils / sauces</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" :item="item" :index="index" v-if="item.category == 'oils / sauces'" v-bind:key="'list-' + item.product_id" group="oils / sauces"></ingredientListItem>
          </div>
        </li>
      </ul>
    </div>

  </vk-grid>
</div>
</template>

<script>
import axios from 'axios'
import ingredientListItem from '~/components/list/ingredientListItem'
export default {
  layout: 'authorized',
    middleware: 'auth',
  transition(to, from) {
    if (!from) {

    } else if (from && from.name == 'plant-based-vegan-products-slug') {
      return 'slide-right'
      console.log("to: " + to.name + " :: from: " + from.name)
    }
  },
  data() {
    return {
      list: [],
      purchased: ''
    };
  },
  async asyncData({
    app
  }) {
    let [listReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + app.$auth.user.email + '&filters[type][eq]=ingredient')
    ])
    return {
      list: listReq.data.data
    }

  },
  components: {
    ingredientListItem
  },
  methods: {
    removeFromList(product) {
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

    updateListTotal() {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[type][eq]=ingredient').then(res => {
        console.log("PETER" + res.data.data)
        this.$store.commit('SET_LISTITEMS', res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
      console.log("LIST " + this.$store.state.list)
    },
    purchasedItem() {
      var element1 = document.getElementById('title-' + index)
      var element2 = document.getElementById('content-' + index)
      var element3 = document.getElementById('step-' + index)
      var element4 = document.getElementById('checkbox-' + index)

      element1.classList.toggle('strike-through')
      element2.classList.toggle('strike-through')
      element3.classList.toggle('change-to-grey')
    }
  }

};
</script>

<style scoped>

</style>
