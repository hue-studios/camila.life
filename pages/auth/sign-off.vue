<template>
  <div class="grid-container full">
  <div class="grid-x grid-padding-x align-center-middle text-center">
  <h1 class="small-12 cell condensed-bold text-uppercase">SIGNING <span class="blue">OUT</span>.</h1>
  </div>
  </div>
</template>

<script>
import { unsetToken } from '~/utils/auth'
import { logout } from '~/utils/lock'

export default {
  mounted () {
    unsetToken()
    logout()
  }
}
</script>
<style lang="scss" scoped>
  .grid-x {
    height: 70vh;
    align-items: center;
  }
</style>
