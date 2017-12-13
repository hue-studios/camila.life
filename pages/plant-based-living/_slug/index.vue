
<template>
  <div class="container">
    <div id="fb-root"></div>
    <script>
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=112054666106286'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
   </script>
   <div class="grid-x grid-padding-x article-details">
     <div class="small-12 cell article-details__title" :style="'background-image: url(https://huestudios.com' + image + ')'">
       <h1 class="text-lowercase body-font">{{ article.title }}</h1>

       <h5 class="article-details__author">WRITTEN BY <span v-if="article.author">{{article.author}}</span><span v-else>camila</span></h5>
       <h6 class="article-details__date" v-if="article.date_published">{{formateDate(article.date_published)}}</h6>
      </div>
    <div class="small-11 medium-9 large-8 cell article-details__content" v-html="article.content"></div>
    <h5 class="article-details__tags">{{makeArray(article.tags)}}</h5>
    <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>
    <p><nuxt-link to="/plant-based-living">Back to the list</nuxt-link></p>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    let { data } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?filters[url][eq]=' + params.slug)
    return {
      article: data.data[0],
      image: data.data[0].image.data.url,
      tags: data.data[0].tags
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
  created () {
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
    formateDate (date) {
      return moment().format('MMMM Do YYYY', date)
    },
    makeArray (str) {
      var newArray = str.split(',')
      return newArray
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
