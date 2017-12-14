
<template>

<<<<<<< HEAD
<div class="grid-y align-middle align-center">
    <h1>VEGAN PRODUCTS</h1>
    <p>discover the <i class="red fa fa-heart" aria-hidden="true"></i>!  there are a lot of products out there...I have tried a bunch of them.  soon, this will be a list of the ones I love with a shopping list feature to help you discover what you <i class="red fa fa-heart" aria-hidden="true"></i>!</p>
    <p>coming soon.</p>
=======
<div id="ingredients" class="grid-x">
  <div class="small-12 cell text-center page-intro" :style="'background-image: url(http://huestudios.com' + page.header_image.data.url + ')'">
    <h1 id="ingredients-title" class="text-uppercase">INGREDIENTS OF LOVE</h1>
    <p class="text-lowercase">Awesome plant-based ingredients for you to discover and experiment with in your favorite dishes.</p>
    <h5 class="pink text-uppercase">Discover.  Get Inpsired. Save it.  Shop it.</h5>
  </div>
  <div id="ingredient-search-box" class="cell small-11 medium-6">
    <h5 class="green body-font text-lowercase">looking for something?</h5>
    <p class="small">search all of my favorite vegan products. Found <span v-text="filteredList.length"></span>.</p>
    <input type="text" v-model="search" placeholder="Search..."/>
  </div>
  <div id="ingredient-container">
      <ingredient v-for="(ingredient, index) in filteredList" :ingredient="ingredient" :index="index" v-bind:key="ingredient.id"></ingredient>
  </div>
>>>>>>> 1.0.1
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
  async asyncData ({ query, error }) {
    let [ingredientsReq, pageReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[brand][>]=0&order[name]=ASC'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/pages/rows/')
    ])
    return {
      ingredients: ingredientsReq.data.data,
      total: ingredientsReq.data.data.length,
      page: pageReq.data.data[0]
    }
  },
  fetch ({ store }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
    }
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: $large) {
  }
  .page-intro {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba($black, 0.6);
    background-blend-mode: darken;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: $white;
    #ingredients-title {
      color: rgba($green, 1);
      font-size: 48px;
      margin-bottom: 0px;
      line-height: 42px;
      @media (min-width: 375px) {
        font-size: 56px;
        line-height: 50px;
      }
      @media (min-width: $medium) {
        font-size: 96px;
        line-height: 82px;
      }
      @media (min-width: $large) {
        font-size: 156px;
        line-height: 136px;
      }
    }
    p {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 0px;
      padding-top: 30px;
      padding-bottom: 10px;
      width: 94%;
      @media (min-width: $medium) {
        font-size: 22px;
        line-height: 30px;
        padding-top: 30px;
        padding-bottom: 10px;
        width: 80%;
      }
      @media (min-width: 750px) {
        width: 70%;
      }
      @media (min-width: $large) {
        padding-top: 30px;
        padding-bottom: 10px;
        width: 50%;
        font-size: 26px;
        line-height: 30px;
      }
      @media (min-width: $large) {
        width: 70%;
      }

    }
    h5 {
      font-size: 24px;
      margin-bottom: 0px;
      line-height: 30px;
      padding-top: 0px;
      padding-bottom: 30px;
      @media (min-width: $medium) {
        font-size: 40px;
        line-height: 40px;
        padding-top: 0px;
        padding-bottom: 70px;
      }
      @media (min-width: $large) {
        font-size: 48px;
        line-height: 50px;
        padding-top: 0px;
        padding-bottom: 50px;
      }
    }
  }
}
#ingredient-search-box {
display: none;
  input, input[type=text], input[type=text]:focus {
    border-radius: 2px;
    border: none;
    font-family: $condensed-bold-font;
    text-transform: uppercase;
  }
}
<<<<<<< HEAD
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
=======
#ingredient-container {
  padding-top: 20px;
  padding-bottom: 20px;
}

>>>>>>> 1.0.1
</style>
