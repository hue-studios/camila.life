import Vue from 'vue'

Vue.prototype.$initFbSdk = function () {
  const FB = []
  window.fbAsyncInit = function () {
    FB.init({
      appId: '112054666106286',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.11'
    })
  }
}
