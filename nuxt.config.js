const webpack = require('webpack')
const axios = require('axios')

module.exports = {
  router: {
    middleware: 'check-auth'
  },
  css: [
    { src: '~/assets/css/foundation.min.css' },
    { src: '~/assets/css/swiper.min.css' },
    { src: '~/assets/snipcart/snipcart.css'},
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  head: {
    title: 'camila.life - Plant-Based Living - Vegan - Loving Life',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'camila.life is focused on plant-based living to discover your own potential to live a happy, motivating life' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
      { src: '//fast.fonts.net/jsapi/3bac6251-f95f-450e-adf8-3f326b8e374a.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00FF1B', height: '20px' },
  /*
  ** Build configuration
  */
  env: {
    AUTH0_CLIENT_ID: 'ioeeB584PqjM0gcZhyAMOpaPMPrXHGaN',
    AUTH0_CLIENT_DOMAIN: 'camila.auth0.com'
  },
  modules: [
    '@nuxtjs/font-awesome'
  ],
  plugins: [
    { src: '~/plugins/vue-notifications', ssr: false },
    { src: '~/plugins/ga', ssr: false },
    { src: '~/plugins/ksvuescrollmagic', ssr: false },
    '~/plugins/vue-tabs', 
    '~/plugins/swiper'
  ],
  env: {
    AUTH0_CLIENT_ID: 'ioeeB584PqjM0gcZhyAMOpaPMPrXHGaN',
    AUTH0_CLIENT_DOMAIN: 'camila.auth0.com'
  },
  build: {
    vendor: ['vue-notifications','axios','vue-awesome-swiper'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
