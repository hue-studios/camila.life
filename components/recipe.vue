<template>
<div>
  <div class="action-btns">
    <list-recipe-buttons v-if="this.recipe.images.data.length > 0" :id="recipe.id" :category="recipe.category" :name="recipe.name" type="recipe" :url="recipe.url" :image="recipe.images.data[0].name" :steps="recipe.recipe_directions.meta.total" :ingredients="recipe.recipe_ingredients.meta.total"/>
    <list-recipe-buttons v-else :id="recipe.id" :category="recipe.category" :name="recipe.name" type="recipe" :url="recipe.url" image="" />
  </div>
  <nuxt-link :to="'/vegan-plant-based-recipes/' + recipe.url">
    <vk-grid class="uk-child-width-1-1">
      <div>
        <div v-if="this.recipe.images.data.length > 0" class="uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle recipe-item" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/600/600/crop/' + this.recipe.images.data[0].name+ ')'">
          <h2 class="condensed-bold">{{recipe.name}}</h2>

          <div class="caption">
            <h4 class="green"><span class="white">CUISINE</span> {{recipe.cuisine}}</h4>
            <h4 class="white"><span v-if="recipe.recipe_directions.meta.total > 0" class=""><span class="green">{{recipe.recipe_directions.meta.total}}</span> STEPS</span>
                <br>

              <span v-if="recipe.recipe_ingredients.meta.total > 0" class=""><span class="green">{{recipe.recipe_ingredients.meta.total}}</span> INGREDIENTS</span></h4>
            <h4 class="white"> <span v-if="recipe.prep_time">PREP TIME: <span class="green">{{recipe.prep_time}} MIN</span></span><br>
              <span v-if="recipe.cook_time">COOK TIME: <span class="green">{{recipe.cook_time}} MIN</span></span></h4>
              <h3 :class="recipe.category" class="condensed-bold category">{{recipe.category}}</h3>
          </div>
        </div>
        <div v-else class="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle recipe-item" style="background-image: url('https://huestudios.com/sites/camila.life/content/thumbnail/600/600/crop/camila-sun.jpg')">
          <h2 class="condensed-bold">{{recipe.name}}</h2>
          <div class="caption">
            <h4 class="green"><span class="white">CUISINE</span> {{recipe.cuisine}}</h4>
            <h4 class="white"><span v-if="recipe.recipe_directions.meta.total > 0" class=""><span class="green">{{recipe.recipe_directions.meta.total}}</span> STEPS</span>
                <br>

              <span v-if="recipe.recipe_ingredients.meta.total > 0" class=""><span class="green">{{recipe.recipe_ingredients.meta.total}}</span> INGREDIENTS</span></h4>
            <h4 class="white"> <span v-if="recipe.prep_time">PREP TIME: <span class="green">{{recipe.prep_time}} MIN</span></span><br>
              <span v-if="recipe.cook_time">COOK TIME: <span class="green">{{recipe.cook_time}} MIN</span></span></h4>
          </div>
        </div>
      </div>
    </vk-grid>
  </nuxt-link>

</div>
</template>

<script>
import striptags from 'striptags'
import listRecipeButtons from '~/components/listRecipeButtons'

export default {
  props: ['recipe', 'index'],
  data() {
    return {
      styles: []
    }
  },
  components: {
    listRecipeButtons
  },

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
