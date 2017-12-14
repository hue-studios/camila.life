
<template>
<<<<<<< HEAD
<div class="grid-y align-middle align-center">
    <h1>PLANT BASED HEALTHY LIVING</h1>
    <p>read the <i class="red fa fa-heart" aria-hidden="true"></i>!! I am looking forward to sharing my journey here with my own experiences and ideas.</p>
    <p>coming soon.</p>
  </div>
=======
<div class="container">
  <h1>Plant-Based Living</h1>
  <ul>
    <li v-for="article in articles">
      <nuxt-link :to="'/plant-based-living/' + article.url">{{ article.title }}</nuxt-link>
    </li>
  </ul>
  <p>
    <nuxt-link to="/">Back to home page</nuxt-link>
  </p>
</div>
>>>>>>> 1.0.1
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  async asyncData () {
    let { data } = await
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/?order[date_published]=ASC')
    return {
      articles: data.data
    }
  },
  fetch ({
    store
  }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
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
text-align: center;
  width: 90%;
  @media (min-width: $medium) { 
    width: 70%;
  }
  @media (min-width: $large) { 
    width: 50%;
  }
}

a {
  color: #41B883;
}
</style>
