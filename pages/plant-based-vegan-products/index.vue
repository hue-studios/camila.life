
<template>
  <vk-grid id="recipes">
    <div class="uk-width-1-1 uk-background-cover uk-flex uk-flex-center uk-flex-middle page-cover" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/'+ page.header_image.data.name + ')'" uk-parallax="bgy: 200; target: .uk-background-cover">
      <div class="uk-overlay-primary uk-position-cover"></div>
      <div class="uk-overlay uk-position-middle uk-light uk-padding-large uk-text-center">
        <h1 class="uk-text-uppercase white" uk-parallax="y: 100; target: .uk-background-cover">{{page.page}} <span class="uk-badge pink-bg">{{total}}</span></h1>
        <p class="white" uk-parallax="y: 60; target: .uk-background-cover">{{page.caption}}</p>
      </div>

    </div>
    <div id="filters" class="uk-width-1-1">
      <vk-sticky :top="50" animation="slide-top">
        <form>
          <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-text-center">
          <div class="">
          <h5>FILTER <span class="uk-visible@s">RECIPES</span>: </h5>
        </div>
          <div class="uk-visible@s">
              <input class="uk-search-input condensed-bold uk-text-uppercase" type="search" placeholder="Search..." v-model="search" />
            </div>
            <div>
            <select class="uk-select uk-text-uppercase condensed" v-model="category">
            <option value="" selected>SELECT CATEGORY</option>
              <option value="dairy-free">dairy-free</option>
              <option value="meat-free">meat-free</option>
              <option value="oils / sauces">oils / sauces</option>
              <option value="herbs / spices">herbs / spices</option>
              <option value="grains">grains</option>
              <option value="vegetables">vegetables</option>
              <option value="fruits">fruits</option>

          </select>
        </div>

  <div class="uk-visible@s">
    <p class="condensed uk-text-uppercase">found
        <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition>.</p>
      </div>
  <div>


          <button id="clear-filters-btn" @click.prevent="clearFilters()" class="uk-button uk-button-default condensed">CLEAR<span class="uk-visible@s"> FILTERS</span></button>
  </div>
  </vk-grid>
        </form>
        <!-- <p class="uk-label">STEPS:</p>
        <select class="uk-select uk-text-uppercase condensed" v-model="steps">
          <option value="" selected>I Don't Care</option>
            <option value="4">less than 5</option>
            <option value="5">5-10</option>

        </select> -->

        <!-- <input class="uk-range" type="range" value="1" min="1" max="15" step="1" v-model="steps">

          <select class="uk-select uk-text-uppercase condensed" v-model="ingredients">
          <option value="" selected>I Don't Care</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>

        </select> -->
        <!-- <p class="script-font">search all of my favorite vegan products...found
            <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition>.</p> -->
      </vk-sticky>
    </div>
    <div id="listings" class="uk-section">
      <div class="uk-container-large uk-padding-large">
        <vk-grid class="uk-child-width-1-1 uk-child-width-1-2@m uk-child-width-1-2@m uk-child-width-1-3@l" v-vk-height-match="{ target: '.uk-card' }" gutter="large">
          <ingredient v-for="(ingredient, index) in filteredList" :ingredient="ingredient" :index="index" :id="ingredient.id" v-bind:key="ingredient.id" v-if="filteredList.length > 0"></ingredient>
          <div v-else-if="ingredients.length < 1 || filteredList.length < 1" class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
            <h5>THERE ARE NO RESULTS.</h5>
          </div>
          <div v-else class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
            <vk-spinner ratio="1.5"></vk-spinner>
          </div>
        </vk-grid>
      </div>
    </div>
  </vk-grid>
</template>

<script>
import axios from 'axios'
import ingredient from '~/components/ingredient.vue'

export default {
  auth: false,
  transition (to, from) {
    console.log("to: " + to.name + " :: from: " + from.name)
  },
  components: {
    ingredient
  },
  scrollToTop: true,
  async asyncData() {
    let [ingredientsReq, pageReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[ingredients_page]=1&order[sort]=ASC'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/pages/rows/?filters[page][eq]=ingredients')
    ])
    return {
      ingredients: ingredientsReq.data.data,
      total: ingredientsReq.data.data.length,
      page: pageReq.data.data[0]
    }
  },
  data() {
    return {
      search: '',
      category: '',
      ingredients: []

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
    clearFilters() {
      var vm = this;
      vm.category = ''
      vm.search = ''
      console.log("PETER")
    }
  },
  computed: {
    filteredList() {
      var vm = this;
      var category = vm.category;
      var search = vm.search;

      if (category === "" && search === "") {
        return vm.ingredients;
      } else {
        return vm.ingredients.filter(function (ingredient) {
          return (category === '' || ingredient.category === category) && (search === '' || ingredient.name.toLowerCase().includes(vm.search.toLowerCase()));
        });
      }
    },
    searchResultsTotal() {
      return this.ingredients.length
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
