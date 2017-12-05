<template>
 <div id="list-screen" class="close">

  
   <svg id="love-icon" data-name="Love Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 46"><title>Love Icon</title><path class="cls-1" d="M24.85,10.13A13.07,13.07,0,0,1,36.84,2c7.22,0,12.42,6.18,13.08,13.54a13.51,13.51,0,0,1-.43,5.12A22.58,22.58,0,0,1,42.6,32.17L24.85,48,7.4,32.17A22.7,22.7,0,0,1,.5,20.66a13.6,13.6,0,0,1-.42-5.12C.73,8.18,5.94,2,13.16,2A12.67,12.67,0,0,1,24.85,10.13Z" transform="translate(0 -2)"/></svg>
   <div id="list-box">
  <a id="close-btn" @click.prevent="closeForm"><div id="close-box"><span></span><span></span></div></a>
 <div id="mailing-list">
  <h1>CONNECT WITH CAMILA</h1>
  <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
				<div v-if="responseBox" id="response-box" class="text-center expanded row align-middle align-center">
					<div class="columns small-12">
						<p class="">Alright <span class="pink">{{name}}</span>!! <br><br>You are now subscribed to Camila's mailing list!</p>
						<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
							<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
							<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
						</svg>
					</div>
				</div>
  <form v-else>
  <p>Join my journey to stay updated on new vegan products, recipes, ideas, and specials at my boutique.</p>
   <div class="grid-x list-form-container">
   <div class="small-2 cell label-container">
      <label for="middle-label" class="text-right">name: </label>
    </div>
    <div class="small-8 cell">
      <input type="text" name="name" v-model="name" required>
    </div>
    <div class="small-12 cell"></div>
    <div class="small-2 cell label-container">
      <label for="middle-label" class="text-right">email: </label>
    </div>
    <div class="small-8 cell">
      <input type="email" name="email" v-model="email" placeholder="email@domain.com" required>
    </div>
    <div class="small-12 cell"></div>
     <div class="small-2 cell label-container">
      <label for="middle-label" class="text-right">zip code: </label>
    </div>
    <div class="small-4 cell">
      <input type="text" name="zip_code"  v-model="zip_code" placeholder="12345" maxlength="5" required>
    </div>
  </div>
  <button type="submit" @click.prevent="submitList()">SUBMIT</button>
  </form>
  </transition>

  
 </div>
 </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'mailingList',
  data () {
    return {
      responseBox: false,
      name: '',
      email: '',
      zip_code: ''
    }
  },
  mounted () {
  },
  methods: {
    closeForm () {
      var listForm = document.getElementById('list-screen')
      listForm.classList.add('close')
      this.name = ''
      this.email = ''
      this.zip_code = ''
      this.responseBox = false
    },
    submitList () {
      axios.post('https://huestudios.com/sites/camila.life/scripts/mailing-list.php?name=' + this.name + '&email=' + this.email + '&zip_code=' + this.zip_code).then(function (response) {
        console.log(response)
      })
      this.responseBox = true
    }
  }
}
</script>
<style lang="scss">


</style>
