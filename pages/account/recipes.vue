<template>
<div id="account-recipes" class="">

  <vk-grid class="uk-flex uk-flex-center uk-grid uk-child-width-1-1" v-vk-height-viewport="{ minHeight: 600 }">

    <div class="uk-width-1-1">
      <h1 class="uk-text-center script-font">{{$auth.user.given_name}}'S SAVED RECIPES</h1>

    </div>
    <div class="uk-width-1-1" v-for="(recipe, index) in $store.state.recipes" v-bind:key="index">
      <div v-if="recipe.image" class="uk-background-image" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + recipe.image + ')'" style="width: 100px; height: 100px;"></div>
      <h3>{{recipe.name}}</h3>
      <h4 v-if="recipe.category != 'null'">{{recipe.category}}</h4>
      <h5><span v-if="recipe.steps" class=""><span class="pink">{{recipe.steps}}</span> STEPS </span> +
      <span v-if="recipe.ingredients" class=""><span class="pink"> {{recipe.ingredients}}</span> INGREDIENTS</span></h5>
      <nuxt-link :to="'/vegan-plant-based-recipes/'+ recipe.url"><vk-icon icon="chevron-right"></vk-icon></nuxt-link>
    </div>
  </vk-grid>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      storeRecipes: []

    };
  },
  created () {
    console.log(this.$store.state.user)
    this.storeRecipes
  },
  async asyncData({
    app
  }) {
    let [recipesReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + app.$auth.user.email + '&filters[type][eq]=recipe')
    ])
    return {
      recipes: recipesReq.data.data
    }

  },
  components: {

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
