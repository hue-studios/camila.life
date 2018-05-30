<template>
<div id="home">
  <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-background-cover uk-background-blend-multiply uk-position-relative" v-if="!$auth.$state.loggedIn" id="site-intro" uk-parallax="bgy:150px; target: #site-intro">
    <div id="flare" uk-parallax="rotate: -30; scale: 2.3 ;top: 120px; target: #site-intro"></div>
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
            <p>You have <span v-if="$store.state.list.length > 0">{{this.$store.state.list.length}}</span> item<span v-if="$store.state.list.length > 1">s</span> in your grocery list.</p>
          </div>
          <div v-else>
            <p>This is why you should create an account.</p>
            <button class="uk-button uk-button-default uk-text-center" @click.prevent="$auth.loginWith('auth0')">CREATE ACCOUNT</button>

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
  <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-background-cover uk-background-blend-multiply uk-background-fixed" id="featured-quote">

    <p class="uk-width-1-2" uk-parallax="color: #FB00DA,#00bfff,#FB00DA; viewport: 0.8">A nice quote here!</p>
  </vk-grid>
  <vk-grid class="uk-grid-large uk-text-center uk-flex uk-flex-center uk-flex-middle" id="featured-ingredients" v-vk-height-match="{ target: '.uk-card' }">
    <div v-for="(ingredient, index) in ingredients" :key="index">
      <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
          <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + ingredient.images.data[0].name" :alt="ingredient.name" class="">
        </div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{ingredient.name}}</h3>
          <iconLabels :item="ingredient" />
          <nuxt-link :to="'/plant-based-vegan-products/'+ingredient.url" class="uk-button uk-button-default">DETAILS</nuxt-link>
        </div>
      </div>
    </div>
    <div>
        <nuxt-link to="/plant-based-vegan-products" class="uk-flex uk-flex-center uk-flex-middle goto-page-link">
        <p class="uk-text-left" uk-parallax="color: #00bfff,#FB00DA; x: 40px">see all<br> vegan<br> products </p>
        <vk-icon icon="chevron-right" uk-parallax="color: #FB00DA, #00bfff; x: 30px"></vk-icon>
        </nuxt-link>
    </div>
  </vk-grid>

  <vk-grid id="featured-recipe" class="uk-background-cover uk-background-blend-multiply uk-panel uk-flex uk-flex-center uk-flex-middle uk-position-relative" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/' + recipe.images.data[0].name + ')'"
    uk-parallax="bgy: 800; target: #featured-recipe">
    <h1 class="bg-title white uk-width-1-1 uk-text-center" uk-parallax="y: -60px; target: #featured-recipe">Featured Recipe</h1>
    <div class="uk-width-1-1@s uk-width-1-3@m uk-text-center white">
      <h2 class="white">{{recipe.name}}</h2>
      <h4 class="white"><span class="label">CUISINE</span> {{recipe.cuisine}}</h4>
      <p class="white uk-text-justify">{{truncate(recipe.caption, 200)}}</p>
      <p><span v-if="recipe.recipe_directions.meta.total > 0" class="condensed-bold timing">{{recipe.recipe_directions.meta.total}} STEPS</span> +

        <span v-if="recipe.recipe_ingredients.meta.total > 0" class="condensed-bold timing">{{recipe.recipe_ingredients.meta.total}} INGREDIENTS</span></p>
      <a class="uk-button uk-button-default condensed-bold white" :href="'/vegan-plant-based-recipes/' + recipe.url">DETAILS</a>
    </div>
  </vk-grid>
  <vk-grid class="uk-grid-large uk-text-center uk-flex uk-flex-center uk-flex-middle" id="featured-products">
    <div v-for="(product, index) in products" :key="index">
      <div class="uk-card uk-card-default">
        <div class="uk-card-media-top">
          <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + product.images.data[0].name" :alt="product.name" class="">
        </div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">{{product.name}} <span class="pink condensed-bold">${{product.price}}</span></h3>
          <nuxt-link :to="product.url" class="uk-button uk-button-default">SHOP THIS</nuxt-link>
        </div>
      </div>
    </div>
    <div>
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
import instafeed from 'instafeed.js'

export default {
  auth: false,
  scrollToTop: true,
  async asyncData({
    app
  }) {
    let [articleReq, homeReq, ingredientsReq, productsReq, recipeReq] = await Promise.all([
      app.$axios.get('tables/articles/rows/?filters[sort][eq]=0'),
      app.$axios.get('tables/home_page_featured_items/rows/?limit=6'),
      app.$axios.get('tables/ingredients/rows/?limit=3'),
      app.$axios.get('tables/products/rows/?limit=2'),
      app.$axios.get('tables/recipes/rows/?filters[sort][eq]=0')
    ])
    return {
      article: articleReq.data.data[0],
      items: homeReq.data.data,
      products: productsReq.data.data,
      recipe: recipeReq.data.data[0],
      ingredients: ingredientsReq.data.data,
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
    iconLabels
  },
  methods: {
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
