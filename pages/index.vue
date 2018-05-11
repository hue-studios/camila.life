<template>
  <div>
    <div class="uk-grid uk-flex uk-flex-center uk-text-center">
      <div class="uk-width-1-4">
  <h1>User status:<span class="uk-badge">{{ $auth.$state.loggedIn ? 'Logged In' : 'Guest' }}</span></h1>
      <div v-if="$auth.$state.loggedIn">
      <h1>{{$auth.user.name}}<br>{{$auth.user.email}}<img :src='$auth.user.picture' style="width: 100px; height: 100px; border-radius: 50%;"/></h1>
      <nuxt-link class="uk-button uk-button-default" to="/logout">LOGOUT</nuxt-link>
  </div>
  <button class="uk-button uk-button-default" @click.prevent="$auth.loginWith('auth0')" v-else>LOGIN</button>
  </div>
</div>

  <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center" uk-grid-parallax="translate:200">

      <div v-for="(product, index) in products" :key="index">
          <div class="uk-card uk-card-default uk-card-body">{{product.name}}</div>
      </div>
  </div>
</div>
</template>
<script>
export default {
  auth: false,
  scrollToTop: true,
  async asyncData({ app }) {
    let [productsReq] = await Promise.all([
      app.$axios.get('products/rows/'),
    ])
    return {
      products: productsReq.data.data,
    }
  },
  data() {
    return {
      products: []
    }
  },
  created () {

  },
  computed: {

  },
  methods: {
  }
}
</script>

<style>

</style>
