<template>
  <div id="nuxt-progress" :style="{'opacity': show ? 1 : 0 }">
  <div id="color-bar" :style="{
    'width': percent+'%',
    'height': height,
    'background-color': canSuccess? color : failedColor,
    'opacity': show ? 1 : 0
  }"></div>
  <p id="percent">{{get(percent)}}%</p>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'nuxt-loading',
  data () {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '<%= loading.height %>',
      color: '<%= loading.color %>',
      failedColor: '<%= loading.failedColor %>',
    }
  },
  methods: {
    start () {
      this.show = true
      this.canSuccess = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if (this.percent > 95) {
          this.finish()
        }
      }, 100)
      return this
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish () {
      this.percent = 100
      this.hide()
      return this
    },
    pause () {
      clearInterval(this._timer)
      return this
    },
    hide () {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.show = false
        Vue.nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
#nuxt-progress {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;

  z-index: 900;
  width: 100%;
  flex-direction: row;
  transition: all 0.4s;
  #color-bar {


  // position: fixed;
  // top: 0px;
  // left: 0px;
  // right: 0px;
  height: 12px;
  width: 0%;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  background: rgba($pink, 1);
  z-index: 999999;
  position: relative;
  }
  #percent {
    font-family: $condensed-bold-font;
    margin-top: 3px;
    margin-bottom: 0px;
    font-size: 12px;
    line-height: 10px;
    color: $pink;
    margin-left: 5px;
  }
}
</style>
