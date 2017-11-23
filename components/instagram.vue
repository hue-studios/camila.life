<template>
  <VueInstagram :token="accessToken" :username="usernameName" :count="5">
    <template slot="feeds" slot-scope="props">
      <li class="fancy-list"> {{ props.feed.link }} </li>
    </template>
    <template slot="error" slot-scope="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </VueInstagram>
</template>

<script>
export default {
  data () {
    return {
      accessToken: '5545214567.3efc90b.ac0b5eebc2f6481a9ad924b66c006024',
      usernameName: 'camila.life.now'
    }
  },
  mounted () {
  },
  components: {
  }
}
</script>
<style>
</style>


<style lang="scss" scoped>
</style>