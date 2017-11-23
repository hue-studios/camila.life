import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'// https://github.com/dolce/iziToast
import 'izitoast/dist/css/iziToastCamila3.min.css'

iziToast.settings({
  timeout: 3000,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'center',
  backgroundColor: '#fb00da',
  color: 'white',
  titleColor: '#ffffff',
  messageColor: '#ffffff',
  iconColor: '#ffffff',
  layout: 2,
  imageWidth: 80,
  pauseOnHover: false,
  progressBarColor: '#00FF1B',
  overlay: true,
  overlayClose: true,
  overlayColor: 'rgba(0, 0, 0, 0.6)',
  onOpening: function () {
  },
  onClosing: function () {
  }
})

function toast ({title, message, type, timeout, cb, position, image}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return iziToast[type]({title, message, timeout, position, image
  })
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
