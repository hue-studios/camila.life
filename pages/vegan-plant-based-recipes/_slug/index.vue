
<template>
  <div class="container">
   <div v-for="image in recipe.images.data">
		<div class="bg-img" v-bind:style="{ backgroundImage: 'url(http://camila.life' +image.url+')', width: '50px', height: '50px' }"> </div>
		</div>
    <h1>{{ recipe.name }}</h1>
    <pre>{{ recipe.style }}</pre>
    <p>{{recipe.cuisine}}</p>
	<p>{{recipe.caption}}</p>
    <h3>HOW TO INDULGE</h3>
    <p>{{recipe.description}}</p>
    <h5>PREP TIME: <span class="green">{{recipe.prep_time}} MIN</span></h5>
    <h5>COOK TIME: <span class="green">{{recipe.cook_time}} MIN</span></h5>
	<h3>INGREDIENTS</h3>
     <ul>
	<li v-for="ingredient in recipe.recipe_ingredients.data">
	{{ingredient.measurement}} {{ingredient.measurement_label}} <nuxt-link :to="'/plant-based-vegan-products/' + ingredient.url">
	<span class="blue text-uppercase bold">{{ingredient.name}}</span> </nuxt-link>
	</li>
	</ul>
    <h3>HOW TO GET IT DONE</h3>
    <ul>
	<li v-for="direction in recipe.recipe_directions.data">
	<span class="blue text-uppercase">{{direction.title}}:</span> {{direction.content}}
	</li>
	</ul>
    <p><nuxt-link to="/vegan-plant-based-recipes">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    return axios.get('http://camila.life/admin/api/1.1/tables/recipes/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        recipe: res.data.data[0]
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '/vegan-plant-based-recipes')
  },
  head () {
    return {
      title: this.recipe.name
    }
  },
  methods: {
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
