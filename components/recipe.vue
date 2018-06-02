<template>
<div>
  <vk-scrollspy repeat :cls="['uk-animation-fade']">
    <vk-card class="recipe-item" hover padding="large">
      <div v-if="this.recipe.images.data.length > 0" slot="media-top" class="uk-position-relative recipe-top" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + this.recipe.images.data[0].name+ ')'">
        <a class="uk-position-absolute uk-transform-center" href="#" style="top: 35px; right: 0px;" uk-marker></a>
      </div>
      <div v-else slot="media-top" class="uk-position-relative recipe-top" style="background-image: url('https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/camila-sun.jpg')">
        <a class="uk-position-absolute uk-transform-center" href="#" uk-marker></a>
      </div>

      <vk-card-title class="uk-margin-large">{{recipe.name}}</vk-card-title>

      <h4><span class="label">CUISINE</span> {{recipe.cuisine}}</h4>
      <h5 v-if="styles.length > 0" v-for="(style, index) in styles" v-bind:key="index" class="uk-text-uppercase">{{style}}</h5>



      <p v-html="truncate(recipe.caption, 200)"></p>
      <p><span v-if="recipe.recipe_directions.meta.total > 0" class="condensed-bold timing">{{recipe.recipe_directions.meta.total}} STEPS</span> +

      <span v-if="recipe.recipe_ingredients.meta.total > 0" class="condensed-bold timing">{{recipe.recipe_ingredients.meta.total}} INGREDIENTS</span></p>
      <p v-if="recipe.prep_time" class="condensed-bold timing"><span class="condensed label">PREP TIME:</span> {{recipe.prep_time}} MIN</p>
      <p v-if="recipe.cook_time" class="condensed-bold timing"><span class="condensed label">COOK TIME:</span> {{recipe.cook_time}} MIN</p>
      <p v-else class="condensed-bold timing"><span class="condensed label">No cook time...</span>it's ready to eat!</p>



      <div slot="footer" class="uk-flex uk-flex-bottom uk-flex-center">
        <nuxt-link class="uk-button uk-button-default condensed-bold" :to="'/vegan-plant-based-recipes/' + recipe.url">DETAILS</nuxt-link>
      </div>
    </vk-card>
  </vk-scrollspy>
</div>
</template>

<script>
import striptags from 'striptags'

export default {
  props: ['recipe', 'index'],
  data() {
    return {
      styles: []
    }
  },
  components: {},

  created: function () {
    this.styles = this.makeArray(this.recipe.style)
  },
  methods: {
    makeArray(str) {
      var newArray = str.split(',')
      return newArray
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
<style lang="scss">

</style>
