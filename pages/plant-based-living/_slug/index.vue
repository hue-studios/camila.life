
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
    <div class="small-12 cell article-details__tags-container">
    <h5 class="article-details__tag" v-for="tag in tags">{{tag}}</h5>
    </div>
    <div id="article-details__sharing-links" class="small-12 cell">
      <div class="sharing-links__container">
      <h5 class="script-font text-lowercase green">SHARE</h5>
      <social-sharing :url="'http://camila.life/plant-based-living/' + article.url"
                    :title="this.article.title + ' - camila.life'"
                    :description="this.truncate(this.article.description)"
                    :quote="this.article.quote"
                    :hashtags="this.article.tags"
                    twitter-user="camila_life_now"
                    :media="'http://huestudios.com' + this.image"
                    inline-template>
        <div>
          <ul id="sharing-links__list">
            <li>
              <network network="facebook"> <i class="fa fa-fw fa-facebook"></i> </network>
            </li>
            <li>
              <network network="googleplus"> <i class="fa fa-fw fa-google-plus"></i> </network>
            </li>
            <li>
              <network network="pinterest"> <i class="fa fa-fw fa-pinterest"></i> </network>
            </li>
            <li>
              <network network="twitter"> <i class="fa fa-fw fa-twitter"></i> </network>
            </li>
            <li>
              <network network="email"> <i class="fa fa-envelope"></i> </network>
            </li>
          </ul>
        </div>
      </social-sharing>
    </div>
    </div>
    <div class="fb-comments" :data-href="'http://www.camila.life/plant-based-living/' + article.url" data-numposts="5"></div>
  </div>
  <mailing-list-inline></mailing-list-inline>
  <camila-footer></camila-footer>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import mailingListInline from '~/components/mailingListInline'
import camilaFooter from '~/components/camilaFooter'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    let { data } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?filters[url][eq]=' + params.slug)
    return {
      article: data.data[0],
      image: data.data[0].image.data.url,
      tags: []
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
    this.tags = this.makeArray(this.article.tags)
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
  components: {
    mailingListInline,
    camilaFooter
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
#sharing-links {
  width: 100%;
  .sharing-links__container {
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    h5 {
      font-size: 34px;
    }
    #sharing-links__list {
      margin-bottom: 0;
      list-style-type: none;
      margin-left: 0;
      display: flex;
      flex-direction:row;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
