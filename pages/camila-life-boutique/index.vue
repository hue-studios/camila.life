
<template>
 <div id="boutique" class="container-full">
  <div class="grid-x">
    <h1 id="boutique-title" class="small-12 cell pink">BOUTIQUE</h1>
    <div class="small-12 large-8 xlarge-4 cell promo text-center">
      <div class="promo-container">
        <div class="background-cover">
          <h5>WEAR. STRUT. GIVE THE LOVE.</h5>
          <h2>PRE-SALE EVENT</h2>
          <h1 class="green">GET 20% OFF</h1>
          <h5>ON ALL ITEMS</h5>
          <p class="condensed-bold">UNTIL DEC 11TH</p>
          <h3>ENTER CODE <strong>SHOPTHELOVE</strong> AT CHECKOUT</h3>
          <p class="condensed-bold instructions">*ITEMS WILL BE SHIPPED BY DEC 15TH</p>
        </div>
      </div>
    </div>
    <product class="small-6 medium-4 cell" v-for="(product, index) in products" :product="product" :index="index" v-bind:key="product.id"></product>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import product from '~/components/product.vue'

export default {
  scrollToTop: true,
  async asyncData ({ params }) {
    let { data } = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/products/rows/')
    return {
      products: data.data
    }
  },
  fetch ({ store }) {
    store.commit('SET_BACKLINK', '')
  },
  head () {
    return {
      title: 'camila.life boutique - Stylish Plant-Based Living - BeCAUSE Shirts',
      meta: [
        { hid: 'description', name: 'description', content: 'STRUT the LOVE at camila.life boutique...focused on positive, healthy living that motivates.' },
        { hid: 'og:url', property: 'og:url', content: 'http://www.camila.life/camila-life-boutique' },
        { hid: 'og:image', property: 'og:image', content: 'https://huestudios.com/sites/camila.life/content/storage/uploads/CAMILA-FB-BOUTIQUE-2C.jpg' },
        { hid: 'og:title', property: 'og:title', content: 'camila.life online boutique- Plant-Based Vegan Living - Loving a Healthy Life' },
        { hid: 'og:description', property: 'og:description', content: 'camila.life boutique is focused on positive, healthy living that motivates.' }
      ]
    }
  },
  data () {
    return {
    }
  },
  components: {
    product
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
#boutique {
position:relative;
  padding-top: 65px;
  justify-content: center;
  padding-bottom: 60px;
  overflow: hidden;
  @media (min-width: $medium) {
    padding-top: 70px;
  }
  @media (min-width: $large) {
    padding-top: 55px;
  }
  #boutique-title {
    font-size: 76px;
    line-height: 110px;
    position: absolute;
    text-transform: lowercase;
    font-family: $body-font;
    top: -12px;
    left: -9px;
    @media (min-width: $medium) {
      font-size: 104px;
      line-height: 100px;
    }
    @media (min-width: $large) {
    }
  }
  }
.promo {
margin-top: 0px;
margin-bottom: 20px;

@media (min-width: $medium) {
margin-top: 0px;
margin-bottom: 0px;
}
    .promo-container {
      background-position: center;
      background-repeat: no-repeat;
      background-size:cover;
      
      color: $white;
      margin: 5px;
      height: 580px;
      @media (min-width: $medium) {
        height: 500px;
      }
      @media (min-width: $large) {
        height: 500px;
        margin: 20px;
       
      }
      .background-cover { 
      
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-top: 15px;
      padding-bottom: 15px;
      background-color: rgba($black, 1);
      width: 100%;
      height: 100%;
      @media (min-width: $large) {
      }
      h5 {
        font-size: 33px;
        line-height: 30px;
        margin-bottom: 0;
        @media (min-width: $medium) {
        }
        @media (min-width: $large) {
        }
        
      }
      h2 {
        margin-top: 30px;
        margin-bottom: 0;
        font-size: 60px;
        line-height: 50px;
        @media (min-width: $medium) {
        }
        @media (min-width: $large) {
        }
        
      }
      h1 {
        font-family: $condensed-bold-font;
        font-size: 72px;
        line-height: 50px;
        margin-bottom: 30px;
        @media (min-width: $medium) {
        }
        @media (min-width: $large) {
        }
        
      }
      p {
        margin-bottom: 0;
        font-size: 24px;
        line-height: 20px;
        @media (min-width: $medium) {
        }
        @media (min-width: $large) {
        }
        
      }
      h3 {
        margin-bottom: 30px;
        margin-top: 30px;
        font-size:20px;
        line-height: 20px;
        @media (min-width: $medium) {
          font-size:26px;
          line-height: 20px;
        }
        @media (min-width: $large) {
          font-size: 30px;
        }
        strong {
          color: $green;
        }
        
      }
      p.instructions {
        margin-bottom: 0;
        font-size: 16px;
        line-height: 16px;
        @media (min-width: $medium) {
        }
        @media (min-width: $large) {
        }
        
      }
      }
    }
  }
</style>
