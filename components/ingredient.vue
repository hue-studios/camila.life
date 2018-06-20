<template>
<div>
  <vk-card class="uk-flex uk-flex-center uk-flex-middle listing-item" hover>
    <div class="uk-position-relative listing-top">
      <listButtons :id="ingredient.id" :category="ingredient.category" :name="ingredient.name" type="ingredient" :url="ingredient.url" v-if="$auth.$state.loggedIn" />
      <div v-if="this.ingredient.images.data.length > 0" class="listing-image" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + this.ingredient.images.data[0].name + ')'"></div>
      <div v-else class="listing-image" style="background-image: url('https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/camila-sun.jpg')"></div>
    </div>
    <nuxt-link class="uk-position-relative listing-bottom" :to="'/plant-based-vegan-products/' + ingredient.url">

      <vk-card-title class="uk-margin-small">{{ingredient.name}}</vk-card-title>
      <h4 class=""><span class="label blue">CATEGORY</span> {{ingredient.category}}</h4>
      <iconLabels class="uk-visible@s" :item="ingredient" />
      <vk-icon class="uk-position-absolute details-link-icon" icon="chevron-right"></vk-icon>
      <div class="uk-visible@m listing-description" v-html="truncate(ingredient.description, 75)"></div>
    </nuxt-link>
  </vk-card>
  
</div>
</template>

<script>
import iconLabels from '~/components/iconLabels.vue'
import listButtons from '~/components/listButtons.vue'
import axios from 'axios'
import striptags from 'striptags'

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
  async asyncData({
    app
  }) {
    const response = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipe_ingredients/rows/?filters[ingredient][eq]=' + this.ingredient.id)
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
