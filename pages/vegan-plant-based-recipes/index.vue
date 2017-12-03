
<template>
<div class="grid-y align-middle align-center">
    <h1>VEGAN RECIPES</h1>
    <p>this is where you and I create the <i class="red fa fa-heart" aria-hidden="true"></i>!! very soon this will be a source of vegan recipes I have experiemented with. 
    <p>coming soon.</p>
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
