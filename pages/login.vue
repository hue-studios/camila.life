<template>
<div>
  <h2 class="text-center">Logins</h2>
  <div class="uk-grid uk-flex uk-flex-center uk-text-center">
    <div class="uk-width-1-4">
  <h5 v-if="$auth.$state.redirect">
    You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong>
  </h5>
        <div class="uk-card">
          <button @click="$auth.loginWith('auth0')" class="uk-button uk-button-default">Login </button>

    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>
