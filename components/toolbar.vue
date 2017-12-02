<template>
   <div class="mobile-app-icon-bar hide-for-large">
  <nuxt-link to="/camila-life-boutique">B<span class="show-for-medium">OUTIQUE</span></nuxt-link>
  <nuxt-link to="/plant-based-vegan-products">P<span class="show-for-medium">RODUCTS</span></nuxt-link>
  <nuxt-link to="/vegan-plant-based-recipes">R<span class="show-for-medium">ECIPES</span></nuxt-link>
  <nuxt-link to="/plant-based-living">L<span class="show-for-medium">IVING</span></nuxt-link>
  
  
  
</div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    showLoginScreen () {
      var loginForm = document.getElementById('login-screen')
      loginForm.classList.remove('close')
    }
  }
}
</script>