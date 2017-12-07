<template>
<div id="inline-list" class="grid-x">
<h1>CONNECT WITH <span>CAMILA</span></h1>
  <svg id="love-icon" data-name="Love Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46">
    <title>Love Icon</title>
    <path class="cls-1" d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/>
  </svg>
  <div id="list-box"> 
    <div id="mailing-list">
      
      <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
        <form id="mailing-list-form" v-if="!responseBox">
          <p><strong>sign up</strong> to join my journey.  I will keep you updated on new vegan products, recipes, ideas, and specials at my boutique...I'll be sending nothing but <i class="red fa fa-heart" aria-hidden="true"></i>!!</p>
          <div class="grid-x list-form-container">
            <div class="small-2 small-offset-1 cell label-container">
              <label for="middle-label" class="text-right">name: </label>
            </div>
            <div class="small-7 cell input-container">
              <input type="text" class="required" name="name" id="list-name" required>
            </div>
            <div class="small-12 cell"></div>
            <div class="small-2 small-offset-1 cell label-container">
              <label for="middle-label" class="text-right">email: </label>
            </div>
            <div class="small-7 cell input-container">
              <input type="email" class="required" name="email" id="list-email" required>
            </div>
            <div class="small-12 cell"></div>
            <div class="small-2 small-offset-1 cell label-container">
              <label for="middle-label" class="text-right">zip: </label>
            </div>
            <div class="small-4 cell input-container">
              <input type="text" class="required"name="zip_code"  id="list-zip" maxlength="5" required>
            </div>
          </div>
          <button v-on:click.prevent="submitList()">SIGN UP</button>
        </form>
        <div id="response-box" class="text-center expanded row align-middle align-center" v-else>
          <div class="columns small-12">
            <p class="">way to go <span class="pink">{{name}}</span>!! <br>
              <br>
              you are now subscribed to Camila's mailing list.  be excited because there is sooo much more to come <i class="red fa fa-heart" aria-hidden="true"></i>!!</p>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
              <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
        </div>
      </transition>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'

export default {
  data () {
    return {
      responseBox: false,
      name: '',
      email: '',
      zip_code: '',
      move: false
    }
  },
  mounted () {
  },
  methods: {
    submitList () {
      const vm = this
      $('#mailing-list-form .required').each(function () {
        console.log('test')
        if (!$(this).val()) {
          console.log('test')
          $(this).addClass('alert animated bounce slow')
        } else {
          vm.name = $('#list-name').val()
          vm.email = $('#list-email').val()
          vm.zip_code = $('#list-zip').val()
          vm.move = true
        }
      })
      if (vm.move) {
        axios.post('https://huestudios.com/sites/camila.life/scripts/mailing-list.php?name=' + vm.name + '&email=' + vm.email + '&zip_code=' + vm.zip_code + '&status=1').then(function (response) {
          console.log(response)
          if (response.data) {
            vm.responseBox = true
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">


</style>
