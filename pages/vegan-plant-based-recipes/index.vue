
<template>
  <div class="container">
    <h1>RECIPES</h1>
    <h5>coming soon.</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '')
  },
  async asyncData () {
    let { data } = await
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?order[name]=ASC')
    return {
      recipes: data.data
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
