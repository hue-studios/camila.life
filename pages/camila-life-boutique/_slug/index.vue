
<template>
  <div class="grid-x product-details">
    <h1 class="small-12 cell hide-for-large text-center mobile-title">{{ product.name }}</h1>
    <p class="small-12 cell hide-for-large text-center pink bold mobile-subtitle">{{product.sub_title}}</p>
    <div class="small-12 large-6 xlarge-7 cell product-swiper-container">
    <div class="product-callouts">
      <h5 class="condensed-bold" v-if="product.featured">FEATURED<i class="fa fa-heart" aria-hidden="true"></i></h5>
      <h5 class="condensed-bold" v-if="product.best_seller">BEST SELLER<i class="fa fa-bolt" aria-hidden="true"></i></h5>
      <h5 class="condensed-bold" v-if="product.new_item">NEW<i class="fa fa-star" aria-hidden="true"></i></h5>
    </div>
      <div v-swiper:productSwiper="swiperOption" class="product-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="image in images">
            <div class="image-container">
              <img :src="'https://huestudios.com' +image.url" :alt="product.name" :name="product.name" />
            </div>
          </div>
        </div>
        <ul class="swiper-pagination"></ul>
      </div>
    </div>
    <div class="small-11 large-6 xlarge-5 cell product-info">
      <h1 class="show-for-large">{{ product.name }}</h1>
      <p class="show-for-large subtitle">{{product.sub_title}}</p>
      <h5 class="breadcrumbs">BOUTIQUE <span class="pink"><i class="fa fa-angle-right" aria-hidden="true"></i></span> {{ product.category }} <span><span class="pink"><i class="fa fa-angle-right" aria-hidden="true"></i></span> {{product.type}}</span></h5>
   
      <p class="small-12 cell product-price"><span>PRICE</span> ${{product.price}}</p>
      <div class="grid-x bag-button-container">
      <div class="small-12 large-shrink">
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
     </div>
     <p class="small-12 large-shrink cell instructions"><i class="fa fa-info-circle" aria-hidden="true"></i> select size after you add to shopping bag.</p>
     </div>
         <vue-tabs>
        <v-tab title="DESCRIPTION">
          <div class="product-description" v-html="product.description"></div>
        </v-tab>

        <v-tab title="FIT DETAILS">
          <div class="product-size-description" v-html="product.size_description"></div>
        </v-tab>
      </vue-tabs>
    </div>
    <div class="small-12 cell product-footer">
      <related-products term="citrus" limit="3" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import relatedProducts from '~/components/relatedProducts.vue'

export default {
  transition: {
    name: 'left'
  },
  async asyncData ({ params }) {
    // We can use async/await ES6 feature
    let { data } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/products/rows/?filters[url][eq]=' + params.slug)
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
      title: this.product.name + ' at camila.life boutique - Stylish Plant-Based Living',
      meta: [
        { hid: 'description', name: 'description', content: this.product.sub_title },
        { hid: 'og:url', property: 'og:url', content: 'https://www.camila.life/camila-life-boutique/' + this.product.url },
        { hid: 'og:image', property: 'og:image', content: 'https://huestudios.com' + this.product.images.data[0].url },
        { hid: 'og:title', property: 'og:title', content: this.product.name + ' at camila.life boutique - Stylish Plant-Based Living' },
        { hid: 'og:description', property: 'og:description', content: this.product.sub_title }
      ]
    }
  },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        parallax: true,
        speed: 600,
        pagination: '.swiper-pagination',
        clickable: true,
        paginationElement: 'li',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      }
    }
  },
  created () {
  },
  components: {
    relatedProducts
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
@import './assets/scss/_vars.scss';
.product-details {
  overflow: hidden;
  h3 {
        font-size: 18px !important;
      }
  padding-top: 20px;
  justify-content: center;
  @media (min-width: $large) {
      padding-top: 0px;
    }
  #background-tag {
    display: none;
  }
  h1.mobile-title {
    padding-top: 5px;
    padding-bottom: 0px;
    margin-bottom: 0;
    line-height: 0.9em;
    width: 96%;
    @media (min-width: $medium) {
      font-size: 36px;
    }
  }
  .mobile-subtitle {
    padding-top: 0px;
    padding-bottom: 20px;
    margin-bottom: 0;
    line-height: 1em;
    text-transform: lowercase;
    width: 96%;
    @media (min-width: $medium) {
    }
  }
  .product-swiper-container {
    position: relative;
  .product-callouts {
    position: absolute;
    top: 3px;
    left: 0px;
    z-index: 5;

    h5 {
      opacity: 1;
      font-size: 26px;
      line-height: 16px;
      margin-bottom: 0;
      color: $black;
      @media (min-width: $medium) {
        font-size: 36px;
        line-height: 26px;
      }
      @media (min-width: $large) {
        font-size: 26px;
        line-height: 20px;
      }
      i {
         margin-left: 5px;
         font-size: 0.8em;
         vertical-align: initial;
         color: $pink;
         @media (min-width: $large) {
        }
      }
    }
  }
    .product-swiper {
        border-top: thin solid rgba($pink, 0.2);
        border-bottom: thin solid rgba($pink, 0.2);
        @media (min-width: $large) {
            border-top: none;
        border-bottom: none;
          }
        
      .swiper-slide {

        .image-container {
          
          margin: 0px;
          height: 300px;
          text-align: center;
          transition: all 0.3s linear;
          display: flex;
          justify-content: flex-end;
          align-content: flex-end;
          align-items: center;
          flex-direction: column;
          @media (min-width: $medium) {
            height: 380px;
          }
          @media (min-width: $large) {
            height: 640px;
            opacity: 0.4;
          }
          img {
            height: 100%;
            width: auto;
            display: inline-flex;
          }
        }
      }
      .swiper-slide.swiper-slide-active {
        .image-container {
          opacity: 1;
        }
      
      }
    }
  }
  .product-info {
    z-index: 5;
    display: flex;
    align-content: center;
    flex-direction:column;
     @media (min-width: $large) {
        margin-top: 40px;
        margin-bottom: 0px;
      }
      .breadcrumbs {
        display: none;
        font-size: 11px;
      }
      .subtitle {
      color: $pink;
      font-family: $bold-font;
      margin-bottom: 0;
      text-transform: lowercase;
      }
      .product-price {
      text-align: center;
      font-family: $condensed-bold-font;
      font-size: 26px;
      margin-bottom: 10px;
      margin-top: 15px;
      @media (min-width: $medium) {
        font-size: 32px;
      }
      @media (min-width: $large) {
        text-align: left;
        font-size: 28px;
      }
      span {
        display: none;
      }
    }
      .bag-button-container {
      align-content: center;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      text-align: center;
      @media (min-width: $large) {
        text-align: left;
        justify-content: flex-start;
        flex-direction:row;
      }
        .instructions {
          font-size: 11px;
          font-family: $bold-font;
          margin-top: 10px;
            i {
              color: $pink;
            }
           @media (min-width: $large) {
             margin-left: 10px;
             margin-top: 0px;
             margin-bottom: 0;
           }
          }

        button {
          border: thin solid $pink;
          text-align: center;
          font-family: $condensed-bold-font;
          line-height: 20px;
          padding: 12px 25px 8px 25px;
          border-radius: 2px;
          margin: 0 auto;
          display: inline-block;
          font-size: 22px;
          @media (min-width: $medium) {
            font-size: 32px;
            line-height: 30px;
          }
          @media (min-width: $large) {
            font-size: 22px;
            line-height: 20px;
            margin: 0;
            width: 190px;
          }
        }
     }
    .vue-tabs {
     margin-top: 30px;
     margin-bottom: 10px;
    @media (min-width: $medium) {
      width: 80%;
      margin: 30px 10% 20px;
    }
    @media (min-width: $large) {
      width: 97%;
      margin: 30px 3% 10px 0;
      }
     
    }
    h1 {
    line-height: 1em;
    font-size: 32px;
    }
    .product-description, .product-size-description {
      line-height: 1em;
      
    }
    .product-size-description {
      font-family: $condensed-bold-font;
      text-transform: uppercase;
      font-size: 1em;
      line-height: 1em !important;
      p {
        line-height: 1em;
      }
    }
    
  }
  .product-footer {
    background: $pink;
    align-content: center;
    justify-content: center;
    @media (min-width: $medium) {
    }
  }
}
ul.nav {
background: $pink;
  li.tab {
    
    a.tabs__link {
      font-family: $condensed-bold-font;
    }
    a.active_tab.tabs__link {
    
    }
  }
}

</style>
