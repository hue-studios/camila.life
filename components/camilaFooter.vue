<template>
<div id="footer" class="grid-x grid-padding-x">
<svg id="love-icon" data-name="Love Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><title>Love Icon</title><path class="cls-1" d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/></svg>
<div class="small-12 medium-4 cell footer-column">
<h4>SITE LINKS</h4>
<nuxt-link to="/">HOME</nuxt-link>
<nuxt-link to="/camila-life-boutique">BOUTIQUE</nuxt-link>
<nuxt-link to="/plant-based-vegan-products">PRODUCTS</nuxt-link>
<nuxt-link to="/vegan-plant-based-recipes">RECIPES</nuxt-link>
<nuxt-link to="/plant-based-living">PLANT-BASED LIVING</nuxt-link>
<nuxt-link to="/about/privacy">PRIVACY POLICY</nuxt-link>
</div>
<div class="small-12 medium-4 cell footer-column">
<h4>SHOPPING BAG LINKS</h4>
<nuxt-link to="#" class="snipcart-checkout">SHOPPING BAG</nuxt-link>
<a href="#" class="snipcart-user-profile">
  <span class="snipcart-user-email">Login</span>
 
</a>
 <a href="#" class="snipcart-user-logout">
  Logout
</a>


</div>
<div class="small-12 medium-4 cell footer-column">
<h4>GET TO KNOW CAMILA</h4>
<a href="https://www.instagram.com/camila.life.now/" target="_blank"><i class="fa fa-fw fa-instagram"></i></a>
<a href="https://www.facebook.com/camila.life.now/" target="_blank"><i class="fa fa-fw fa-facebook"></i></a>
<a href="https://twitter.com/camila_life_now" target="_blank"><i class="fa fa-fw fa-twitter"></i></a>
<a href="https://www.pinterest.com/camilaLifeNow/" target="_blank"><i class="fa fa-fw fa-pinterest"></i></a>
<a href="#" @click.prevent="showListScreen()">MAILING LIST</a>
<a href="mailto:talktome@camila.life">EMAIL CAMILA</a>
</div>
<h5 class="small-11 cell text-center white" id="copyright">© 2017 <span> 222 Water Street Binghamton, NY 13901 </span> 607-722-5156</h5>
<h5 id="web-designer" class="text-center small-11 cell">
		<a href="http://huestudios.com" target="_blank" class="columns shrink">designed by <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.44 48.62" id="hue-logo">
			<title>hue Creative Marketing - Binghamton, NY</title>
			<path class="h" d="M347.41,282.12h6.28v19.35c2-3.5,6.14-5.48,10.77-5.48,3.5,0,8.52,1.25,10.44,5.28.66,1.32,1.12,2.91,1.12,7.73v20.74h-3.56c-5.61,0-2.78-19.62-2.78-19.62,0-3,0-9.38-7.13-9.38a8.57,8.57,0,0,0-7.79,4.43c-1.06,1.85-1.06,5-1.06,7v17.57h-6.28Z" transform="translate(-347.41 -282.12)"/>
			<path class="h" d="M388.17,296.59v21.34c0,3.24.73,7.33,7.07,7.33,3.1,0,6-1.06,7.79-3.7,1.39-2,1.39-4.56,1.39-6.21,0,0-1.87-18.76,2.07-18.76h4.33v27c0,.66.13,4.36.2,6.21h-6.47l-.13-5.68c-1.19,2.31-3.44,6-10.57,6-8.19,0-12-4.69-12-11.23V296.59Z" transform="translate(-347.41 -282.12)"/>
			<path class="h" d="M422,314.29c-.13,6.87,2.71,12,9.51,12,5.93,0,6.3-6.87,9.67-6.87h4.33a11.26,11.26,0,0,1-2.84,6.94c-1.45,1.65-4.76,4.43-11.43,4.43-10.44,0-15.39-6.47-15.39-17,0-6.54,1.32-12,6.54-15.59,3.17-2.25,7.13-2.44,9.05-2.44,14.86,0,14.53,13.15,14.4,18.56Zm17.51-4.36c.07-3.17-.53-9.78-8.19-9.78-4,0-8.92,2.44-9,9.78Z" transform="translate(-347.41 -282.12)"/>
			</svg></a></h5>
</div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
    }
  },
  created: function () {
  },
  computed: {
  },
  methods: {
    showListScreen () {
      var listForm = document.getElementById('list-screen')
      listForm.classList.remove('close')
    }
  }
}
</script>