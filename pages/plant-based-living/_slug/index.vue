
<template>
<div id="__article" class="uk-container uk-container-expand uk-padding-remove">
  <vk-grid id="__article-grid" class="uk-grid-collapse">
  <div class="uk-width-1-1 uk-width-1-2@l uk-width-2-5@xl article-details__cover">
    <vk-sticky media="1200">
      <div class="uk-background-cover uk-flex uk-flex-center uk-flex-middle" :style="'background-image: url(http://huestudios.com' + image + ')'" uk-parallax="bgy: -185; target: .uk-background-cover">
        <div class="uk-overlay-primary uk-position-cover"></div>
        <div class="uk-overlay uk-position-middle uk-light uk-padding-large">
          <h1 class="uk-text-uppercase white" uk-parallax="y: -370; target: .uk-background-cover">{{ article.title }}</h1>
          <h4 v-if="article.sub_title" uk-parallax="y: -330; target: .uk-background-cover">{{article.sub_title}}</h4>
          <p class="uk-visible@m article-details__description" v-if="article.description" uk-parallax="y: -300; target: .uk-background-cover">{{article.description}}</p>
          <socialSharingArticle :article="article" :media="image" uk-parallax="y: -250; target: .uk-background-cover"></socialSharingArticle>
        </div>

      </div>
    </vk-sticky>
  </div>
  <div class="uk-width-1-2@l uk-width-3-5@xl article-details__article">
      <h6 class="article-details__author">WRITTEN BY <span v-if="article.author" class="uk-text-uppercase">{{article.author}}</span> <span v-else>CAMILA</span></h6>
        <h6 class="article-details__date" v-if="article.date_published">PUBLISHED ON <span>{{formateDate(article.date_published)}}</span></h6>
        <hr class="divider">
        <div class="article-details__content" v-html="article.content"></div>
        <div class="article-details__tags">
          <h5 v-if="tags.length > 0" class="article-details__tag" v-for="(tag,index) in tags" v-bind:key="index">{{tag}}</h5>
        </div>
          <div class="article-details__links">
            <nuxt-link to="/plant-based-living" class="condensed"><span uk-icon="chevron-left"></span> BACK TO ALL ARTICLES
            </nuxt-link>
            <nuxt-link :to="'/plant-based-living/' + article.url" class="condensed">NEXT ARTICLE <span uk-icon="chevron-right"></span>
            </nuxt-link>
          </div>
  </div>
</vk-grid>

</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import socialSharingArticle from '~/components/socialSharingArticle.vue'

export default {
  scrollToTop: true,
  async asyncData({
    params
  }) {
    let {
      data
    } = await axios.get('http://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?filters[url][eq]=' + params.slug)
    return {
      article: data.data[0],
      image: data.data[0].image.data.url,
      tags: []
    }
  },
  created() {
    this.tags = this.makeArray(this.article.tags)
  },
  head() {
    return {
      title: this.article.title + ' - camila.life - Vegan & Plant-Based  Healthy Living',
      meta: [{
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://www.camila.life/plant-based-living/' + this.article.url
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'http://huestudios.com' + this.image
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title + ' - camila.life - Vegan & Plant-Based  Healthy Living'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
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
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'http://huestudios.com' + this.image
        },
        {
          hid: 'twitter:image:alt',
          content: this.article.title
        }
      ]
    }
  },
  components: {
    socialSharingArticle
  },
  methods: {
    formateDate(date) {
      return moment().format('MMMM Do YYYY', date)
    },
    makeArray(str) {
      var newArray = str.split(',')
      return newArray
    },
    truncate(str, length, ending) {
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

</style>
