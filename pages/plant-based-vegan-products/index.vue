
<template>
<vk-grid id="ingredients" class="uk-flex uk-flex-center uk-flex-top">
  <div class="top-section uk-width-1-1 uk-background-cover uk-flex uk-flex-center uk-flex-middle page-cover" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/'+ page.header_image.data.name + ')'" uk-parallax="bgy: 200; target: .uk-background-cover">
    <div class="uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-middle uk-light uk-padding-large uk-text-center">
      <h1 class="uk-text-uppercase white" uk-parallax="y: 100; target: .uk-background-cover">VEGAN INGREDIENTS <span class="uk-badge pink-bg">{{total}}</span></h1>
      <p class="white" uk-parallax="y: 60; target: .uk-background-cover">{{page.caption}}</p>
    </div>
  </div>
  <div id="search-settings-bar" class="uk-width-1-1 uk-hidden@m">
    <vk-sticky :top="50" animation="slide-top">
      <div class="uk-flex uk-flex-center uk-flex-middle uk-text-center">
        <div class="uk-position-relative">
            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
            <input class="uk-search-input condensed-bold uk-text-uppercase" type="search" placeholder="Search..." v-model="search" />
        </div>

        <vk-icon id="filters-btn" icon="settings" @click.prevent="filtersToggle()"></vk-icon>
      </div>
    </vk-sticky>
  </div>
  <div id="filters" class="uk-hidden@m">
    <form>
      <vk-icon ratio="1.4" class="uk-close" icon="close" @click.prevent="closeFilters()"></vk-icon>
      <div class="">
        <h5 class="uk-text-center">FILTER INGREDIENTS</h5>
      </div>
      <div class="uk-position-relative">
          <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
          <input class="uk-search-input condensed-bold uk-text-uppercase" type="search" placeholder="Search..." v-model="search" />
      </div>
      <div class="uk-margin-medium-top">
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
      <vk-grid class="uk-grid-small uk-margin-small uk-child-width-1-2 uk-child-width-1-3@s">
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="organic"> ORGANIC</label>
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="gluten_free"> GLUTEN-FREE</label>
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="soy_free"> SOY-FREE</label>
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="non_gmo"> NON-GMO</label>
      </vk-grid>
      <p class="condensed uk-text-uppercase uk-text-center uk-width-1-1 uk-margin-medium-top">found
        <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition> ingredients.</p>
      <vk-grid class="uk-margin-small uk-child-width-1-1">
        <div class="uk-text-center">
          <button id="apply-filters-btn" @click.prevent="closeFilters()" class="uk-button uk-button-default condensed">VIEW RESULTS</button>
          <button id="clear-filters-btn" @click.prevent="clearFilters()" class="uk-button uk-button-default condensed">CLEAR FILTERS</button>
        </div>
      </vk-grid>
    </form>
  </div>
  <div id="filters-inline" class="uk-width-1-5 uk-visible@m uk-flex uk-flex-center uk-flex-middle">
    <vk-sticky bottom="#ingredients">
    <div id="filters-inline-box" class="uk-flex uk-flex-center uk-flex-middle uk-text-center">
      <vk-grid class="uk-grid-small uk-child-width-1-1">
      <div class="">
        <h5 class="uk-text-center">FILTERS</h5>
      </div>
      <div>
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
      <div>
      <vk-grid class="uk-grid-small uk-margin-small uk-child-width-1-2 uk-text-left">
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="organic"> ORGANIC</label>
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="gluten_free"> GLUTEN-FREE</label>
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="soy_free"> SOY-FREE</label>
        <label class="condensed"><input class="uk-checkbox" type="checkbox" v-model="non_gmo"> NON-GMO</label>
      </vk-grid>
    </div>
      <p class="condensed uk-text-uppercase uk-text-center uk-width-1-1">found
        <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition> ingredients.</p>
        <div>

          <button id="clear-filters-btn" @click.prevent="clearFilters()" class="uk-button uk-button-default condensed">CLEAR<span class="uk-visible@s"> FILTERS</span></button>

    </div>
    </vk-grid>
    </div>
  </vk-sticky>
</div>

  <div id="listings" class="uk-width-5-6 uk-width-3-5@m">
    <vk-grid id="listings-grid" class="uk-child-width-1-1 uk-flex uk-flex-middle">
      <p class="condensed uk-text-uppercase uk-text-center uk-width-1-1 uk-hidden@m">found
        <transition name="fade"> <span class="pink" v-text="filteredList.length"></span></transition> ingredients.</p>
        <transition-group name="card" mode="out-in" v-if="filteredList.length > 0">
      <ingredient class="listings-item" v-for="(ingredient, index) in filteredList" :ingredient="ingredient" :index="index" :id="ingredient.id" v-bind:key="ingredient.id" ></ingredient>
    </transition-group>
      <div v-if="filteredList.length < 1" class="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
        <h5><span class="pink" @click.prevent="filtersToggle()">REFINE YOUR SEARCH</span> TO FIND MORE INGREDIENTS.</h5>
      </div>


    </vk-grid>
  </div>
</vk-grid>
</template>

<script>
import axios from 'axios'
import ingredient from '~/components/ingredient.vue'

export default {
  auth: false,
  // transition (to, from) {
  //   console.log("to: " + to.name + " :: from: " + from.name)
  // },
  components: {
    ingredient
  },
  transition(to, from) {
    if (!from) {

    } else if (from && from.name == 'plant-based-vegan-products-slug') {
      return 'slide-right'
      console.log("to: " + to.name + " :: from: " + from.name)
    }
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
  created () {
      console.log(this.ingredients[0])
  },
  data() {
    return {
      search: '',
      category: '',
      organic: false,
      non_gmo: false,
      gluten_free: false,
      soy_free: false,
      ingredients: []

    }
  },
  fetch({
    store
  }) {
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
      vm.organic = 0
      vm.non_gmo = 0
      vm.gluten_free = 0
      vm.soy_free = 0
      console.log("PETER")
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
  },
  computed: {
    filteredList() {
      var vm = this;
      var category = vm.category;
      var search = vm.search;
      var organic = vm.organic;
      var non_gmo = vm.non_gmo;
      var gluten_free = vm.gluten_free;
      var soy_free = vm.soy_free;
      if (category === "" && search === "" && !organic &&  !non_gmo && !gluten_free && !soy_free) {
        return vm.ingredients;
      } else {
        return vm.ingredients.filter(function (ingredient) {
          return (category === '' || ingredient.category === category) && (!organic || ingredient.organic === 1) && (!non_gmo|| ingredient.non_gmo === 1) && (!gluten_free || ingredient.gluten_free=== 1) && (!soy_free || ingredient.soy_free === 1) && (search === '' || ingredient.name.toLowerCase().includes(vm.search.toLowerCase()));
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
