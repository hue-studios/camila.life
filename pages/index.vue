<template>
<vk-grid id="new-home" class="uk-flex uk-flex-center uk-flex-middle">
  <div class="uk-width-1-1 uk-text-center">
    <img src="/images/jam.jpg" style="width: 400px; height 400px;">
    <h2 class="body-font uk-text-lowercase">I'm a total loser!</h2>
      <p>I eat meat more than vegatables and dairy way more than soy....so the joke is on you!!</p>
    <h4 class="script-font uk-text-lowercase">Please tell all my folllows that I am a hypocrite.</h4>
    <div id="social-links">
      <a href="https://twitter.com/camila_living" target="_blank">
        <vk-icon icon="twitter"></vk-icon>
      </a>
      <a href="https://www.facebook.com/camila.life.now/" target="_blank">
        <vk-icon icon="facebook"></vk-icon>
      </a>
      <a href="https://www.instagram.com/camila.life.now/" target="_blank">
        <vk-icon icon="instagram"></vk-icon>
      </a>
    </div>
  </div>

</vk-grid>
</template>
<script>
export default {
  auth: false,

}
</script>

<style lang="scss" scoped>
#new-home {
  min-height: 100vh;
  height: 100vh;
}
</style>
