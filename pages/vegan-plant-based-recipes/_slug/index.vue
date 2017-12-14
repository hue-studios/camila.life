
<template>
<div id="recipe" class="grid-x" v-bind:style="'background-image: url(https://huestudios.com' + bgImg + ')'">
  <h6>coming soon <i class="fa fa-heart" aria-hidden="true"></i></h6>
  <div style="display: none;">
  <h1 class="bold-font text-lowercase">{{ recipe.name }}</h1>

  <div class="recipe__caption" v-html="recipe.caption"></div>
  <div class="recipe__stats">
  <div class="recipe-sub-title">
    <h5 class="style"><span class="prefix">STYLE: </span>{{recipe.style}} </h5>
    <h5 class="cuisine" v-if="recipe.cuisine"><span class="prefix">CUISINE: </span>{{recipe.cuisine}}</h5>
  </div>
  <h5 v-if="recipe.prep_time">PREP TIME: <span class="green">{{recipe.prep_time}} MIN</span></h5>
  <h5 v-if="recipe.cook_time">COOK TIME: <span class="green">{{recipe.cook_time}} MIN</span></h5>
</div>
  <div class="small cell recipe__ingredients">
  <h3 class="text-lowercase bold-font">ingredients</h3>
  <ingredient v-for="(ingredient, index) in recipe.recipe_ingredients.data" :index="index" v-bind:key="ingredient.id" :id="ingredient.ingredient" :measurement="ingredient.measurement" :label="ingredient.measurement_label"></ingredient>
</div>
<div class="small-12 cell recipe__directions">
  <h3 class="text-lowercase bold-font">HOW TO GET IT DONE</h3>

  <div v-for="direction in recipe.recipe_directions.data">
    <h3 class="blue text-uppercase">{{direction.title}}</h3>
    <div v-html="direction.content"></div>
  </div>
</div>
</div>
<mailing-list-inline></mailing-list-inline>
<camila-footer></camila-footer>
</div>
</template>

<script>
import axios from 'axios'
import ingredient from '~/components/recipeIngredient'
import mailingListInline from '~/components/mailingListInline'
import camilaFooter from '~/components/camilaFooter'

export default {
  scrollToTop: true,
  async asyncData ({
    params
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        recipe: res.data.data[0],
        bgImg: res.data.data[0].images.data[0].url
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {
    ingredient,
    mailingListInline,
    camilaFooter
  },
  fetch ({
    store
  }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '/vegan-plant-based-recipes')
      })
    }
  },
  head () {
    return {
      title: this.recipe.name
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
