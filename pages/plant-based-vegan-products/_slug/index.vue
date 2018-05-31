
<template>
<div id="ingredient">

  <div class="uk-position-relative uk-visible-toggle uk-dark slideshow" uk-slideshow="animation: push">

    <ul class="uk-slideshow-items">
      <li v-for="(image, index) in images" v-bind:key="index">
        <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
          <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/900/900/crop/'+ image.name" :alt="index" uk-cover>

        </div>
      </li>
    </ul>
    <div class="uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-bottom uk-light">
      <h1 class="condensed-bold uk-text-uppercase pink">{{ ingredient.name }}</h1>
    </div>

    <a class="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

  </div>



    <div class="recipe__caption" v-html="ingredient.description"></div>

</div>
</template>

<script>
import axios from 'axios'


export default {
  auth: false,
  // transition (to, from) {
  //   if (!from) {
  //
  //   } else if (from.name == 'index' || from.name == 'list') {
  //     return 'slide-left'
  //     console.log("to: " + to.name + " :: from: " + from.name)
  //   }
  // },
  scrollToTop: true,
  async asyncData({
    params
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[url][eq]=' + params.slug).then(res => {
      return {
        ingredient: res.data.data[0],
        images: res.data.data[0].images.data
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {},
  head() {
    return {
      title: this.ingredient.name
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
