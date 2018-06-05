
<template>
<div id="recipe">

  <div class="top-section">
  <div>
      <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/'+ images[0].name" >
  </div>
  </div>
  <div>

    <h1>{{name}}</h1>
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

      <div v-for="(index, direction) in recipe.recipe_directions.data" v-bind:key="direction.id">
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
  auth: false,
  scrollToTop: true,
  async asyncData({
    params, req
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        recipe: res.data.data[0],
        images: res.data.data[0].images.data,
        name: req ? 'server' : 'client'
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {},
  created () {
    console.log(this.images)
    if(process.server) {
      this.request = 'server'
    }
  },
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
