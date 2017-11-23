
<template>

<div class="grid-x grid-padding-x">
<div class="cell small-12">
<h1 class="text-center body-font text-lowercase">INGREDIENTS</h1>
<p class="">I am excited to share the products I have discovered on my journey.  This page includes a selected list of my favs.  You can sign in to create your own shopping list and let me know what you think!!</p>
</div>
<div class="cell medium-3">
      <h5 class="pink body-font text-lowercase">looking for someting?</h5>
      <p class="small">search all of my favorite vegan products.</p>
        <input type="text" v-model="search" placeholder="Search title.."/>
      </div>
      <div class="cell medium-9 medium-cell-block-y">
        <ingredient v-for="(ingredient, index) in filteredList" :ingredient="ingredient" :index="index" v-bind:key="ingredient.id"></ingredient>

      </div>
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
      axios.get('http://camila.life/admin/api/1.1/tables/ingredients/rows/?filters[brand][>]=0&order[name]=ASC')
    return {
      ingredients: data.data
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
    }
  }
}
</script>

<style scoped>

</style>
