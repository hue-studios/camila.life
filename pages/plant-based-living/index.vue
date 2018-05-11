
<template>
<div id="articles" class="" uk-scrollspy="target: > .article; cls:uk-animation-fade; delay: 400; repeat:true">
    <h1 class="uk-width-1-1">Plant-Based Living: {{name}}</h1>
  <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center uk-grid-match" uk-grid-parallax="translate:200">

    <div v-for="(article, index) in articles" :article="article" :index="index" :id="article.id" v-bind:key="article.id">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-bottom">
          <h3 class="uk-card-title uk-text-uppercase">{{article.title}}</h3></div>
    </div>
</div>

<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s article" uk-grid v-for="(article, index) in articles" :article="article" :index="index" :id="article.id" v-bind:key="article.id">
    <div class=" uk-cover-container" v-bind:class="[index % 2 == 0 ? 'uk-card-media-left' : 'uk-flex-last@s uk-card-media-right']">
        <img :src="'http://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/best/' + article.image.data.name" alt="" uk-cover >
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
  async asyncData () {
    let { data, req } = await
      axios.get('http://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?order[date_published]=ASC')
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
