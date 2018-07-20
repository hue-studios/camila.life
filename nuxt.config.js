const pkg = require('./package')

module.exports = {
  mode: 'universal',
  router: {
    middleware: ['auth']
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
      { src: 'https://www.camila.life/js/uikit.js' },
      { src: 'https://www.camila.life/js/uikit-icons.js' },
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
  }
],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
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
  // axios: {
  //   baseURL: 'https://huestudios.com/sites/camila.life/content/api/1.1/',
  //   credentials: true
  // },
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
