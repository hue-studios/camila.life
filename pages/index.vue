
<template>
 <div class="page">
  <div class="grid-x">
    <div class="small-12 medium-8 large-7 cell">
      <h1>{{featuredArticle.title}}</h1>
    </div>
    <div class="small-12 medium-4 large-5 cell">
      <div class="grid-x">
        <a v-for="(item, index) in featuredItems" v-bind:key="index" :href="item.url" :style="'background-image: url(' + item.image + ')'">{{item.title}}</a>
      </div>
    </div>
  </div>
  <mailing-list-inline></mailing-list-inline>
  <camila-footer></camila-footer>
</div>
</template>
<script>
import axios from 'axios'
import mailingListInline from '~/components/mailingListInline'
import camilaFooter from '~/components/camilaFooter'
import { mapGetters } from 'vuex'

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
  async asyncData ({ query, error }) {
    let [homePageReq, quoteReq] = await Promise.all([
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/home_page/rows/1'),
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/quotes/rows/')
    ])
    return {
      featuredArticle: homePageReq.data.data.featured_article.data,
      featuredItems: homePageReq.data.data.featured_items.data,
      featuredProducts: homePageReq.data.data.home_page_products.data,
      featuredIngredients: homePageReq.data.data.home_page_ingredients.data,
      featuredRecipes: homePageReq.data.data.home_page_recipes.data,
      quote: quoteReq.data.data[0],
      quoteImage: quoteReq.data.data[0].image.data.url
    }
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  data () {
    return {
      quote: '',
      quoteImage: ''
    }
  },
  head () {
    return {
      title: 'camila.life - Plant-Based Living - Vegan - Loving Life - Boutique',
      meta: [
        { name: 'robots', content: 'index, follow' },
        { hid: 'description', name: 'description', content: 'camila.life is focused on plant-based living to discover your own potential to live a happy, healthy life full of wellth!!' },
        { hid: 'og:url', property: 'og:url', content: 'http://www.camila.life' },
        { hid: 'og:image', property: 'og:image', content: 'http://huestudios.com/sites/camila.life/content/storage/uploads/CAMILA-FB.jpg' },
        { hid: 'og:title', property: 'og:title', content: 'camila.life - Plant-Based Vegan Living - Loving a Healthy Life' },
        { hid: 'og:description', property: 'og:description', content: 'camila.life is focused on plant-based living to discover your own potential to live a happy, healthy life full of wellth!!' }
      ]
    }
  },
  components: {
    mailingListInline,
    camilaFooter
  },
  created: function () {
    console.log(this.featuredIngredients[0])
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
