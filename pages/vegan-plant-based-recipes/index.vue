
<template>
<vk-grid id="recipes">
  <div class="top-section uk-width-1-1 uk-background-image uk-flex uk-flex-middle" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/'+ page.header_image.data.name + ')'">
    <vk-grid class="uk-flex uk-flex-right uk-flex-middle">
      <h2 class="uk-width-1-1 uk-text-right">RECIPES / <span class="pink">CREATE THE LOVE</span></h2>
      <div class="uk-text-right caption uk-width-1-1">
        <h5 class=""><span class="green condensed-bold black-bg">EASY</span>: FAMILIAR RECIPES THAT EVERYONE LOVES</h5>
        <h5 class=""><span class="pink condensed-bold black-bg">RADICAL</span>: WARRIOR STYLE, HANDS-ON, HEALTHY RECIPES THAT CHALLENGE</h5>
      </div>
      <div id="search-settings-bar" class="uk-width-1-1 uk-hidden@m">
        <vk-sticky animation="slide-top">

          <div class="uk-flex uk-flex-middle uk-text-center">
            <vk-grid>
              <div class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
                <div class="uk-position-relative">
                  <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                  <input class="uk-search-input condensed-bold uk-text-uppercase" type="search" placeholder="Search..." v-model="search" />
                </div>
                <vk-icon id="filters-btn" icon="settings" @click.prevent="filtersToggle()"></vk-icon>
                <a id="clear-btn" class="condensed" @click.prevent="clearFilters()">CLEAR</a>
              </div>
            </vk-grid>
          </div>
        </vk-sticky>
      </div>
    </vk-grid>
  </div>

  <div id="filters" class="uk-hidden@m">
    <form>
      <vk-icon ratio="1.4" class="uk-close" icon="close" @click.prevent="closeFilters()"></vk-icon>
      <div class="">
        <h5 class="uk-text-center">FILTER RECIPES</h5>
      </div>
      <div>

        <vk-grid class="uk-margin uk-grid-small uk-child-width-1-2 uk-flex uk-flex-middle uk-text-center uk-grid-collapse">
          <label class=" condensed-bold"><input class="uk-radio" type="radio" value="Easy" v-model="category"> EASY</label>
          <label class=" condensed-bold"><input class="uk-radio" type="radio" value="Radical" v-model="category"> RADICAL</label>
        </vk-grid>
      </div>
      <div class="uk-position-relative">
        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
        <input class="uk-search-input condensed-bold uk-text-uppercase" type="search" placeholder="Search..." v-model="search" />
      </div>
      <div class="uk-margin-medium-top">
        <select class="uk-select uk-text-uppercase condensed" v-model="cuisine">
      <option value="" selected>SELECT CUISINE</option>
      <option value="just good">just good</option>
      <option value="mexican">mexican</option>
      <option value="american">american</option>
      <option value="italian">italian</option>
      <option value="asian fusion">asian fusion</option>
      <option value="mediterranean">mediterranean</option>
      <option value="indian">indian</option>

    </select>
      </div>
      <div>
        <!-- <h5 class="uk-text-left range-label">NUMBER OF INGREDIENTS</h5> -->
        <vk-grid class="uk-flex uk-flex-middle uk-flex-center uk-grid-collapse">
          <div>
            <input class="range" type="range" v-model="ingredients" min="2" max="15" step="1">
          </div>
          <div>
            <p class="condensed-bold range-count">{{ingredients}} INGREDIENTS</p>
          </div>
        </vk-grid>
      </div>
      <div>
        <!-- <h5 class="uk-text-left range-label">NUMBER OF STEPS</h5> -->
        <vk-grid class="uk-flex uk-flex-middle uk-flex-center uk-grid-collapse">
          <div>
            <input class="range" type="range" v-model="steps" min="2" max="15">
          </div>
          <div>
            <p class="condensed-bold range-count">{{steps}} STEPS</p>
          </div>
        </vk-grid>

      </div>


      <p class="condensed-bold uk-text-uppercase uk-text-center uk-width-1-1 uk-margin-small-top">found
        <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition> ingredients.</p>
      <vk-grid class="uk-margin-small uk-child-width-1-1">
        <div class="uk-text-center">
          <button id="apply-filters-btn" @click.prevent="closeFilters()" class="uk-button uk-button-default condensed">VIEW RESULTS</button>
          <button id="clear-filters-btn" @click.prevent="clearFilters()" class="uk-button uk-button-default condensed">CLEAR FILTERS</button>
        </div>
      </vk-grid>

    </form>
  </div>
  <div id="filters-inline" class="uk-width-1-5 uk-width-2-6@m uk-width-1-5@l uk-visible@m uk-flex uk-flex-center uk-flex-middle">
    <vk-sticky bottom="#ingredients">
      <div id="filters-inline-box" class="uk-flex uk-flex-center uk-flex-middle uk-text-center">
        <vk-grid class="uk-grid-small uk-child-width-1-1">
          <div class="">
            <h5 class="uk-text-center">FILTERS</h5>
          </div>
          <div>

            <vk-grid class="uk-margin uk-grid-small uk-child-width-1-2 uk-flex uk-flex-middle uk-grid-collapse">
              <label class=" condensed-bold"><input class="uk-radio" type="radio" value="Easy" v-model="category"> EASY</label>
              <label class=" condensed-bold"><input class="uk-radio" type="radio" value="Radical" v-model="category"> RADICAL</label>
            </vk-grid>
          </div>
          <div>
            <input class="uk-search-input condensed-bold uk-text-uppercase" type="search" placeholder="Search..." v-model="search" />
          </div>

          <div>
            <select class="uk-select uk-text-uppercase condensed" v-model="cuisine">
          <option value="" selected>SELECT CUISINE</option>
          <option value="just good">just good</option>
          <option value="mexican">mexican</option>
          <option value="american">american</option>
          <option value="italian">italian</option>
          <option value="asian fusion">asian fusion</option>
          <option value="mediterranean">mediterranean</option>
          <option value="indian">indian</option>

        </select>
          </div>

          <div>
            <!-- <h5 class="uk-text-left range-label">NUMBER OF INGREDIENTS</h5> -->
            <vk-grid class="uk-flex uk-flex-middle uk-grid-collapse">
              <div>
                <input class="range" type="range" v-model="ingredients" min="2" max="15" step="1">
              </div>
              <div>
                <p class="condensed-bold range-count">{{ingredients}} INGREDIENTS</p>
              </div>
            </vk-grid>
          </div>
          <div>
            <!-- <h5 class="uk-text-left range-label">NUMBER OF STEPS</h5> -->
            <vk-grid class="uk-flex uk-flex-middle uk-grid-collapse">
              <div>
                <input class="range" type="range" v-model="steps" min="2" max="15">
              </div>
              <div>
                <p class="condensed-bold range-count">{{steps}} STEPS</p>
              </div>
            </vk-grid>

          </div>

          <p class="condensed-bold uk-text-uppercase uk-text-center uk-width-1-1">found
            <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition> ingredients.</p>
          <div>

            <button id="clear-filters-btn" @click.prevent="clearFilters()" class="uk-button uk-button-default condensed">CLEAR<span class="uk-visible@s"> FILTERS</span></button>

          </div>
        </vk-grid>
      </div>
    </vk-sticky>
  </div>
  <div class="uk-width-5-6 uk-width-3-5@m ">
    <vk-grid id="listings-grid" class="uk-child-width-1-1 uk-flex uk-flex-center uk-flex-middle">
      <p class="condensed-bold uk-width-1-1 uk-text-uppercase uk-text-center uk-hidden@m uk-flex-middle ">found
        <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition> ingredients</p>
      <transition-group name="card" mode="out-in" v-if="filteredList.length > 0">
        <recipe class="listings-item" v-for="(recipe, index) in filteredList" :recipe="recipe" :index="index" :id="recipe.id" v-bind:key="recipe.id"></recipe>
      </transition-group>

      <div v-if="filteredList.length < 1" class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
        <h5 style="margin-bottom: 50px;"><span class="pink" @click.prevent="filtersToggle()">REFINE YOUR SEARCH</span> TO FIND MORE INGREDIENTS.</h5>
      </div>


    </vk-grid>
  </div>
</vk-grid>
</template>

<script>
import axios from 'axios'
import recipe from '~/components/recipe'

export default {
  auth: false,
  scrollToTop: true,
  async asyncData() {
    let [recipesReq, pageReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[hide][<]=1&order[sort]=ASC'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/pages/rows/?filters[page][eq]=recipes')
    ])
    return {
      recipes: recipesReq.data.data,
      total: recipesReq.data.data.length,
      page: pageReq.data.data[0]
    }
  },
  data() {
    return {
      search: '',
      cuisine: '',
      style: '',
      ingredients: '',
      steps: '',
      category: ''
    }
  },
  components: {
    recipe
  },

  computed: {

    filteredList() {
      var vm = this;
      var cuisine = vm.cuisine;
      var search = vm.search;
      var category = vm.category;
      var steps = vm.steps;
      var ingredients = vm.ingredients;
      if (cuisine === "" && search === "" && steps === "" && ingredients === "" && category === "") {
        return vm.recipes;
      } else {
        return vm.recipes.filter(function (recipe) {
          return (cuisine === '' || recipe.cuisine === cuisine) && (category === '' || recipe.category === category) && (ingredients == '' || recipe.recipe_ingredients.data.length == ingredients) && (search === '' || recipe.name.toLowerCase().includes(
            vm.search.toLowerCase())) && (steps == '' || recipe.recipe_directions.data.length == steps);
        });
      }
    },
    searchResultsTotal() {
      return this.recipes.length
    }
  },
  methods: {
    clearFilters() {
      var vm = this;
      vm.cuisine = ''
      vm.search = ''
      vm.steps = ''
      vm.ingredients = ''
      vm.category = ''
    },
    filtersToggle() {
      var element = document.getElementById('filters')
      var element2 = document.getElementById('search-settings-box')
      element.classList.toggle('open')
    },
    closeFilters() {
      var element = document.getElementById('filters')
      var element2 = document.getElementById('search-settings-box')
      element.classList.remove('open')
    }
  }
}
</script>

<style lang="scss" scoped>
#recipes {
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
}
// .top-section {
//   background-image: url('https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/duotone_(1).png');
// }
</style>
