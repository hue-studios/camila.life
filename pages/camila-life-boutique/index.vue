
<template>
 <div class="container-full">
 <div class="grid-x">
 
 <div class="product-container small-6 medium-8 cell" v-for="(product, index) in products" :product="product" v-if="index == 1" :index="index" v-bind:key="product.id">
<div class="grid-y align-bottom product-border">
<div class="product-image" :style="{ backgroundImage: 'url(http://camila.life' +  product.images.data[0].url +')'}"></div>
<div class="product-callouts">
<h5 class="condensed-bold" v-if="product.featured">FEATURED<i class="fa fa-heart" aria-hidden="true"></i></h5>
<h5 class="condensed-bold" v-if="product.best_seller">BEST SELLER<i class="fa fa-bolt" aria-hidden="true"></i></h5>
<h5 class="condensed-bold" v-if="product.new_item">NEW<i class="fa fa-star" aria-hidden="true"></i></h5>
</div>
<nuxt-link :to="'/camila-life-boutique/' + product.url" class="shrink cell product-info">
          <h1 class="title" data-swiper-parallax="200">{{product.name}} <span class="pink condensed-bold">${{product.price}}</span></h1>
          
          <p class="caption" data-swiper-parallax="-300">{{truncate(product.description)}}</p>
           <h5 class="product-details-button">DETAILS <div><span></span><span></span></div></h5>
        
      </nuxt-link>    
  <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-if="product.product_options.data.length == 1"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 2"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
    v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 3"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
     v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
    v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom3-name="product.product_options.data[2].option_title"
    v-bind:data-item-custom3-options="product.product_options.data[2].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-else
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
</div>
</div>

 
 
   
<div class="product-container small-6 medium-4 cell" v-for="(product, index) in products" :product="product" v-if="index !== 1" :index="index" v-bind:key="product.id">
<div class="grid-y align-bottom product-border">
<div class="product-image" :style="{ backgroundImage: 'url(http://camila.life' +  product.images.data[0].url +')'}"></div>
<div class="product-callouts">
<h5 class="condensed-bold" v-if="product.featured">FEATURED<i class="fa fa-heart" aria-hidden="true"></i></h5>
<h5 class="condensed-bold" v-if="product.best_seller">BEST SELLER<i class="fa fa-bolt" aria-hidden="true"></i></h5>
<h5 class="condensed-bold" v-if="product.new_item">NEW<i class="fa fa-star" aria-hidden="true"></i></h5>
</div>
<nuxt-link :to="'/camila-life-boutique/' + product.url" class="shrink cell product-info">
          <h1 class="title" data-swiper-parallax="200">{{product.name}} <span class="pink condensed-bold">${{product.price}}</span></h1>
          
          <p class="caption" data-swiper-parallax="-300">{{truncate(product.description)}}</p>
           <h5 class="product-details-button">DETAILS <div><span></span><span></span></div></h5>
        
      </nuxt-link>    
  <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-if="product.product_options.data.length == 1"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 2"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
    v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 3"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
     v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
    v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom3-name="product.product_options.data[2].option_title"
    v-bind:data-item-custom3-options="product.product_options.data[2].option_values.replace(/,/g, '|')"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping cart</span>`, image: 'http://camila.life/' + product.images.data[0].url})" v-else
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'http://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-image="'http://camila.life/'+ product.images.data[0].url"
    v-bind:data-item-description="product.description">
        ADD TO CART
</button>
</div>
</div>
</div>

 </div>
</div>
	
</template>
<script>
import axios from 'axios'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    let { data } = await axios.get('http://camila.life/admin/api/1.1/tables/products/rows/')
    return {
      products: data.data
    }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '')
  },
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@nuxt_js' },
      { name: 'twitter:title', content: 'Nuxt.js Twitter Card' },
      { name: 'twitter:description', content: 'Nuxt.js lets you handle custom headers for your app with vue-meta' },
      { name: 'twitter:image', content: 'https://avatars0.githubusercontent.com/u/23360933?v=3' },
      { name: 'twitter:image:alt', content: 'Nuxt.js logo' }
    ]
  },
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 70
        }
        if (ending == null) {
          ending = '...'
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending
        } else {
          return str
        }
      } else {
        return str
      }
    }
  },
  notifications: {
    showLoginError: {
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'error'
    },
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
@import './assets/scss/_vars.scss';
.featured {
  height: 100vh;
}
.sidebar {
  height: 100vh;
}
</style>
