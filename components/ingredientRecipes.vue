<template>
<div>
  <div class="uk-card uk-card-default uk-text-center ingredient-recipe">
    <div class="uk-card-media-top">
      <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + image" :alt="recipe.name" class="">
    </div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">{{recipe.name}}</h3>
      <h5 class=""><span class="blue">CUISINE</span> {{recipe.cuisine}}</h5>

 <p><span v-if="directions > 0" class="condensed-bold timing">{{directions}} STEPS</span> +

        <span v-if="ingredients > 0" class="condensed-bold timing">{{ingredients}} INGREDIENTS</span></p>
      <nuxt-link :to="'/vegan-plant-based-recipes/'+recipe.url" class="uk-button uk-button-default">DETAILS</nuxt-link>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import striptags from 'striptags'

export default {
  props: ['id'],
  data () {
    return {
      recipe: {},
      image: null,
      directions: null,
      ingredients: null
    }
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[id][eq]=' + this.id).then(response => {
      console.log(response.data.data[0])
      this.recipe = response.data.data[0]
      this.image = response.data.data[0].images.data[0].name
      this.directions = response.data.data[0].recipe_directions.meta.total
      this.ingredients = response.data.data[0].recipe_ingredients.meta.total
    }).catch(e => {
      this.errors.push(e)
    })
  },
  computed: {},
  methods: {
  }
}
</script>


<style lang="scss" scoped>
</style>
