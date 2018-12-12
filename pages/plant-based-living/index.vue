
<template>
<div id="articles" class="top-section" uk-scrollspy="target: > .article; cls:uk-animation-fade; delay: 400; repeat:true">
    <h1 class="uk-width-1-1">Plant-Based Living</h1>



        <div id="viewport" class="uk-margin">
          <vk-grid class="uk-child-width-1-6" v-vk-height-viewport="{ offsetTop: true }">
            <div>
              <vk-sticky bottom="#viewport" :offset="50">
                <div class="uk-card uk-card-primary uk-card-body uk-margin">
                  Stick to container; 50px offset
                </div>
              </vk-sticky>
            </div>

            <div>
              <vk-sticky top="100vh" :target="10">
                <div class="uk-card uk-card-primary uk-card-body">
                  Sticky after 100vh; Scroll up if initially above paragraph below
                </div>
              </vk-sticky>
            </div>

            <div>
              <vk-sticky top="#viewport" animation="slide-top">
                <div class="uk-card uk-card-primary uk-card-body">
                  Stick below container; animation
                </div>
              </vk-sticky>
            </div>
          </vk-grid>
        </div>

<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s article" uk-grid v-for="(article, index) in articles" :article="article" :index="index" :id="article.id" v-bind:key="article.id">
    <div class=" uk-cover-container" v-bind:class="[index % 2 == 0 ? 'uk-card-media-left' : 'uk-flex-last@s uk-card-media-right']">
        <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/best/' + article.image.data.name" alt="" uk-cover >
        <canvas width="600" height="400"></canvas>
    </div>
    <div>
        <div class="uk-card-body" >
            <h3 class="uk-card-title">{{article.title}}</h3>
            <p>{{article.description}}</p>
            <nuxt-link class="details-btn" :to="'/plant-based-living/' + article.url">DETAILS<span></span><span></span></nuxt-link>
        </div>
    </div>
</div>


</div>
</template>

<script>
import axios from 'axios'

export default {
  layout({
    app
  }) {
    return !app.$auth.loggedIn ? 'default' : 'authorized';
  },
  async asyncData () {
    let { data, req } = await
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?order[date_published]=ASC')
    return {
      articles: data.data,
      name: req ? 'server' : 'client'
    }
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    makeArray (str) {
      var newArray = str.split(',')
      return newArray
    },
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 130
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
  },
}
</script>

<style>

</style>
