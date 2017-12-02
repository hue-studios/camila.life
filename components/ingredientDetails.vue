<template>
<div :id="ingredient.id">
  <p>{{ingredient.name}}</p>
  <nuxt-link :to="'/plant-based-vegan-products/' + ingredient.url">PRODUCT DETAILS</nuxt-link>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      ingredient: {}
    }
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[id][eq]=' + this.id).then(response => {
      this.ingredient = response.data.data[0]
    }).catch(e => {
      this.errors.push(e)
    })
  }
}
</script>


<style lang="scss" scoped>
 
</style>