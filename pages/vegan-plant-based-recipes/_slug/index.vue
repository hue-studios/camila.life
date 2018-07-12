
<template>
<vk-grid id="recipe" class="uk-flex uk-flex-center uk-flex-middle">

  <div class="uk-visible@m recipe-title" uk-parallax="y: 0px,-60px; target: .top-section; easing: 0.8; media: @m;">
    <h3><span v-if="style.length > 0">{{style[0]}} /</span>
  <span v-if="recipe.cuisine" class="pink"> {{recipe.cuisine}}</span></h3>
    <h1 class="pink condensed-bold">{{findLove(recipe.name)}}<span v-if="love"><br>LOVE</span></h1>
  </div>
  <div class="uk-hidden@m recipe-title" uk-parallax="y: 0px,-30px; x: 0px, 15px; color: #1a1a1a, #fff; background-color: rgba(1,1,1,1); scale: 1, 0.7; target: .top-section; easing: 0.8;">
    <h3><span v-if="style.length > 0">{{style[0]}} /</span>
  <span v-if="recipe.cuisine" class="pink"> {{recipe.cuisine}}</span></h3>
    <h1 class="pink condensed-bold">{{findLove(recipe.name)}}<span v-if="love"><br>LOVE</span></h1>
  </div>

  <div class="uk-width-1-1 uk-position-relative uk-visible-toggle uk-light top-section recipe-images" uk-slider="center: true; animation: pull" v-if="images.length > 0">
    <ul class="uk-slider-items uk-grid">
      <li class="slider-item uk-width-1-1" v-for="(image, index) in images" :id="image.id" :index="index" v-bind:key="image.id" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/600/600/crop/' + image.name +')'">
      </li>
    </ul>
    <a class="uk-position-center-left uk-position-large uk-light" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-large uk-light" href="#" uk-slidenav-next uk-slider-item="next"></a>
    <ul class="uk-slider-nav uk-dotnav uk-flex uk-flex-center uk-dark"></ul>
  </div>


    <div class="uk-width-5-6 recipe-caption" v-html="recipe.caption"></div>
    <div class="uk-width-auto recipe-stats">
      <vk-grid class="uk-flex uk-flex-center uk-flex-middle">
      <h5 v-if="recipe.prep_time">PREP TIME: <span class="pink condensed-bold">{{recipe.prep_time}} MIN</span></h5>
      <h5 v-if="recipe.cook_time">COOK TIME: <span class="pink condensed-bold">{{recipe.cook_time}} MIN</span></h5>
      <h5><span class="pink condensed-bold">{{recipe.recipe_ingredients.data.length}}</span> INGREDIENTS</h5>
      <h5><span class="pink condensed-bold">{{recipe.recipe_directions.data.length}}</span> STEPS</h5>
    </vk-grid>
    </div>
    <div class="uk-width-5-6 recipe-tabs">
      <vk-tabs>
        <vk-tabs-item :title="'HOW TO GET IT DONE ['+recipe.recipe_directions.data.length+' STEPS]'">
          <div v-for="direction in recipe.recipe_directions.data" v-bind:key="direction.id" class="recipe-direction">
            <p>{{direction.title}}</p>
            <span v-html="direction.content"></span>
          </div>
        </vk-tabs-item>
          <vk-tabs-item :title="recipe.recipe_ingredients.data.length + ' Ingredients'">
            Content
          </vk-tabs-item>

      </vk-tabs>
    </div>
    <div class="uk-width-1-1">
      <h1 class="uk-text-center">MORE <span v-if="recipe.category" class="black-bg" :class="recipe.category">{{recipe.category}}</span> <span v-if="recipe.cuisine" class="" > {{recipe.cuisine}}</span> RECIPES</h1>
    </div>
</vk-grid>
</template>

<script>
import axios from 'axios'


export default {
  auth: false,
  scrollToTop: true,
  async asyncData({
    params,
    req
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        recipe: res.data.data[0],
        images: res.data.data[0].images.data,
        // name: req ? 'server' : 'client'
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  data() {
    return {
      recipe: '',
      love: false,
      style: []
    }
  },
  components: {},
  created() {
    console.log(this.recipe.recipe_directions.data)
    if (this.recipe.style) {
      this.style = this.makeArray(this.recipe.style)
    }
    // if(process.server) {
    //   this.request = 'server'
    // }
  },
  // head() {
  //   return {
  //     title: this.recipe.name
  //   }
  // },
  methods: {
    findLove(str) {
      if (str.includes('LOVE')) {
        var newStr = str.replace('LOVE', '')
        this.love = true
        return newStr.trim()
      }
    },
    makeArray(str) {
      var newArray = str.split(',')
      return newArray
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
