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
            <vk-grid class="list-row">
              <div v-for="item in dairyList" v-bind:key="'list-' + item.product_id">
                <div class="uk-text-center uk-width-1-5 uk-width-1-4@s"><input class="uk-checkbox" type="checkbox" v-model="completed">
                </div>
                <div class="uk-width-1-4">
                  <h4>{{item.name}}</h4>
                  <h5 v-if="item.brand"><span>BRAND: </span>{{item.brand}}</h5></div>
                <div class="uk-width-1-4">
                  <h4>{{item.category}}</h4></div>
                    <vk-icon @click="removeFromList(item.product_id)" icon="close" ratio="2"></vk-icon>
                <nuxt-link :to="'/plant-based-vegan-products/' + item.url">
                  <vk-icon icon="chevron-right" ratio="2"></vk-icon>
                </nuxt-link>
              </div>
            </vk-grid>
          </div>

        </li>

      </ul>
    </div>
  </vk-grid>
</div>
</template>

<script>
import axios from 'axios'
export default {
  transition(to, from) {
    if (!from) {

    } else if (from && from.name == 'plant-based-vegan-products-slug') {
      return 'slide-right'
      console.log("to: " + to.name + " :: from: " + from.name)
    }
  },
  data() {
    return {
      completed: 0
    };
  },
  async asyncData({
    app
  }) {
    let [dairyListReq, meatListReq] = await Promise.all([
      app.$axios.get('list/rows/?filters[email][eq]=' + app.$auth.user.email + '&filters[category][eq]=dairy-free'),
      app.$axios.get('list/rows/?filters[email][eq]=' + app.$auth.user.email + '&filters[category][eq]=meat-free')
    ])
    return {
      dairyList: dairyListReq.data.data,
      meatList: meatListReq.data.data
    }
  },
  methods: {
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
    },
  },
  computed: {
    filteredList() {
      var vm = this;
      if (category === "" && search === "") {
        return vm.ingredients;
      } else {
        return vm.ingredients.filter(function (ingredient) {
          return (category === '' || ingredient.category === category) && (search === '' || ingredient.name.toLowerCase().includes(vm.search.toLowerCase()));
        });
      }
    },
  }

};
</script>

<style scoped>

</style>
