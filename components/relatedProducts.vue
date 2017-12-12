<template>
<div class="grid-x grid-padding-x related-products">
  <h1 class="small-12 cell script-font text-lowercase">CUSTOMERS ALSO LOVE</h1>
  <div v-for="product in relatedProducts" class="small-12 medium-4 cell related-product">

    <div class="related-product-container">
      <nuxt-link :to="'/camila-life-boutique/' + product.url" class="related-product-image-container">
      <img class="related-product-image" :src="'https://huestudios.com' + product.images.data[0].url" :alt="product.name" :name="product.name" />
      </nuxt-link>

      <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-if="product.product_options.data.length == 1"
              class="snipcart-add-item"
              v-bind:data-item-id="product.id"
              v-bind:data-item-name="product.name"
              v-bind:data-item-price="product.price"
              v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
              v-bind:data-item-stackable="false"
              v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url"
              v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
              v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')">
                  ADD TO BAG
          </button>
          <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 2"
              class="snipcart-add-item"
              v-bind:data-item-id="product.id"
              v-bind:data-item-name="product.name"
              v-bind:data-item-price="product.price"
              v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
              v-bind:data-item-stackable="false"
              v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url"
              v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
              v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
              v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
              v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')">
                  ADD TO BAG
          </button>
          <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 3"
              class="snipcart-add-item"
              v-bind:data-item-id="product.id"
              v-bind:data-item-name="product.name"
              v-bind:data-item-price="product.price"
              v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
              v-bind:data-item-stackable="false"
              v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url"
               v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
              v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
              v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
              v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"
              v-bind:data-item-custom3-name="product.product_options.data[2].option_title"
              v-bind:data-item-custom3-options="product.product_options.data[2].option_values.replace(/,/g, '|')">
                  ADD TO BAG
          </button>
          <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else
              class="snipcart-add-item"
              v-bind:data-item-id="product.id"
              v-bind:data-item-name="product.name"
              v-bind:data-item-price="product.price"
              v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
              v-bind:data-item-stackable="false"
              v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url">
                  ADD TO BAG
          </button>

       <h4>{{product.name}}</h4>
       <h5>${{product.price}}</h5>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    term: String,
    limit: String,
    id: Number
  },
  data () {
    return {
      relatedProducts: []
    }
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/products/rows/?filters[name][contains]=' + this.term + '&filters[id][neq]=' + this.id + '&limit=' + this.limit + '&order[sort]').then(response => {
      this.relatedProducts = response.data.data
    }).catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
  },
  methods: {
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'center',
      color: 'white',
      message: '',
      timeout: 3000,
      cb: function () {
      },
      onClosing: function () {
        var cartTotalBadge = document.getElementById('cart-total-badge')
        cartTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var cartTotalBadge = document.getElementById('cart-total-badge')
        setTimeout(function () {
          cartTotalBadge.classList.add('pulseEffect')
          console.log('closed')
        }, 1000)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
 
</style>