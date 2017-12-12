
<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <h5>WRITTEN BY <span v-if="article.author">{{article.author}}</span><span v-else>camila</span></h5>
    <div v-html="article.content"></div>
    <h5>{{article.tags}}</h5>
    <p><nuxt-link to="/plant-based-living">Back to the list</nuxt-link></p>
    <div id="hiddenDiv" v-text="article.content" style="display: none;"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    let { data } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?filters[url][eq]=' + params.slug)
    return {
      article: data.data[0],
      image: 'Peter'
    }
  },
  fetch ({ store }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '/plant-based-living')
      })
    }
  },
  head () {
    return {
      title: this.article.title + ' - camila.life - Vegan & Plant-Based  Healthy Living',
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        { hid: 'og:url', property: 'og:url', content: 'http://www.camila.life/plant-based-living/' + this.article.url },
        { hid: 'og:image', property: 'og:image', content: 'http://huestudios.com' + this.image },
        { hid: 'og:title', property: 'og:title', content: this.article.title + ' - camila.life - Vegan & Plant-Based  Healthy Living' },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'twitter:summary_large_image', name: 'twitter:summary_large_image', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@camila_life_now' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
        { hid: 'twitter:image', name: 'twitter:image', content: 'http://huestudios.com' + this.image },
        { hid: 'twitter:image:alt', content: this.article.title }
      ]
    }
  },
  methods: {
    stripTags (str) {
      return str
    },
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 160
        }
        if (ending == null) {
          ending = '...'
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending
        } else {
          return str
        }
      } else {
        return str
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';

</style>
