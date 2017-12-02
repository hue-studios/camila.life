
<template>

<div id="ingredients">
<div class="grid-x align-center">
<div class="cell small-11">
<h1 class="text-center text-uppercase">INGREDIENTS</h1>
<p class="">I am excited to share the products I have discovered on my journey.  I have a selected list of {{total}} my favs.  You can sign in to create your own shopping list and let me know what you think!!</p>
</div>

  <div id="ingredient-search-box" class="cell small-11 medium-6">
      <h5 class="green body-font text-lowercase">looking for something?</h5>
      <p class="small">search all of my favorite vegan products. Found <span v-text="filteredList.length"></span>.</p>
        <input type="text" v-model="search" placeholder="Search..."/>
  </div>
    </div> 
        <ingredient v-for="(ingredient, index) in filteredList" :ingredient="ingredient" :index="index" v-bind:key="ingredient.id"></ingredient>

      
    </div>
</template>

<script>
import axios from 'axios'
import ingredient from '~/components/ingredient.vue'

export default {
  components: {
    ingredient
  },
  data () {
    return {
      search: '',
      ingredients: []
    }
  },
  scrollToTop: true,
  async asyncData () {
    let { data } = await
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[brand][>]=0&order[name]=ASC')
    return {
      ingredients: data.data,
      total: data.data.length
    }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '')
  },
  methods: {
  },
  computed: {
    filteredList () {
      return this.ingredients.filter(ingredient => {
        return ingredient.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    searchResultsTotal () {
      return this.ingredients.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
#ingredients {
  display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
padding-top: 90px;
 @media (min-width: $large) { 
    padding-top: 110px;
  }
}
#ingredient-search-box {
  input, input[type=text], input[type=text]:focus {
    border-radius: 2px;
    border: none;
    font-family: $condensed-bold-font;
    text-transform: uppercase;
  }
}
</style>
