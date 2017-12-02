
<template>
  <div class="container">
    <h1>{{ ingredient.name }}</h1>
    <pre>{{ ingredient.description }}</pre>
    <productRecipes :id="ingredient.id"></productRecipes>
    <p><nuxt-link to="/plant-based-vegan-products">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'
import productRecipes from '~/components/productRecipes'

export default {
  scrollToTop: true,
  components: {
    productRecipes
  },
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[url][eq]=' + params.slug)
    return { ingredient: data.data[0] }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '/plant-based-vegan-products')
  },
  head () {
    return {
      title: this.ingredient.name + ' - Plant-Based Ingredient - camila.life',
      description: this.ingredient.description
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
