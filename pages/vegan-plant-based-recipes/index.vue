
<template>
<<<<<<< HEAD
<div class="grid-y align-middle align-center">
    <h1>VEGAN RECIPES</h1>
    <p>this is where you and I create the <i class="red fa fa-heart" aria-hidden="true"></i>!! very soon this will be a source of vegan recipes I have experiemented with. 
    <p>coming soon.</p>
=======
  <div id="recipes" class="grid-x">
    <recipe class="cell" v-for="(recipe, index) in recipes" :recipe="recipe" :index="index" :id="recipe.id" v-bind:key="recipe.id"></recipe>

>>>>>>> 1.0.1
  </div>
</template>

<script>
import axios from 'axios'
import recipe from '~/components/recipe'

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
    let [recipesReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?order[sort]=ASC')
    ])
    return {
      recipes: recipesReq.data.data,
      total: recipesReq.data.data.length
    }
  },
  components: {
    recipe
  },
  created () {
  }
}
</script>

<<<<<<< HEAD
<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
.grid-y {
  height: 100vh;
  background: $pink;
  color: $white;
}
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
text-align: center;
  width: 90%;
  @media (min-width: $medium) { 
    width: 70%;
  }
  @media (min-width: $large) { 
    width: 50%;
  }
}
a {
  color: #41B883;
=======
<style scoped>
#recipes {
	align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  max-width: 1400px;
>>>>>>> 1.0.1
}
</style>
