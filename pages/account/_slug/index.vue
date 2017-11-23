
<template>
  <div class="container">
    <h1>SHOPPING LIST</h1>
    <h5>{{meta.total}}</h5>
    <div v-for="product in products">
      <ingredient-details :id="product.product_id"></ingredient-details>
    </div>
    <h5>{{loggedUser.email}}</h5>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import ingredientDetails from '~/components/ingredientDetails'

export default {
  middleware: 'authenticated',
  scrollToTop: true,
  created () {
    console.log(this.meta)
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  async asyncData ({ params }) {
    let { data } = await axios.get('http://camila.life/admin/api/1.1/tables/list/rows/?filters[email][eq]=' + params.slug)
    return {
      meta: data.meta,
      products: data.data
    }
  },
  components: {
    ingredientDetails
  },
  head () {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
