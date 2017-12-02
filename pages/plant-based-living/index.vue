
<template>
<div class="grid-y align-middle align-center">
    <h1>PLANT-BASED-LIVING</h1>
    <p>coming soon.</p>
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
.grid-y {
  height: 100vh;
  background: $pink;
  color: $white;
}
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
