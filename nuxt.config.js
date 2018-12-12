import axios from 'axios'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "camila.life",
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
        content: "camila.life is focused on plant-based living, vegan products, and the recipes for you to make the love!!"
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: "msapplication-TileColor",
        content: "#ffffff"
      },
      {
        name: "msapplication-TileImage",
        content: "/icons/ms-icon-144x144.png"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    link: [{
        rel: 'canonical',
        href: 'https://camila.life'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/icons/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/icons/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/icons/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/icons/apple-icon-76x76.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/icons/apple-icon-114x114.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/icons/apple-icon-120x120.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/icons/apple-icon-144x144.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/icons/apple-icon-152x152.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-icon-180x180.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/icons/android-icon-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/icons/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/icons/manifest.json"
      }
    ],
    script: [

      {
        src: '//fast.fonts.net/jsapi/3bac6251-f95f-450e-adf8-3f326b8e374a.js'
      },
      {
        src: '/js/uikit-core.min.js'
      },
      {
        src: '/js/components/parallax.min.js'
      },
      {
        src: '/js/components/slider.min.js'
      },
      {
        src: '/js/components/slider-parallax.min.js'
      },
      {
        src: '/js/components/filter.min.js'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',


  /*
   ** Global CSS
   */
  css: [{
    src: '~/assets/scss/main.scss',
    lang: 'scss'
  }],

  /*
   ** Plugins to load before mounting the App
   */
  izitoast: {
    timeout: 3000,
    position: 'bottomRight',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    backgroundColor: '#00C7FF',
    color: '#243457',
    titleColor: '#243457',
    messageColor: '#243457',
    iconColor: '#243457',
    layout: 2,
    imageWidth: 80,
    pauseOnHover: false,
    progressBarColor: '#243457',
    overlay: true,
    overlayClose: true,
    overlayColor: 'rgba(0,0,0,0.7)',
  },
  plugins: [
    '~/plugins/social.js',
    '~/plugins/vuikit.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-facebook-pixel-module',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-izitoast',
    ['nuxt-validate', {
      lang: 'en'
    }],
    '@nuxtjs/google-analytics'
  ],
  'google-analytics': {
    id: 'UA-106815130-1'
  },
  // axios: {
  //   // baseURL: 'https://huestudios.com/sites/camila.life/content/api/1.1/'
  //   // credentials: true
  // },
  axios: {
    baseURL: 'https://camila.life/content/api/1.1'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/request-token',
            method: 'post',
            propertyName: 'data.token'
          },
          logout: false,
          user: {
            url: 'users/me',
            method: 'GET',
            propertyName: 'data'
          }

        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
      google: {
        client_id: '1038506444078-ql5g58lkhpjm4ip4gkk3m3v2tk70famt.apps.googleusercontent.com',
        scope: ['openid', 'profile', 'email'],
        userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
      },
      facebook: {
        client_id: '112054666106286',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,first_name, last_name,gender,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday']
      }
    },
    redirect: {
      login: '/account/login/',
      logout: '/account/logout/',
      callback: '/account/callback/',
      user: '/account/',
      home: '/account/update/'
    },
    rewriteRedirects: true,
    fullPathRedirect: true
  },

  /*
   ** Build configuration
   */

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '307354086752514',
    disabled: false
  },
  build: {
    vendor: ['vuikit', 'social'],
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
  },
  generate: {
    // routes: function(callback) {
    //   let articles = axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/').then((res) => {
    //     return res.data.data.map((article) => {
    //       return {
    //         route: '/plant-based-living/' + article.url,
    //         payload: article
    //       }
    //     })
    //   })
    //   let ingredients = axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/').then((res) => {
    //     return res.data.data.map((ingredient) => {
    //       return {
    //         route: '/plant-based-vegan-products/' + ingredient.url,
    //         payload: ingredient
    //       }
    //     })
    //   })
    //   let recipes = axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/').then((res) => {
    //     return res.data.data.map((recipe) => {
    //       return {
    //         route: '/vegan-plant-based-recipes/' + recipe.url,
    //         payload: recipe
    //       }
    //     })
    //   })
    //   let route = Promise.all([articles, ingredients, recipes]).then(values => {
    //     return callback(null, route)
    //   })
    // }
    // routes: function(callback) {
    //   axios.all([getUserAccount(), getUserPermissions()])
    //     .then(axios.spread(function(acct, perms) {
    //       // Both requests are now complete
    //     }));
    //   axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/')
    //     .then((res) => {
    //       const routes = res.data.data.map((ingredient) => {
    //         return {
    //           route: '/plant-based-vegan-products/' + ingredient.url,
    //           payload: ingredient
    //         }
    //       })
    //       callback(null, routes)
    //     })
    //     .catch(callback)
    // }
    async routes() {
      const articles = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/articles/rows/');
      const ingredients = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/');
      const recipes = await axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/');
      const article_slugs = articles.data.data.map(article => `/plant-based-living/${article.url}`);
      const ingredient_slugs = ingredients.data.data.map(ingredient => `/plant-based-vegan-products/${ingredient.url}`);
      const recipe_slugs = recipes.data.data.map(recipe => `/vegan-plant-based-recipes/${recipe.url}`);
      return [...article_slugs, ...ingredient_slugs, ...recipe_slugs];
    }
  }
}
