<template>
<vk-grid class="uk-grid uk-flex uk-flex-center uk-flex-middle uk-text-center" v-vk-height-viewport>

        <div class="uk-width-5-6">
          <h5 v-if="$auth.$state.redirect">
            You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong>
          </h5>
          <button @click="$auth.loginWith('auth0')" class="uk-button uk-button-default">Login </button>

    </div>


</vk-grid>
</template>

<script>
export default {

}
</script>
