<template>
  <div id="list" class="">
    <vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-grid uk-child-width-1-1 login-callout" v-if="!$auth.$state.loggedIn" v-vk-height-viewport="{ minHeight: 600 }">
      <div class="uk-width-auto">
        <h2 class="white uk-text-center">CREATE YOUR OWN GROCERY LIST</h2>
        <ul class="checkmark-list script-font">
          <li>create personalized grocery list</li>
          <li>save your favorite vegan products</li>
          <li>save recipes to use in your kitchen</li>
          <li>ask Camila questions</li>
        </ul>
        <button class="uk-button uk-button-default condensed uk-light uk-text-center" @click.prevent="$auth.loginWith('auth0')">LOGIN</button>
      </div>
    </vk-grid>
    <vk-grid class="uk-flex uk-flex-center uk-grid uk-child-width-1-1" v-else v-vk-height-viewport="{ minHeight: 600 }">

      <div class="uk-width-1-1">
        <h1 class="uk-text-center script-font">{{$auth.user.given_name}}'S GROCERY LIST</h1>
      <ul uk-accordion class="ingredient-list">
        <li class="uk-open">

          <a class="uk-accordion-title uk-text-uppercase uk-text-center uk-padding-small">Dairy-Free</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" v-if="item.category == 'dairy-free'" :id="item.product_id" :index="index" v-bind:key="'list-'+item.product_id" group="dairy-free"></ingredientListItem>
          </div>
        </li>

        <li>
          <a class="uk-accordion-title uk-text-uppercase uk-text-center uk-padding-small">Meat-Free</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" v-if="item.category == 'meat-free'" :id="item.product_id" :index="index" v-bind:key="'list-' + item.product_id" group="meat-free"></ingredientListItem>
          </div>
        </li>
        <li>
          <a class="uk-accordion-title uk-text-uppercase uk-text-center uk-padding-small">oils / sauces</a>
          <div class="uk-accordion-content">
            <ingredientListItem class="uk-width-1-1" v-for="(item, index) in list" :id="item.product_id" :index="index" v-if="item.category == 'oils / sauces'" v-bind:key="'list-' + item.product_id" group="oils / sauces"></ingredientListItem>
          </div>
        </li>
      </ul>
    </div>
    </vk-grid>
  </div>
</template>

<script>
import ingredientListItem from '~/components/ingredientListItem'


export default {
  transition (to, from) {
    if (!from) {

    } else if (from && from.name == 'plant-based-vegan-products-slug') {
      return 'slide-right'
      console.log("to: " + to.name + " :: from: " + from.name)
    }
  },
  data() {
    return {
      list: []
    };
  },
  async asyncData({ app }) {
    let [listReq] = await Promise.all([
      app.$axios.get('tables/list/rows/?filters[email][eq]=' + app.$auth.user.email)
    ])
    return {
      list: listReq.data.data
    }

  },
  components: {
    ingredientListItem
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
