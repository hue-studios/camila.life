
<template>
<div id="ingredient">
  <vk-grid class="uk-grid-collapse uk-flex uk-flex-center uk-flex-middle">
  <div class="uk-width-1-2 top-section">
  <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/'+ ingredient.images.data[0].name" alt="">
  </div>
  <div class="uk-width-1-2">
      <h1 class="condensed uk-text-uppercase">{{ ingredient.name }}</h1>
      <div class="article-details__tags">
        <h5 v-if="goes_with.length > 0" class="article-details__tag" v-for="(item,index) in goes_with" v-bind:key="index">{{item}}</h5>
      </div>
    <div class="recipe__caption" v-html="ingredient.description"></div>

  </div>
</vk-grid>
</div>
</template>

<script>
import axios from 'axios'


export default {
  auth: false,
  scrollToTop: true,
  // transition (to, from) {
  //     if (from.name == 'index' || from.name == 'list') {
  //       return 'slide-left'
  //     }
  // },
  async asyncData({
    params
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        ingredient: res.data.data[0],
        goes_with: []
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {},
  created () {
    if(this.ingredient.goes_with) {
      this.goes_with = this.makeArray(this.ingredient.goes_with)
    }

  },
  head() {
    return {
      title: this.ingredient.name + ' on camila.life - Vegan Product Review'
    }
  },
  methods: {
    makeArray(str) {
      var newArray = str.split(',')
      return newArray
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
