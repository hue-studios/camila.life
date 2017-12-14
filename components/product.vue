<template>
<div class="product-container">
<div class="grid-y align-bottom product-border">
<div class="product-image" :style="{ backgroundImage: 'url(https://huestudios.com' +  product.images.data[0].url +')'}"></div>
<div class="product-callouts">
<h5 class="condensed-bold" v-if="product.featured">FEATURED<i class="fa fa-heart" aria-hidden="true"></i></h5>
<h5 class="condensed-bold" v-if="product.best_seller">BEST SELLER<i class="fa fa-bolt" aria-hidden="true"></i></h5>
<h5 class="condensed-bold" v-if="product.new_item">NEW<i class="fa fa-star" aria-hidden="true"></i></h5>
</div>
<nuxt-link :to="'/camila-life-boutique/' + product.url" class="shrink cell product-info">
  <div class="product-info-tab"></div>
          <h1 class="title">{{product.name}} <span class="pink condensed-bold">${{product.price}}</span></h1>
          <h3 class="sub-title">{{product.sub_title}}</h3>
           <h5 class="product-details-button">DETAILS <div><span></span><span></span></div></h5>

      </nuxt-link>
  <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-if="product.product_options.data.length == 1"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-weight="product.weight"
    v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')">
        ADD TO BAG
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 2"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-weight="product.weight"
    v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url"
    v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
    v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"
    v-bind:data-item-custom2-name="product.product_options.data[1].option_title"
    v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')">
        ADD TO BAG
</button>
<button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 3"
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-weight="product.weight"
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
    class="add-to-cart snipcart-add-item"
    v-bind:data-item-id="product.id"
    v-bind:data-item-name="product.name"
    v-bind:data-item-price="product.price"
    v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
    v-bind:data-item-stackable="false"
    v-bind:data-item-weight="product.weight"
    v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url">
        ADD TO BAG
</button>
</div>
</div>
</div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
    }
  },
  created: function () {
  },
  computed: {
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
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'bottomRight',
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
