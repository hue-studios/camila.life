
<template>
<vk-grid id="recipe" class="uk-flex uk-flex-center uk-flex-middle">



  <!-- uk-parallax="y: 0px,-60px; target: .top-section; easing: 0.8; media: @m;" -->
  <div class="recipe-title">
    <h3><span v-if="style.length > 0">{{style[0]}} /</span>
  <span v-if="recipe.cuisine" class="pink"> {{recipe.cuisine}}</span></h3>
    <h1 class="pink condensed-bold">{{findLove(recipe.name)}}<span v-if="love"><br>LOVE</span></h1>
  </div>


  <div id="top-section" class="uk-width-1-1 top-section">
    <div class="uk-position-relative uk-visible-toggle recipe-images" uk-slider="center: true; animation: pull" v-if="images.length > 0">
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

  <div class="uk-width-1-1 uk-width-5-6@s uk-width-1-1@m recipe-tabs" id="recipe-tabs">
    <vk-grid class="uk-flex uk-flex-center ">
      <div class="uk-width-1-1 uk-text-center recipe-tabs-intro">
        <h2 class="uk-text-center condensed- uk-margin-remove-bottom">HOW TO GET IT DONE</h2>
        <h3 class="condensed-bold uk-margin-remove">[<span class="pink">{{ recipe.recipe_directions.data.length}}</span> STEPS + <span class="pink">{{ recipe.recipe_ingredients.data.length}}</span> ingredients]</h3>
        <vk-icon class="uk-margin-remove-top" icon="chevron-down"></vk-icon>
      </div>

      <div class="uk-width-1-1 uk-width-auto@m" id="steps-tab">
          <vk-sticky bottom="#recipe-tabs" :offset="80" :media="960">
            <div>
        <div class="uk-text-center recipe-tab-intro">
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
          </vk-sticky>
      </div>


      <div id="ingredients-tab" class="uk-width-1-1 uk-width-2-5@m uk-flex uk-flex-center uk-flex-column recipe-tab">
        <vk-sticky bottom="#recipe-tabs" :offset="80" :media="960">
          <div>
        <div class="uk-width-1-1 uk-text-center recipe-tab-intro">

          <h4 class="uk-margin-remove-bottom">Ingredients</h4>
          <p class="script-font uk-margin-small-bottom uk-margin-remove-top">Click the <vk-icon class="uk-border-circle green-bg" icon="plus" ratio="0.6"></vk-icon> to add the ingredient to your grocery list.</p>
        </div>
        <div class="uk-width-1-1">
        <ingredient v-for="(ingredient, index) in ingredients" :index="index" v-bind:key="ingredient.id" :id="ingredient.ingredient" :recipe="ingredient.recipe" :measurement="ingredient.measurement" :label="ingredient.measurement_label" :description="ingredient.recipe_ingredient_description"></ingredient>
      </div>
    </div>
</vk-sticky>
      </div>

    </vk-grid>

  </div>
  <div class="uk-width-1-1 related-recipes">
    <h1 class="uk-text-center condensed-bold white">MORE <span v-if="recipe.category" class="black-bg" :class="recipe.category">{{recipe.category}}</span> RECIPES</h1>

    <div class="uk-position-relative uk-visible-toggle uk-width-1-1 related-recipes-slider" uk-slider="center: true; velocity: 30" v-if="relatedRecipes.length > 0">
      <ul class="uk-slider-items uk-grid">
        <related-recipe v-for="(recipe, index) in relatedRecipes" :id="recipe.id" :index="index" v-bind:key="recipe.id" class="uk-width-1-1 uk-width-1-2@s"></related-recipe>
      </ul>
      <a class="uk-position-center-left uk-position-large uk-light" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-large uk-light" href="#" uk-slidenav-next uk-slider-item="next"></a>
      <ul class="uk-slider-nav uk-dotnav uk-flex uk-flex-center uk-dark"></ul>
    </div>
  </div>
  <vk-sticky top="#top-section" animation="slide-right" :offset="10">
    <div id="sticky-title">

      <h3 class="white"><span v-if="style.length > 0">{{style[0]}} /</span>
    <span v-if="recipe.cuisine" class="pink"> {{recipe.cuisine}}</span></h3>
      <h1 class="pink condensed-bold">{{findLove(recipe.name)}}<span v-if="love"><br>LOVE</span></h1>
    </div>
  </vk-sticky>
  <vk-modal center size="container" :show.sync="show" class="uk-padding-remove uk-margin-remove-top full-image">
    <vk-modal-close @click="show = false"></vk-modal-close>
    <sharing :item="recipe" :media="images[0].name" />
  </vk-modal>
</vk-grid>
</template>

<script>
import axios from 'axios'
import ingredient from '~/components/recipeIngredient.vue'
import relatedRecipe from '~/components/relatedRecipe.vue'
import sharing from '~/components/sharing/sharing.vue'

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
    relatedRecipe,
    sharing
  },
  created() {

    if (this.recipe.style) {
      this.style = this.makeArray(this.recipe.style)
    }
    this.totalSteps = this.recipe.recipe_directions.data.length
    // if(process.server) {
    //   this.request = 'server'
    // }
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[category][eq]=' + this.recipe.category + '&filters[id][neq]=' + this.recipe.id + '&limit=3&order[sort]').then(response => {
      this.relatedRecipes = response.data.data
      console.log(response.data.data)
    }).catch(e => {
      this.errors.push(e)
    })
  },
  head() {
    return {
      title: this.recipe.name + ' - ' + this.recipe.category + ' Vegan Recipe on camila.life'
      meta: [{
          hid: 'description',
          name: 'description',
          content: this.recipe.caption
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://www.camila.life/vegan-plant-based-recipes/' + this.recipe.url
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://huestudios.com/sites/camila.life/content/thumbnail/600/600/crop/' + this.images[0].name
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.recipe.name + ' - ' + this.recipe.category + ' Vegan Recipe on camila.life'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.recipe.caption
        },
        {
          hid: 'twitter:summary_large_image',
          name: 'twitter:summary_large_image',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@camila_life_now'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.recipe.name + ' - ' + this.recipe.category + ' Vegan Recipe on camila.life'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.recipe.caption
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://huestudios.com' + this.image
        },
        {
          hid: 'twitter:image:alt',
          content: this.recipe.name
        }
      ]
    }
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
        this.stepMessage = "You did it " + this.$auth.user.given_name + "!! Now it's time to indulge!";
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
