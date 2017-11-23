
<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <h5>WRITTEN BY <span v-if="author">{{author}}</span><span v-else>camila</span></h5>
    <div v-html="article.content"></div>
    <h5>{{article.tags}}</h5>
    <p><nuxt-link to="/plant-based-living">Back to the list</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    let { data } = await axios.get('http://camila.life/admin/api/1.1/tables/articles/rows/?filters[url][eq]=' + params.slug)
    return { article: data.data[0] }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '/plant-based-living')
  },
  head () {
    return {
      title: this.article.title
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}
ul li a {
  color: gray;
}
p {
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
