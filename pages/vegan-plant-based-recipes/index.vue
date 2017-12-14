
<template>
  <div id="recipes" class="grid-x">
    <recipe class="cell" v-for="(recipe, index) in recipes" :recipe="recipe" :index="index" :id="recipe.id" v-bind:key="recipe.id"></recipe>
    <mailing-list-inline></mailing-list-inline>
    <camila-footer></camila-footer>
  </div>
</template>

<script>
import axios from 'axios'
import recipe from '~/components/recipe'
import mailingListInline from '~/components/mailingListInline'
import camilaFooter from '~/components/camilaFooter'

export default {
  scrollToTop: true,
  fetch ({ store }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
    }
  },
  async asyncData () {
    let [recipesReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?order[sort]=ASC')
    ])
    return {
      recipes: recipesReq.data.data,
      total: recipesReq.data.data.length
    }
  },
  components: {
    recipe,
    mailingListInline,
    camilaFooter
  },
  created () {
  }
}
</script>

<style scoped>
#recipes {
	align-items: flex-start;
  justify-content: center;
  flex-direction: row;
}
</style>
