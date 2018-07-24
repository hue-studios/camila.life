<template>
<div id="home">
  <div id="top-section">
    <vk-grid class="top-section uk-flex uk-flex-center uk-flex-middle uk-text-center uk-background-cover uk-background-blend-multiply uk-position-relative" v-if="!$auth.$state.loggedIn" id="site-intro" uk-parallax="media: @m; bgy:150px; target: #site-intro">
      <div id="flare" uk-parallax="media: @m; rotate: -50; scale: 2.3 ;top: 120px; target: #site-intro"></div>
      <div class="uk-width-1-1" id="site-intro-caption">
        <h2>introducing camila.life!</h2>
        <p>This could be an intro if a person is not signed in.</p>
      </div>
    </vk-grid>
    <vk-grid class="uk-flex uk-flex-center uk-grid-match" id="home-intro">

      <div class="uk-width-1-1@s uk-width-1-2@m uk-background-cover uk-background-blend-multiply uk-panel uk-flex uk-flex-right uk-flex-bottom" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/' + article.image.data.name + ')'"
        id="featured-article">
        <div id="featured-caption">
          <h3 class="condensed-bold white">{{article.title}}</h3>
          <p class="white">{{article.description}}</p>
          <nuxt-link :to="'plant-based-living/'+article.url" class="uk-button uk-button-default">READ ARTICLE</nuxt-link>
        </div>
      </div>
      <div class="uk-width-1-1@s uk-width-1-2@m">
        <vk-grid id="featured-items" class="uk-flex uk-flex-center uk-flex-bottom uk-grid-small">
          <div class="uk-width-1-1 uk-position-relative uk-text-center">
            <h1>WELCOME <span class="condensed-bold" v-if="$auth.$state.loggedIn"> {{$auth.user.given_name}}</span>!</h1>
            <div v-if="$auth.$state.loggedIn">
              <p class="script-font">You have <span v-if="$store.state.list.length > 0"><span class="pink">{{this.$store.state.list.length}} ingredient<span v-if="$store.state.list.length > 1">s</span></span> saved</span> <span v-else>no ingredients</span> in your grocery list
                <span
                  v-if="$store.state.recipes.length > 0"> and <span class="pink">{{this.$store.state.recipes.length}} recipe<span v-if="$store.state.recipes.length > 1">s</span></span> saved in your account</span>.</p>
            </div>
            <div v-else>
              <p>This is why you should create an account.</p>
              <button class="uk-button uk-button-default uk-text-center" @click.prevent="showLoginModal()">CREATE ACCOUNT</button>

            </div>
          </div>

          <div class="uk-width-1-3 uk-position-relative featured-item-col" v-for="item in items" :key="item.id">
            <div class="uk-background-cover featured-item" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/'+ item.image.data.name+ ')'">
            </div>
            <nuxt-link v-if="item.url" :to="item.url" class="uk-position-absolute uk-flex uk-flex-center uk-flex-middle uk-text-center featured-item-link">

              <h4>{{item.title}}</h4>
              <h5>LEARN MORE <vk-icon icon="chevron-right"></vk-icon></h5>

            </nuxt-link>
          </div>
        </vk-grid>
      </div>
    </vk-grid>
  </div>
  <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-background-cover uk-background-blend-multiply uk-background-fixed" id="featured-quote">

    <p class="uk-width-1-2" uk-parallax="color: #FB00DA,#00bfff,#FB00DA; viewport: 0.8">A nice quote here!</p>
  </vk-grid>
  <vk-grid class="uk-grid-large uk-text-center uk-flex uk-flex-center uk-flex-middle uk-position-relative" id="featured-ingredients" v-vk-height-match="{ target: '.uk-card' }">

    <h1 class="uk-position-absolute uk-text-left bg-title">VEGAN <br>INGREDIENTS</h1>
    <div class="uk-width-5-6 uk-text-center">
      <p id="intro" class="script-font uk-margin-remove-top">Click the
        <vk-icon class="uk-border-circle green-bg" icon="plus" ratio="0.8"></vk-icon> to add the ingredient to your grocery list.</p>
    </div>
    <div uk-slider="finite: false; center:true">
      <div class="uk-position-relative">
        <ul class="uk-slider-items uk-child-width-auto uk-grid uk-grid-large" uk-height-match="target: > li > .uk-card">

          <li v-for="(ingredient, index) in ingredients" :key="index" class="featured-ingredient-slide">
            <div class="uk-card uk-card-default featured-ingredient">
              <!-- <div class="uk-flex uk-flex-center uk-flex-middle ingredient-card-info-bar">
                <div>

              </div>
              <div>
                <vk-icon icon="heart"></vk-icon>
              </div>
              </div> -->
              <listButtons v-if="ingredient.images.data.length > 0" :id="ingredient.id" :category="ingredient.category" :name="ingredient.name" type="ingredient" :brand="ingredient.brand" :url="ingredient.url" :image="ingredient.images.data[0].name" />
              <listButtons v-else :id="ingredient.id" :category="ingredient.category" :name="ingredient.name" type="ingredient" :brand="ingredient.brand" :url="ingredient.url" image="camila-sun.jpg" />
              <div class="uk-card-media-top">
                <img v-if="ingredient.images.data.length > 0" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + ingredient.images.data[0].name" :alt="ingredient.name" class="">
                <img v-else src="https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/camila-sun.jpg" :alt="ingredient.name" class="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title uk-margin-remove-bottom">{{ingredient.name}}</h3>
                <p class="time-published" v-if="ingredient.date_modified">{{formatDateFromNow(ingredient.date_modified)}}</p>
                <h5 v-if="ingredient.brand" class="brand"><span class="pink">BRAND:  </span> {{ingredient.brand}}</h5>
                <h5><span class="pink">CATEGORY: </span>  {{ingredient.category}}</h5>
                <iconLabels :item="ingredient" />
                <nuxt-link :to="'/plant-based-vegan-products/'+ingredient.url" class="uk-button uk-button-default">DETAILS</nuxt-link>
              </div>
            </div>
          </li>
        </ul>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large uk-visible@m" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large uk-visible@m" href="#" uk-slidenav-next uk-slider-item="next"></a>
      </div>
    </div>
    <div class="uk-width-1-1">
      <nuxt-link to="/plant-based-vegan-products" class="uk-flex uk-flex-center uk-flex-middle goto-page-link">
        <p class="uk-text-left" uk-parallax="color: #00bfff,#FB00DA; x: 40px">see all <br> vegan<br> ingredients </p>
        <vk-icon icon="chevron-right" uk-parallax="color: #FB00DA, #00bfff; x: 30px"></vk-icon>
      </nuxt-link>
    </div>
  </vk-grid>
  <vk-grid id="featured-recipes" class="uk-position-relative">
  <h1 class="bg-title white uk-width-1-1 uk-text-center" uk-parallax="media: @m; y: -200px; target: #featured-recipe">Featured Recipe</h1>
  <div class="uk-width-1-1">
  <div class="uk-position-relative uk-light" uk-slider="center: true">

    <vk-grid class="uk-slider-items uk-child-width-5-6 uk-grid-large">

      <div v-for="(recipe, index) in recipes" :key="index" class="featured-recipe-slide">
        <div class="uk-background-cover uk-background-blend-multiply uk-panel uk-flex uk-flex-center uk-flex-middle uk-position-relative featured-recipe" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/' + recipe.images.data[0].name + ')'"
        uk-parallax="media: @m; bgy: 800; target: #featured-recipe">
        <list-recipe-buttons uk-slider-parallax="y: 300,-300" v-if="recipe.images.data.length > 0" :id="recipe.id" :category="recipe.category" :name="recipe.name" type="recipe" :url="recipe.url" :image="recipe.images.data[0].name" :steps="recipe.recipe_directions.meta.total" :ingredients="recipe.recipe_ingredients.meta.total"
        />
        <list-recipe-buttons uk-slider-parallax="y: 300,-300" v-else :id="recipe.id" :category="recipe.category" :name="recipe.name" type="recipe" :url="recipe.url" image="" />


        <div class="uk-width-1-2@s uk-width-1-3@xl  uk-text-center white" uk-slider-parallax="x: 400,-400">
          <h2 class="white" >{{recipe.name}}</h2>
          <h4 class="white"><span class="label">CUISINE</span> {{recipe.cuisine}}</h4>
          <div class="white uk-text-justify uk-padding-large uk-padding-remove-top uk-padding-remove-bottom uk-visible@m" v-html="truncate(recipe.caption, 200)"></div>
          <p><span v-if="recipe.recipe_directions.meta.total > 0" class="condensed-bold timing">{{recipe.recipe_directions.meta.total}} STEPS</span> +

            <span v-if="recipe.recipe_ingredients.meta.total > 0" class="condensed-bold timing">{{recipe.recipe_ingredients.meta.total}} INGREDIENTS</span></p>
          <nuxt-link class="uk-button uk-button-default condensed-bold white" :to="'/vegan-plant-based-recipes/' + recipe.url">DETAILS</nuxt-link>
        </div>

      </div>
</div>
      </vk-grid>
      <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large" href="#" uk-slidenav-next uk-slider-item="next"></a>
    </div>
  </div>
</vk-grid>
  <vk-grid gutter="large" class="uk-grid-large uk-text-center uk-flex uk-flex-center uk-flex-middle uk-position-relative" id="featured-products">
    <h1 class="bg-title white uk-position-absolute uk-text-lowercase" uk-parallax="opacity: .1, .5; y: 60px; target: #featured-products">boutique</h1>
    <div v-for="(product, index) in products" :key="index">
      <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
          <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + product.images.data[0].name" :alt="product.name" class="">
        </div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{product.name}}<br> <span class="pink condensed-bold">${{product.price}}</span></h3>
          <nuxt-link :to="product.url" class="uk-button uk-button-default">SHOP THIS</nuxt-link>
        </div>
      </div>
    </div>
    <div class="uk-width-1-1">
      <nuxt-link to="/plant-based-vegan-products" class="uk-flex uk-flex-center uk-flex-middle goto-page-link">
        <p class="uk-text-left" uk-parallax="color: #00bfff,#fff, #FB00DA; x: 40px">go to<br> camila<br> boutique </p>
        <vk-icon icon="chevron-right" uk-parallax="color: #FB00DA, #fff, #00bfff; x: 30px"></vk-icon>
      </nuxt-link>
    </div>
  </vk-grid>
  <vk-grid id="instafeed" class="uk-grid-collapse uk-flex uk-flex-center" uk-scrollspy="cls: uk-animation-fade; target: > a; repeat: true"></vk-grid>
</div>
</template>
<script>
import iconLabels from '~/components/iconLabels.vue'
import listButtons from '~/components/listButtons.vue'
import listRecipeButtons from '~/components/listRecipeButtons.vue'
import instafeed from 'instafeed.js'
import striptags from 'striptags'
import axios from 'axios'
import moment from 'moment'

export default {
  auth: false,
  scrollToTop: true,
  async asyncData({
    app
  }) {
    let [articleReq, homeReq, ingredientsReq, productsReq, recipeReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?filters[sort][eq]=0'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/home_page_featured_items/rows/?limit=6'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?limit=8'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/products/rows/?limit=2'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?limit=5')
    ])
    return {
      article: articleReq.data.data[0],
      items: homeReq.data.data,
      products: productsReq.data.data,
      recipes: recipeReq.data.data,
      ingredients: ingredientsReq.data.data
    }
  },
  data() {
    return {}
  },
  created() {
    console.log(this.article)
    var feed = new instafeed({
      get: "user",
      userId: '5545214567',
      accessToken: '5545214567.3efc90b.ac0b5eebc2f6481a9ad924b66c006024',
      clientId: '3efc90bc730e4266b6654cd861c88955',
      limit: '30',
      template: '<a target="_blank" class="uk-width-1-2 uk-width-1-3@s uk-width-1-4@m uk-width-1-5@l" href="{{link}}"><img src="{{image}}" alt="{{caption}}"/></a>'
    });
    feed.run();
  },
  computed: {

  },
  components: {
    iconLabels,
    listButtons,
    listRecipeButtons
  },
  methods: {
    formatDateFromNow(data) {
      // return moment(data, 'YYYY-MM-DD HH:mm Z').fromNow()
      var newTime = moment(data);

			return moment(newTime).fromNow();
    },
    showLoginModal() {
      this.$store.commit('SET_LOGINMODAL', true)
    },
    truncate(str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 130
        }
        if (ending == null) {
          ending = '...'
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending
        } else {
          return striptags(str)
        }
      } else {
        return striptags(str)
      }
    }
  }
}
</script>

<style>

</style>
