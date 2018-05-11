
<template>
<div id="recipe">

  <div class="uk-position-relative uk-visible-toggle uk-dark slideshow" uk-slideshow="animation: push">

    <ul class="uk-slideshow-items">
      <li v-for="(image, index) in images" v-bind:key="index">
        <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
          <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/'+ image.name" :alt="index" uk-cover>

        </div>
      </li>
    </ul>
    <div class="uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-bottom uk-light">
      <h1 class="condensed-bold uk-text-uppercase pink">{{ recipe.name }}</h1>
    </div>

    <a class="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

  </div>
  <div>


    <div class="recipe__caption" v-html="recipe.caption"></div>
    <div class="recipe__stats">
      <div class="recipe-sub-title">
        <h5 class="style"><span class="prefix">STYLE: </span>{{recipe.style}} </h5>
        <h5 class="cuisine" v-if="recipe.cuisine"><span class="prefix">CUISINE: </span>{{recipe.cuisine}}</h5>
      </div>
      <h5 v-if="recipe.prep_time">PREP TIME: <span class="green">{{recipe.prep_time}} MIN</span></h5>
      <h5 v-if="recipe.cook_time">COOK TIME: <span class="green">{{recipe.cook_time}} MIN</span></h5>
    </div>
    <div class="small cell recipe__ingredients">
      <h3 class="text-lowercase bold-font">ingredients</h3>

    </div>
    <div class="small-12 cell recipe__directions">
      <h3 class="text-lowercase bold-font">HOW TO GET IT DONE</h3>

      <div v-for="(index, direction) in recipe.recipe_directions.data" v-bind:key="index">
        <h3 class="blue text-uppercase">{{direction.title}}</h3>
        <div v-html="direction.content"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'


export default {
  scrollToTop: true,
  async asyncData({
    params
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        recipe: res.data.data[0],
        images: res.data.data[0].images.data
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {},
  head() {
    return {
      title: this.recipe.name
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
