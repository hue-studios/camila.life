
<template>
  <div class="container">
   <div v-for="image in images">
		<div class="bg-image" v-bind:style="{ backgroundImage: 'url(http://camila.life' +image.url+')', width: '50px', height: '50px' }"> </div>
		</div>
    <h1>{{ product.name }}</h1>
    <pre>{{ product.category }} <span>{{product.type}}</span></pre>
    <p>{{product.description}}</p>
	<p>{{product.price}}</p>
<button v-if="product.product_options.data.length == 1"
    class="snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        BUY NOW
</button>
<button v-else-if="product.product_options.data.length == 2"
    class="snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
    v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        BUY NOW
</button>
<button v-else-if="product.product_options.data.length == 3"
    class="snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
     v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
    v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom3-name="product.product_options.data[2].option_title"
    v-bind:data-item-custom3-options="product.product_options.data[2].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        BUY NOW
</button>
<button v-else
    class="snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-description="product.description">
        BUY NOW
</button>
  <p><nuxt-link to="/camila-life-boutique">Back to the products</nuxt-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get('http://camila.life/admin/api/1.1/tables/products/rows/?filters[url][eq]=' + params.slug)
    console.log(data.data[0].product_options.data.length)
    return {
      product: data.data[0],
      images: data.data[0].images.data
    }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '/camila-life-boutique')
  },
  head () {
    return {
      title: this.product.name + ' - camila.life Online Boutique - Plant-Based Living - Vegan - Loving Life'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
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
  font-size: 20px;
}
a {
  color: #41B883;
}
</style>
