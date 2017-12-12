
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
          <div class="image-container"> <img :src="'https://huestudios.com' +image.url" :alt="product.name" :name="product.name" /> </div>
        </div>
      </div>
      <ul class="swiper-pagination">
      </ul>
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
          v-bind:data-item-weight="product.weight"
          v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url"
          v-bind:data-item-custom1-name="product.product_options.data[0].option_title"
          v-bind:data-item-custom1-options="product.product_options.data[0].option_values.replace(/,/g, '|')"> ADD TO BAG </button>
        <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 2"
          class="snipcart-add-item"
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
          v-bind:data-item-custom2-options="product.product_options.data[1].option_values.replace(/,/g, '|')"> ADD TO BAG </button>
        <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else-if="product.product_options.data.length == 3"
          class="snipcart-add-item"
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
          v-bind:data-item-custom3-options="product.product_options.data[2].option_values.replace(/,/g, '|')"> ADD TO BAG </button>
        <button @click="showSuccessMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>added <span class='condensed-bold'>` + product.name + `</span> to shopping bag</span>`, image: 'https://huestudios.com' + product.images.data[0].url})" v-else
          class="snipcart-add-item"
          v-bind:data-item-id="product.id"
          v-bind:data-item-name="product.name"
          v-bind:data-item-price="product.price"
          v-bind:data-item-url="'https://camila.life/camila-life-boutique/'+product.url"
          v-bind:data-item-stackable="false"
          v-bind:data-item-weight="product.weight"
          v-bind:data-item-image="'https://huestudios.com'+ product.images.data[0].url"> ADD TO BAG </button>
      </div>
      <p class="small-12 large-shrink cell instructions"><i class="fa fa-info-circle" aria-hidden="true"></i> select size after you add to shopping bag.</p>
    </div>
    <div id="sharing-links" class="small-12 cell">
      <h5>SHARE</h5>
      <social-sharing :url="'http://camila.life/camila-life-boutique/' + product.url"
                      :title="this.product.name + ' at camila.life boutique - Stylish Plant-Based Living'"
                      :description="this.product.sub_title"
                      :quote="this.product.sub_title"
                      hashtags="camilafeeling,camila,plantlife,veganlove,plantpower,positivity,energy,veganstyle,veganfood"
                      twitter-user="camila_life_now"
                      :media="'http://huestudios.com' + this.product.images.data[0].url"
                      inline-template>
        <div>
          <ul>
            <li>
              <network network="facebook"> <i class="fa fa-fw fa-facebook"></i> </network>
            </li>
            <li>
              <network network="googleplus"> <i class="fa fa-fw fa-google-plus"></i> </network>
            </li>
            <li>
              <network network="pinterest"> <i class="fa fa-fw fa-pinterest"></i> </network>
            </li>
            <li>
              <network network="twitter"> <i class="fa fa-fw fa-twitter"></i> </network>
            </li>
            <li>
              <network network="email"> <i class="fa fa-envelope"></i> </network>
            </li>
          </ul>
        </div>
      </social-sharing>
    </div>
    <vue-tabs>
      <v-tab title="DESCRIPTION">
        <div class="product-description" v-html="product.description"></div>
      </v-tab>
      <v-tab title="SIZE DETAILS">
        <div class="product-size-description" v-html="product.size_description"></div>
      </v-tab>
    </vue-tabs>
  </div>
  <div class="small-12 cell product-footer">
    <related-products :term="product.related_term" limit="3" :id="product.id"></related-products>
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
    return {
      product: data.data[0],
      images: data.data[0].images.data
    }
  },
  fetch ({ store }) {
    if (store.state.user) {
      return axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + store.state.user.email).then((res) => {
        console.log(res)
        store.commit('SET_LISTITEMS', res.data.meta.total)
        store.commit('SET_BACKLINK', '/camila-life-boutique')
      })
    }
  },
  head () {
    return {
      title: this.product.name + ' at camila.life boutique - Stylish Plant-Based Living',
      meta: [
        { hid: 'description', name: 'description', content: this.product.sub_title },
        { hid: 'og:url', property: 'og:url', content: 'http://www.camila.life/camila-life-boutique/' + this.product.url },
        { hid: 'og:image', property: 'og:image', content: 'http://huestudios.com' + this.product.images.data[0].url },
        { hid: 'og:title', property: 'og:title', content: this.product.name + ' at camila.life boutique - Stylish Plant-Based Living' },
        { hid: 'og:description', property: 'og:description', content: this.product.sub_title },
        { hid: 'twitter:summary_large_image', name: 'twitter:summary_large_image', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@camila_life_now' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.product.name },
        { hid: 'twitter:description', name: 'twitter:description', content: this.product.sub_title },
        { hid: 'twitter:image', name: 'twitter:image', content: 'http://huestudios.com' + this.product.images.data[0].url },
        { hid: 'twitter:image:alt', content: this.product.name }
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
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';

</style>
