<template>
<div>
<div v-for="recipe in recipes">
<recipeDetails :id="recipe.recipe_id"></recipeDetails>
</div>
</div>
</template>

<script>
import axios from 'axios'
import recipeDetails from './recipeDetails.vue'

export default {
  props: ['id'],
  data () {
    return {
      recipes: [],
      total: ''
    }
  },
  components: {
    recipeDetails
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipe_ingredients/rows/?filters[ingredient][eq]=' + this.id).then(response => {
      this.recipes = response.data.data
      this.total = this.recipes.length
    }).catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
 
</style>