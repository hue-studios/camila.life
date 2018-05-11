<template>
  <div class="capsule cart">

      <h1>LIST</h1>
        <ingredientListItem class="small-11 medium-6 large-4 cell" v-for="(item, index) in list" :id="item.product_id" :index="index" v-bind:key="index"></ingredientListItem>


  </div>
</template>

<script>
import ingredientListItem from '~/components/ingredientListItem'

export default {
  data() {
    return {
      success: false
    };
  },
  async asyncData({ app }) {
    let [listReq] = await Promise.all([
      app.$axios.get('list/rows/?filters[email][eq]=' + app.$auth.user.email)
    ])
    return {
      list: listReq.data.data
    }
  },
  components: {
    ingredientListItem
  },
  computed: {
    // list() {
    //   console.log(this.$store.state.list)
    //   return this.$store.state.list;
    // },
  }
};
</script>

<style scoped>
.cart > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 50px;
  background: white;
  border-radius: 3px;
  margin-top: 10px;
  padding-bottom: 80px;
}
.cart.empty h1,
.cart.empty h3 {
  margin-bottom: 15px;
}
.cartitems {
  padding: 30px;
  border-bottom: 1px solid #ccc;
  width: 500px;
}
.carttext {
  width: 250px;
  float: left;
}
.carttext p,
.carttext h4 {
  padding: 5px;
}
.cartimg {
  width: 100px;
  border: 1px solid #ccc;
  float: right;
}
.total {
  margin: 20px 0;
}
</style>
