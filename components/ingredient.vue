<template>
<div class="grid-x">
   <div class="small-4 cell ingredient-image">
		<img v-bind:src="'http://camila.life' + ingredient.images.data[0].url" :alt="ingredient.name"/> 
    </div>
    <div class="small-8 cell ingredient-details">
    <h2>{{ ingredient.name }}</h2>
		<p>{{truncate(ingredient.description)}}</p>
    <nuxt-link :to="'/plant-based-vegan-products/' + ingredient.url">DETAILS</nuxt-link>
    
    <ingredient-buttons :id="ingredient.id" :product="ingredient"></ingredient-buttons>
    </div>
	</div>	
</template>

<script>
import ingredientButtons from '~/components/ingredientButtons.vue'

export default {
  props: ['ingredient'],
  data () {
    return {
    }
  },
  components: {
    ingredientButtons
  },
  methods: {
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 120
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
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'center',
      color: 'white',
      message: '',
      timeout: 3000,
      cb: function () {
      },
      onClosing: function () {
        var cartTotalBadge = document.getElementById('cart-total-badge')
        cartTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var cartTotalBadge = document.getElementById('cart-total-badge')
        setTimeout(function () {
          cartTotalBadge.classList.add('pulseEffect')
          console.log('closed')
        }, 1000)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import './assets/scss/_vars.scss';

.ingredient-image {
display: flex;
justify-content: center;
align-items:center;
margin-top: 20px;
marign-bottom: 20px;
img {
  width: 60%;
  height: auto;
  border-radius: 50%;
  border: thin solid $pink;
  padding: 5%;
}
svg {
  width: 40%;
  height: auto;
  border-radius: 50%;
  padding: 10%;
.cls-1{fill:#f0c419;}.cls-2{fill:#ede21b;}
}

}

 .ingredient-container {
      @media (min-width: $medium) {
        font-size: 16px;
        line-height: 16px;
        width: 100px;
      }
      @media (min-width: $large) {
        transition: all .3s $curve;
        font-size: 20px;
        line-height: 20px;
        width: 110px;
        transform: translateX(120px);
      }
    }

 
</style>