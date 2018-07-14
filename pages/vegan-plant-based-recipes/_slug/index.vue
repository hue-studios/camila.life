
<template>
<vk-grid id="recipe" class="uk-flex uk-flex-center uk-flex-middle">
  <!-- uk-parallax="y: 0px,-60px; target: .top-section; easing: 0.8; media: @m;" -->
  <div class="uk-visible@m recipe-title">
    <h3><span v-if="style.length > 0">{{style[0]}} /</span>
  <span v-if="recipe.cuisine" class="pink" uk-parallax="color: #FB00DA, #e000fb; target: .top-section; easing: 0.8; "> {{recipe.cuisine}}</span></h3>
    <h1 uk-parallax="color: #FB00DA, #e000fb; target: .top-section; easing: 0.8; " class="pink condensed-bold">{{findLove(recipe.name)}}<span v-if="love"><br>LOVE</span></h1>
  </div>
  <div class="uk-hidden@m recipe-title uk-position-fixed" uk-parallax="y: 0px,-40px; x: 0px, 15px; color: #1a1a1a, #fff; background-color: rgba(1,1,1,1); scale: 1, 0.7; target: .top-section; easing: 0.8;">
    <h3><span v-if="style.length > 0">{{style[0]}} /</span>
  <span v-if="recipe.cuisine" class="pink"> {{recipe.cuisine}}</span></h3>
    <h1 class="pink condensed-bold">{{findLove(recipe.name)}}<span v-if="love"><br>LOVE</span></h1>
  </div>

  <div class="uk-width-1-1">
    <div class="uk-position-relative uk-visible-toggle top-section recipe-images" uk-slider="center: true; animation: pull" v-if="images.length > 0">
      <ul class="uk-slider-items uk-grid">
        <li class="slider-item uk-width-1-1" v-for="(image, index) in images" :id="image.id" :index="index" v-bind:key="image.id" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/600/600/crop/' + image.name +')'">
        </li>
      </ul>
      <a class="uk-position-center-left uk-position-large uk-light" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-large uk-light" href="#" uk-slidenav-next uk-slider-item="next"></a>
      <ul class="uk-slider-nav uk-dotnav uk-flex uk-flex-center uk-dark"></ul>
    </div>
  </div>
  <div class="uk-width-1-1 uk-width-5-6@m uk-text-center recipe-category" v-if="recipe.category">
    <h3 v-if="recipe.category == 'Easy'"><span class="condensed-bold title">{{recipe.name}}</span> is an <span class="black-bg green condensed-bold category">EASY</span><span class="uk-visible@s">, familiar</span> recipe made with <span class="uk-visible@s">healthy</span> vegan ingredients!!</h3>
    <h3 v-if="recipe.category == 'Radical'"><span class="condensed-bold title">{{recipe.name}}</span> is a <span class="black-bg pink condensed-bold category">RADICAL</span>, <span class="uk-visible@s">warrior-style,</span> vegan recipe that challenges!!</h3>
    <vk-grid class="uk-flex uk-flex-center uk-flex-middle">
      <div id="recipe-buttons">
        <button class="uk-button uk-button-default condensed-bold"><vk-icon icon="plus"></vk-icon> SAVE RECIPE</button>
        <button @click.prevent="show = true" class="uk-button uk-button-default condensed-bold"><vk-icon icon="heart"></vk-icon> SHARE THE LOVE</button>
      </div>
    </vk-grid>
    <div class="uk-text-justify recipe-caption" v-html="recipe.caption"></div>
  </div>
  <div class="uk-width-1-1 recipe-stats-box">

    <vk-grid class="uk-flex uk-flex-center uk-position-relative">
      <h3 class="condensed-bold dark-pink" uk-parallax="opacity: 0.4, 0.1, 0.4; easing: 0.8; media: 500">STATS</h3>
      <div>

        <div class="recipe-stats">
          <h5> <span v-if="recipe.prep_time" class="stats-item condensed-bold">PREP TIME: <span class="white condensed-bold">{{recipe.prep_time}} MIN</span></span>

      <span v-if="recipe.cook_time" class="stats-item condensed-bold">COOK TIME: <span class="white condensed-bold">{{recipe.cook_time}} MIN</span></span>

      <span class="stats-item condensed-bold"><span class="white condensed-bold">{{recipe.recipe_ingredients.data.length}}</span> INGREDIENTS</span>

      <span class="stats-item condensed-bold"><span class="white condensed-bold">{{recipe.recipe_directions.data.length}}</span> STEPS</span></h5>
        </div>
      </div>
    </vk-grid>
  </div>

  <div class="uk-width-1-1 uk-width-5-6@s uk-width-1-1@m recipe-tabs">
    <vk-grid class="uk-flex uk-flex-center ">
      <div class="uk-width-1-1 uk-text-center">
        <h2 class="uk-text-center condensed-bold recipe-tab-title">HOW TO GET IT DONE [<span class="pink">{{ recipe.recipe_directions.data.length}}</span> STEPS + <span class="pink">{{ recipe.recipe_ingredients.data.length}}</span> ingredients]</h2>
      </div>
      <div class="uk-width-1-1 uk-width-auto@m" id="steps-tab">
        <div class="uk-text-center">
          <h4 class="uk-margin-remove-bottom">Completed <span class="script-font pink">{{currentStep}}</span> of <span class="script-font pink">{{totalSteps}}</span> steps.</h4>
          <transition name="fade" mode="out-in">
          <p class="script-font uk-margin-small-bottom uk-margin-remove-top" id="step-message">{{stepMessage}}</p>
        </transition>
        </div>
        <div class="uk-margin-remove-top uk-flex uk-flex-center uk-flex-middle uk-flex-column recipe-tab">
          <div v-for="(direction, index) in recipe.recipe_directions.data" v-bind:key="direction.id" class="recipe-direction">
            <input class="uk-checkbox" :id="'checkbox-' + index" type="checkbox" @click="stepComplete(index)">
            <p class="uk-text-capitalize title"><span class="condensed-bold pink uk-text-uppercase" :id="'step-' + index">STEP {{index + 1}}: </span> <span class="title-word" :id="'title-' + index">{{titleCase(direction.title)}}</span></p>
            <div class="content" :id="'content-' + index" v-html="direction.content"></div>
          </div>
        </div>
      </div>

      <div id="ingredients-tab" class="uk-width-1-1 uk-width-2-5@m uk-flex uk-flex-center uk-flex-column recipe-tab">

        <div class="uk-width-1-1 uk-text-center">

          <h4 class="uk-margin-remove-bottom">Ingredients</h4>
          <p class="script-font uk-margin-small-bottom uk-margin-remove-top">Click the <vk-icon icon="plus" ratio="0.6"></vk-icon> to add the ingredient to your grocery list.</p>
        </div>
        <div class="uk-width-auto">
        <ingredient v-for="(ingredient, index) in ingredients" :index="index" v-bind:key="ingredient.id" :id="ingredient.ingredient" :recipe="ingredient.recipe" :measurement="ingredient.measurement" :label="ingredient.measurement_label" :description="ingredient.recipe_ingredient_description"></ingredient>
      </div>
      </div>
    </vk-grid>

  </div>
  <div class="uk-width-1-1">
    <h1 class="uk-text-center">MORE <span v-if="recipe.category" class="black-bg" :class="recipe.category">{{recipe.category}}</span> <span v-if="recipe.cuisine" class="" > {{recipe.cuisine}}</span> RECIPES</h1>

    <div class="uk-position-relative uk-visible-toggle uk-width-1-1 related-recipes" uk-slider="center: true" v-if="relatedRecipes.length > 0">
      <ul class="uk-slider-items uk-grid">
        <related-recipe v-for="(recipe, index) in relatedRecipes" :id="recipe.id" :index="index" v-bind:key="recipe.id" class="uk-width-5-6"></related-recipe>
      </ul>
      <a class="uk-position-center-left uk-position-large uk-light" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-large uk-light" href="#" uk-slidenav-next uk-slider-item="next"></a>
      <ul class="uk-slider-nav uk-dotnav uk-flex uk-flex-center uk-dark"></ul>
    </div>
  </div>
  <vk-modal center size="container" :show.sync="show" class="uk-padding-remove uk-margin-remove-top full-image">
    <vk-modal-close @click="show = false"></vk-modal-close>

  </vk-modal>
</vk-grid>
</template>

<script>
import axios from 'axios'
import ingredient from '~/components/recipeIngredient.vue'
import relatedRecipe from '~/components/relatedRecipe.vue'

export default {
  auth: false,
  // transition(to, from) {
  //   if (from && (from.name == 'index' || from.name == 'list' || from.name == 'vegan-plant-based-recipes')) {
  //     return 'slide-left'
  //   }
  // },
  scrollToTop: true,
  async asyncData({
    params,
    req,
    app
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        recipe: res.data.data[0],
        images: res.data.data[0].images.data,
        ingredients: res.data.data[0].recipe_ingredients.data
        // name: req ? 'server' : 'client'
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  data() {
    return {
      ingredients: [],
      love: false,
      style: [],
      show: false,
      currentStep: 0,
      nextStep: 1,
      totalSteps: 0,
      stepMessage: 'Time to try something new!',
      relatedRecipes: []
    }
  },
  components: {
    ingredient,
    relatedRecipe
  },
  created() {

    if (this.recipe.style) {
      this.style = this.makeArray(this.recipe.style)
    }
    this.totalSteps = this.recipe.recipe_directions.data.length
    // if(process.server) {
    //   this.request = 'server'
    // }
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[category][eq]=' + this.recipe.category).then(response => {
      this.relatedRecipes = response.data.data
      console.log(response.data.data)
    }).catch(e => {
      this.errors.push(e)
    })
  },
  head() {
    return {
      title: this.recipe.name
    }
  },
  methods: {
    findLove(str) {
      if (str.includes('LOVE')) {
        var newStr = str.replace('LOVE', '')
        this.love = true
        return newStr.trim()
      } else {
        return str
      }
    },
    makeArray(str) {
      var newArray = str.split(',')
      return newArray
    },
    titleCase(str) {
      return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      }).join(' ');
    },
    stepComplete(index) {
      var element1 = document.getElementById('title-' + index)
      var element2 = document.getElementById('content-' + index)
      var element3 = document.getElementById('step-' + index)
      var element4 = document.getElementById('checkbox-' + index)

      this.nextStep = index + 2;
      this.currentStep = index + 1;
      element1.classList.toggle('strike-through')
      element2.classList.toggle('strike-through')
      element3.classList.toggle('change-to-grey')
      // console.log(this.currentStep + " to next: " + this.nextStep)

      if (element4.checked && (this.currentStep == 1)) {
        this.stepMessage = "Now you're cookin'!"
      }
      if (element4.checked && (this.currentStep == (this.totalSteps - 1))) {
        this.stepMessage = "Only one more step..."
      }
      if (!element4.checked && (this.currentStep !== 1)) {
        console.log(this.currentStep + " it's unchecked dummy")
        this.currentStep = index;
        this.nextStep = index + 1;
        this.stepMessage = "oops...I see you're going backwards."

      } else if (element4.checked && (this.currentStep !== 0) && (this.currentStep !== (this.totalSteps - 1)) && (this.currentStep !== this.recipe.recipe_directions.data.length)) {
        console.log(this.currentStep + "it's checked")
        this.stepMessage = "Now you're cookin'!"
      } else if (!element4.checked && (this.currentStep == 1)) {
        console.log(this.currentStep + " then it should be")
        this.currentStep = index;
        this.nextStep = index + 1;
        console.log(this.currentStep + " now.")
        this.stepMessage = 'Time to start again!'
      }


      // last step notification
      if (((index + 1) == this.recipe.recipe_directions.data.length) && element4.checked && this.$auth.$state.loggedIn) {
        this.stepMessage = "You did it " + this.$auth.user.given_name + "!! Now time to eat!";
        this.showSuccessMsg({
          title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>GREAT JOB <span class='condensed-bold'>` + this.$auth.user.given_name + `</span>!<br>YOU FINISHED MAKING THE <span class='condensed-bold'>` +
            this.recipe.name + `</span> RECIPE!</span>`,
          image: 'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + this.images[0].name
        })
      } else if (((index + 1) == this.recipe.recipe_directions.data.length) && element4.checked) {
        this.stepMessage = "You did it!! Now time to eat!"
        this.showSuccessMsg({
          title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>GREAT JOB!<br>YOU FINISHED MAKING THE <span class='condensed-bold'>` + this.recipe.name + `</span> RECIPE!</span>`,
          image: 'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + this.images[0].name
        })
      }
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'bottomRight',
      color: 'white',
      message: '',
      timeout: 5000,
      cb: function () {},
      onClosing: function () {
        var listTotalBadge = document.getElementById('step-message')
        listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('step-message')
        setTimeout(function () {
          listTotalBadge.classList.add('pulseEffect')
        }, 20)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
