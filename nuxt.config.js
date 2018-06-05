const pkg = require('./package')
const axios = require('axios')

module.exports = {
  mode: 'universal',
  router: {
    middleware: ['auth', 'pages']
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.4/js/uikit.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.4/js/uikit-icons.min.js' },
      {
        src: '//fast.fonts.net/jsapi/3bac6251-f95f-450e-adf8-3f326b8e374a.js'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#00FF1B',
    height: '12px'
  },

  /*
   ** Global CSS
   */
  css: [{
    src: '~/assets/scss/main.scss',
    lang: 'scss'
  },
  { src: '~/assets/css/swiper.min.css' }
],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/ga',
      ssr: false
    },
    {
      src: '~/plugins/social-sharing',
      ssr: false
    },
    { src: '~/plugins/vue-notifications', ssr: false },
    '~/plugins/vuikit.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/google-analytics'
  ],
  'google-analytics': {
    id: 'UA-106815130-1'
  },
  axios: {
    baseURL: 'https://huestudios.com/sites/camila.life/content/api/1.1/'
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/callback',
      user: '/'
    },
    strategies: {
      auth0: {
        domain: 'camila.auth0.com',
        client_id: 'ioeeB584PqjM0gcZhyAMOpaPMPrXHGaN'
      }
    }
  },

  /*
   ** Build configuration
   */


  generate: {
    // routes: function() {
    //   let ingredients = axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/')
    //     .then((res) => {
    //       return res.data.data.map((item) => {
    //         return '/plant-based-vegan-products/' + item.url
    //       })
    //     })
    //   let recipes = axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/')
    //     .then((res) => {
    //       return res.data.data.map((item) => {
    //         return '/vegan-plant-based-recipes/' + item.url
    //       })
    //     })
    //   let articles = axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/')
    //     .then((res) => {
    //       return res.data.data.map((item) => {
    //         return '/plant-based-living/' + item.url
    //       })
    //     })
    //   return Promise.all([ingredients, recipes, articles]).then(values => {
    //     return values.join().split(',');
    //   })
    // }
  },

  build: {
    vendor: ['vuikit','vue-notifications','axios'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
