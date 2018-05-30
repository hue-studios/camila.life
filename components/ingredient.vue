<template>
<div>
  <vk-scrollspy repeat :cls="['uk-animation-fade']">
    <vk-card class="uk-position-relative ingredient-item" hover padding="large">
      <listButtons :id="ingredient.id" :category="ingredient.category" :name="ingredient.name" type="ingredient" :url="ingredient.url" />
      <div v-if="this.ingredient.images.data.length > 0" slot="media-top" class="recipe-top" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + this.ingredient.images.data[0].name + ')'"></div>
      <div v-else slot="media-top" class="recipe-top" style="background-image: url('https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/camila-sun.jpg')"></div>

      <vk-card-title class="uk-margin-small uk-text-center">{{ingredient.name}}</vk-card-title>
      <iconLabels :item="ingredient" />
      <h4 class="uk-text-center"><span class="label">CATEGORY</span> {{ingredient.category}}</h4>




      <p v-html="truncate(ingredient.description, 120)"></p>
      <div slot="footer" class="uk-flex uk-flex-bottom uk-flex-center">
        <a class="uk-button uk-button-default condensed-bold" :href="'/vegan-plant-based-recipes/' + ingredient.url">DETAILS</a>
      </div>
    </vk-card>
  </vk-scrollspy>
</div>
</template>

<script>
import striptags from 'striptags'
import iconLabels from '~/components/iconLabels.vue'
import listButtons from '~/components/listButtons.vue'

export default {
  props: ['ingredient'],
  data() {
    return {
      recipes: []
      // goesWith: []
    }
  },
  components: {
    iconLabels,
    listButtons
  },
  async asyncData({ app }) {
    const response = await app.$axios.$get('recipe_ingredients/rows/?filters[ingredient][eq]=' + this.ingredient.id)
    this.recipes = response.data.data
    this.total = this.recipes.length
  },
  created: function () {
     // if (this.ingredient.goes_with) {
     //   this.goesWith = this.makeArray(this.ingredient.goes_with)
     // }
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
