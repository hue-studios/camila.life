
<template>
<div class="grid-x shopping-list-container">

  <h1 class="small-12 cell text-center text-lowercase script-font shopping-list__title"><nuxt-link to="/account/">{{given_name}}'s</nuxt-link> SHOPPING LIST</h1>
  <h5 class="white bold-font text-lowercase" v-if="meta.total == 0">uh oh! Your list is empty.  go to the <nuxt-link to="/plant-based-vegan-products"> vegan products page</nuxt-link> to save delicious products to your list </h5>

  <div class="small-12 cell list-items" v-if="meta.total !== 0" v-for="ingredient in ingredients">
    <list-item :id="ingredient.product_id"></list-item>
  </div>

  <div class="small-12 cell text-center shopping-list__user">
    <h5 class="">LOGGEDD IN AS: {{loggedUser.email}}</h5>
    <nuxt-link class="text-uppercase condensed-bold" to="/account/">VIEW PROFILE</nuxt-link>
    <nuxt-link class="text-uppercase condensed-bold" to="/auth/sign-off">Sign Out</nuxt-link>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import axios from 'axios'
import listItem from '~/components/listItem'

export default {
  middleware: 'authenticated',
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  scrollToTop: true,
  created () {
    const vm = this
    console.log(this.meta.total)
    if (!this.given_name) {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/users/rows/?filters[email][eq]=' + this.$store.state.user.email)
        .then((res) => {
          console.log(res)
          if (!vm.given_name) {
            vm.given_name = res.data.data[0].given_name
          }
        })
    }
  },
  fetch ({
    store
  }) {
    return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email)
      .then((res) => {
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '')
      })
  },
  async asyncData ({
    params
  }) {
    let {
      data
    } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + params.slug)
    return {
      meta: data.meta,
      ingredients: data.data
    }
  },
  components: {
    listItem
  },
  head () {},
  data () {
    return {
      meta: '',
      ingredients: [],
      given_name: this.$store.state.user.given_name,
      total: this.$store.state.listItems
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
.shopping-list-container {
    min-height: 600px;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .shopping-list__title {
        color: $white;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 1em;
        @media (min-width: $medium) {
            font-size: 32px;
        }
        a {
            color: $white;
            font-family: $body-font;
            position: relative;
        }

        a::before {
            content: '';
            position: absolute;
            width: 11px;
            height: 1px;
            background: $green;
            bottom: 2px;
            left: 1px;
            @media (min-width: $medium) {
                bottom: 5px;
                left: 1px;
                width: 18px;
            }
        }
    }
    .shopping-list__user {
        color: $white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-bottom: 40px;
        margin-top: 40px;
        a {
            border: thin solid $green;
            color: $green;
            border-radius: 2px;
            padding: 10px 20px 7px;
            width: 200px;
            margin-top: 10px;
            margin-bottom: 10px;

        }
    }
    .list-items {
    }
}
</style>
