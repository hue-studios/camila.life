<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banners: [
        'http://huestudios.com/images/projects/13/33/medium/1.png',
        'http://huestudios.com/images/projects/13/33/medium/2%20(1).png',
        'http://huestudios.com/images/projects/13/33/medium/1.png',
        'http://huestudios.com/images/projects/13/33/medium/2.png',
        'http://huestudios.com/images/projects/13/33/medium/2%20(1).png'
      ],
      swiperOption: {
        autoplay: 5000,
        initialSlide: 1,
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        paginationElement: 'li',
        onSlideChangeEnd: swiper => {
          console.log('onSlideChangeEnd', swiper.realIndex)
        },
        onTap: swiper => {
          console.log('onTap', swiper.realIndex)
        }
      }
    }
  },
  mounted () {
    console.log('app init', this)
    console.log(
      'This is current swiper instance object', this.mySwiper,
      'I will slideTo banners 3')
    this.mySwiper.slideTo(3)
  }
}
</script>


<style lang="scss" scoped>
  .my-swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>