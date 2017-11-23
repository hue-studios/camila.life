import Vue from 'vue'

if (process.browser) {
  const VueSession = require('vue-session')
  Vue.use(VueSession)
}
