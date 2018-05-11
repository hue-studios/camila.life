<template>
<div>
  <h2 class="text-center">Logout</h2>
  <hr>

  <div class="uk-section uk-flex uk-flex-center">
    <div class="uk-width-1-3 uk-text-center">
      <button class="uk-button uk-button-default" @click.prevent="$auth.login()">Login</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted () {
    this.$auth.logout()
    return this.$auth.reset()
    window.localStorage.removeItem('auth.strategy')
  }
}
</script>
