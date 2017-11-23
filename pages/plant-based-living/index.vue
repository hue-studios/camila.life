
<template>
  <div class="container">
    <h1>Plant-Based Living</h1>
    <ul>
      <li v-for="article in articles">
        <nuxt-link :to="'/plant-based-living/' + article.url">{{ article.title }}</nuxt-link>
      </li>
    </ul>
    <p><nuxt-link to="/">Back to home page</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  async asyncData () {
    let { data } = await
      axios.get('http://camila.life/admin/api/1.1/tables/articles/rows/?order[date_published]=ASC')
    return {
      articles: data.data
    }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '')
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
