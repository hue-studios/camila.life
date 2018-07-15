<template>
  <vk-grid class="uk-flex uk-flex-center uk-flex-middle">
  <social-sharing :url="'http://www.camila.life/vegan-plant-based-recipes/' + item.url"
                :title="item.name + ' - ' + item.category + ' Vegan Recipe on camila.life'"
                :description="description"
                :quote="quote"
                :hashtags="tags"
                twitter-user="camila_life_now"
                :media="'https://huestudios.com/sites/camila.life/content/thumbnail/600/600/crop/' + media"
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
</vk-grid>
</template>
<script>
export default {
  props: ['item', 'media'],
  data () {
    return {
      tags: null,
      quote: '',
      description: ''
    }
  },
  created () {
    if(!this.item.tags) {
      this.tags = 'Vegan Recipe, Healthy Lifestyle'
    }
    if(this.item.category = 'Radical') {
      this.description = this.item.name + ' is a RADICAL, warrior-style, vegan recipe that challenges!!'
    } else {
      this.description = this.item.name + ' is an EASY, familiar recipe made with healthy vegan ingredients!!'
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
