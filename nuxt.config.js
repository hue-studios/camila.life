const webpack = require('webpack')
const axios = require('axios')

module.exports = {
  router: {
    middleware: 'check-auth'
  },
  css: [
    { src: '~/assets/css/foundation.css' },
    { src: '~/assets/css/swiper.min.css' },
    { src: '~/assets/css/animate.min.css'},
    { src: '~/assets/snipcart/snipcart.min.css'},
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],
  head: {
    title: 'camila.life - Plant-Based Living - Vegan - Loving Life - Boutique',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'p:domain_verify', content: '4ae831660e1240158bea8fe008ab9a5b' },
      {  hid: 'og:site_name', property: 'og:site_name', content: 'camila.life' },
      { hid: 'og_type', property: 'og:type', content: 'website' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '112054666106286' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
      { src: '//fast.fonts.net/jsapi/3bac6251-f95f-450e-adf8-3f326b8e374a.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192',  href: '/icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/manifest.json' }
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
    { src: '~/plugins/social-sharing', ssr: false },
    '~/plugins/vue-tabs',
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
