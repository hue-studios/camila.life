<template>
  <social-sharing :url="'http://camila.life/plant-based-living/' + article.url"
                :title="article.title + ' - camila.life'"
                :description="this.truncate(article.description)"
                :quote="article.quote"
                :hashtags="article.tags"
                twitter-user="camila_life_now"
                :media="'http://huestudios.com' + media"
                inline-template>

      <div id="sharing-links">

          <network network="facebook"> <span uk-icon="facebook"></span></network>

           <network network="googleplus"> <span uk-icon="google-plus"></span></network>

          <network network="pinterest">
          <span uk-icon="pinterest"></span></network>

          <network network="twitter"> <span uk-icon="twitter"></span> </network>

        <network network="whatsapp" class="uk-hidden@m">
          <span uk-icon="whatsapp"></span>
        </network>

          <network network="email"> <span uk-icon="mail"></span> </network>

    </div>
  </social-sharing>
</template>
<script>
export default {
  props: ['article', 'media'],
  data () {
    return {
    }
  },
  methods: {
    truncate(str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 160
        }
        if (ending == null) {
          ending = '...'
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending
        } else {
          return str
        }
      } else {
        return str
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
