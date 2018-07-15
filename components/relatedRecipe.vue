<template>

  <li class="slider-item">
      <div class="uk-panel uk-background-cover uk-light" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + image+')'">
          <div class="uk-position-center uk-text-center">
              <h2 uk-slider-parallax=" x: 300,-300; opacity: 1,1,0" class="condensed-bold uk-text-uppercase">{{recipe.name}}</h2>
                <h5 uk-slider-parallax="opacity: 1,1,0; x: 350,-350;"><span class="green">CUISINE</span> {{recipe.cuisine}}</h5>

           <p uk-slider-parallax="opacity: 1,1,0; x: 400,-400;"><span v-if="directions > 0" class="condensed-bold timing">{{directions}} STEPS</span> +

                  <span v-if="ingredients > 0" class="condensed-bold timing">{{ingredients}} INGREDIENTS</span></p>
                <nuxt-link uk-slider-parallax="opacity: 1,1,0; x: 500,-500; " :to="'/vegan-plant-based-recipes/'+recipe.url" class="uk-button uk-button-default">DETAILS</nuxt-link>

          </div>
      </div>
  </li>

</template>

<script>
import axios from 'axios'
import striptags from 'striptags'

export default {
  props: ['id'],
  data () {
    return {
      recipe: {},
      image: 'camila-sun.jpg',
      directions: null,
      ingredients: null
    }
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[id][eq]=' + this.id).then(response => {
      console.log("RELATED:: " +response.data.data[0].images.data[0].name)
      this.recipe = response.data.data[0]
      if(response.data.data[0].images.data.length > 0) {
      this.image = response.data.data[0].images.data[0].name
    }
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
.slider-item {
  height: 250px;
  .uk-background-cover {
    height: 250px;
  }
}
</style>
