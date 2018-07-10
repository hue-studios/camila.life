
<template>
<vk-grid id="ingredient" class="uk-flex uk-flex-center uk-flex-middle">

  <div class="uk-width-1-1 uk-position-relative uk-flex uk-flex-center top-section">
    <nuxt-link to="/plant-based-vegan-products" class="details-page-back-link condensed uk-text-uppercase">
      <vk-icon icon="chevron-left"></vk-icon> BACK <span class="uk-visible@s">TO ALL PRODUCTS</span></nuxt-link>
    <nuxt-link to="/plant-based-vegan-products" class="details-page-next-link condensed uk-text-uppercase">NEXT <span class="pink uk-visible@s">{{ingredient.category}}</span><span class="uk-visible@s"> PRODUCT</span>
      <vk-icon icon="chevron-right"></vk-icon>
    </nuxt-link>

    <div class="image-box">
    <listButtons :id="ingredient.id" :category="ingredient.category" :name="ingredient.name" type="ingredient" :url="ingredient.url" :image="ingredient.images.data[0].name" v-if="$auth.$state.loggedIn" />
    <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/'+ ingredient.images.data[0].name" alt="">
    <a @click.prevent="show = true" id="image-modal-link"><vk-icon icon="expand" ></vk-icon></a>
    </div>

  </div>

  <div class="uk-width-1-1 uk-text-center heading">
    <h1 class="condensed uk-text-uppercase">{{ ingredient.name }}</h1>

    <h4 class="sub-title"><span>BRAND: </span>{{ingredient.brand}}</h4>
    <h4 class="sub-title"><span>CATEGORY: </span>{{ingredient.category}}</h4>
    <p class="script-font uk-padding uk-padding-remove-bottom uk-padding-remove-top">{{ingredient.sub_title}}</p>
  </div>



  <div class="uk-width-1-1 ingredient-details">
    <icon-labels :item="ingredient" />
    <div class="uk-padding uk-padding-remove-top caption" v-html="ingredient.description"></div>
  </div>

  <div class="uk-width-1-1 uk-text-center goes-with" v-if="goes_with.length > 0">
    <h4 class="script-font uk-text-lowercase ">GOES WITH:</h4>
    <h5 v-for="(item,index) in goes_with" v-bind:key="index" class="goes-with-tag">{{item}}</h5>

  </div>

<h4 class="uk-width-1-1 uk-text-center related-recipes-title" v-if="relatedRecipes.length > 0">RECIPES FEATURING <span class="pink">{{ingredient.name}}</span></h4>
  <div class="uk-position-relative uk-visible-toggle uk-width-1-1 related-recipes" uk-slider="center: true" v-if="relatedRecipes.length > 0">
    <ul class="uk-slider-items uk-grid">
      <ingredient-recipes v-for="(recipe, index) in relatedRecipes" :id="recipe.recipe_id" :index="index" v-bind:key="recipe.recipe_id" class="uk-width-5-6"></ingredient-recipes>
    </ul>
    <a class="uk-position-center-left uk-position-large uk-light" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-large uk-light" href="#" uk-slidenav-next uk-slider-item="next"></a>
    <ul class="uk-slider-nav uk-dotnav uk-flex uk-flex-center uk-dark"></ul>
  </div>

  <!-- <h4 class="small-12 cell text-center body-font text-lowercase ingredient-page-sub-title" v-if="relatedIngredients.length > 0"><span>related</span> <span class="green">{{ingredient.category}}</span> ingredients</h4>
   <div class="small-12 cell related-ingredients-list" v-if="relatedIngredients.length > 0">

     <related-ingredients v-for="(relatedIngredient, index) in relatedIngredients" :ingredient="relatedIngredient" :index="index" v-bind:key="relatedIngredient.id"></related-ingredients>
   </div> -->
   <vk-modal center size="container" :show.sync="show" class="uk-padding-remove uk-margin-remove-top full-image">
     <vk-modal-close @click="show = false"></vk-modal-close>
     <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/1600/1600/crop/'+ ingredient.images.data[0].name" alt="">
   </vk-modal>
</vk-grid>
</template>

<script>
import axios from 'axios'
import iconLabels from '~/components/iconLabels'
import listButtons from '~/components/listButtons'
import ingredientRecipes from '~/components/ingredientRecipes'
import relatedIngredients from '~/components/ingredient'

export default {
  auth: false,
  scrollToTop: true,
  transition(to, from) {
    if (from && (from.name == 'index' || from.name == 'list' || from.name == 'plant-based-vegan-products')) {
      return 'slide-left'
    }
  },
  async asyncData({
    params
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        ingredient: res.data.data[0],
        goes_with: [],
        relatedIngredients: [],
        relatedRecipes: [],
        show: false
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {
    iconLabels,
    listButtons,
    ingredientRecipes,
    relatedIngredients
  },
  fetch({
    store
  }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {

        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
    }
  },
  created() {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipe_ingredients/rows/?filters[ingredient][eq]=' + this.ingredient.id).then(response => {

        console.log("TESTER : " + this.ingredient.name)
      this.relatedRecipes = response.data.data
    }).catch(e => {
      this.errors.push(e)
    })
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[category][contains]=' + this.ingredient.category + '&filters[id][neq]=' + this.ingredient.id + '&limit=5&order[sort]').then(response => {

      this.relatedIngredients = response.data.data
    }).catch(e => {
      this.errors.push(e)
    })
    if (this.ingredient.goes_with) {
      this.goes_with = this.makeArray(this.ingredient.goes_with)
    }

  },
  head() {
    return {
      title: this.ingredient.name + ' on camila.life - Vegan Product Review'
    }
  },
  methods: {
    makeArray(str) {
      var newArray = str.split(',')
      return newArray
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
