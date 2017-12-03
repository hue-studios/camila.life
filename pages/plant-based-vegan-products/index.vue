
<template>

<div class="grid-y align-middle align-center">
    <h1>VEGAN PRODUCTS</h1>
    <p>discover the <i class="red fa fa-heart" aria-hidden="true"></i>!  there are a lot of products out there...I have tried a bunch of them.  soon, this will be a list of the ones I love with a shopping list feature to help you discover what you <i class="red fa fa-heart" aria-hidden="true"></i>!</p>
    <p>coming soon.</p>
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
.grid-y {
  height: 100vh;
  background: $pink;
  color: $white;
}
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
</style>
