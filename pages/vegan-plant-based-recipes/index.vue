
<template>
  <div class="container">
    <h1>RECIPES</h1>
    <ul>
      <li v-for="recipe in recipes">
        <nuxt-link :to="'/vegan-plant-based-recipes/' + recipe.url">
		<div class="bg-img" v-bind:style="{ backgroundImage: 'url(http://camila.life' +recipe.images.data.data+')', width: '50px', height: '50px' }"> </div>
		<h2>{{ recipe.name }}</h2>
		<div v-for="(image, index) in recipe.images.data">
		<div class="bg-img" v-if="index == 0" v-bind:style="{ backgroundImage: 'url(http://camila.life' +image.url+')', width: '50px', height: '50px' }"></div>
		</div>
		</nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  fetch ({ store }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
    }
  },
  async asyncData () {
    let { data } = await
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?order[name]=ASC')
    return {
      recipes: data.data
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
