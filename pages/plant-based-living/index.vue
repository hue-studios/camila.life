
<template>
<div id="articles" class="grid-x">
  <h1 class="small-12 text-center white body-font cell text-lowercase" style="margin-top: 40px;">Plant-Based Living</h1>
  <articleItem class="cell" v-for="(article, index) in articles" :article="article" :index="index" :id="article.id" v-bind:key="article.id"></articleItem>
  <mailing-list-inline></mailing-list-inline>
  <camila-footer></camila-footer>
</div>
</template>

<script>
import axios from 'axios'
import articleItem from '~/components/articleItem'
import mailingListInline from '~/components/mailingListInline'
import camilaFooter from '~/components/camilaFooter'
export default {
  scrollToTop: true,
  components: {
    articleItem,
    mailingListInline,
    camilaFooter
  },
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

<style scoped>
#articles {

}
</style>
