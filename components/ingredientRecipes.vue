<template>
<div class="ingredient-recipe">
<nuxt-link :to="'/vegan-plant-based-recipes/' + recipe.url">
<div class="ingredient-recipe-image" :style="'background-image: url(https://huestudios.com' + image + ')'"><h3 class="bold-font text-lowercase">{{makeHeart(recipe.name)}} <i class="fa fa-heart" aria-hidden="true"></i></h3></div>

<h4 class="" v-if="recipe.prep_time"><span>Prep time is about</span> {{recipe.prep_time}} min.</h4>
<h4 class="" v-if="recipe.cook_time"><span>Cook time is about </span>{{recipe.cook_time}} min.</h4>
<h5 class="condensed-bold"><span class="condensed">CUISINE:</span> {{recipe.cuisine}} <span class="condensed">STYLE:</span> {{recipe.style}}</h5>
<p class="script-font" v-if="recipe.caption" v-html="truncate(recipe.caption)"></p>
<button>RECIPE DETAILS</button>
</nuxt-link>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      recipe: {},
      image: null
    }
  },
  components: {
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[id][eq]=' + this.id).then(response => {
      console.log(response.data.data[0])
      this.recipe = response.data.data[0]
      this.image = response.data.data[0].images.data[0].thumbnail_url
    }).catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
  },
  methods: {
    truncate (str, length, ending) {
      if (str !== null) {
        if (length == null) {
          length = 90
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
    },
    makeHeart (str) {
      var lastIndex = str.lastIndexOf(' ')
      str = str.substring(0, lastIndex)
      return str
    }
  }
}
</script>


<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
 .ingredient-recipe {
    a {
      margin: 5px 10px;
      background: $pink;
      border-radius: 4px;
      border: thin solid rgba($black, 0.1);
      box-shadow: 0px 2px 15px rgba($black, 0.2);
      background: $pink-gradient;
      color: $white;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
    }
   .ingredient-recipe-image {
     border-radius: 4px 4px 0 0;
     width: 100%;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     height: 190px;
     background-color: rgba($black, 0.6);
     background-blend-mode: darken;
     display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;
      align-items: center;
   }
   h3 {
     margin-bottom: 0px;
     line-height: 1em;
     margin-top: 0px;
     position: relative;
     font-size: 28px;
     @media (min-width: $medium) {
    }
    @media (min-width: $large) {
    }
     i {
       color: $pink;
     }
   }
   h3::after {
     content: '';
     position: absolute;
     bottom: 0px;
     left: 2px;
     height: 1px;
     background: $green;
     width: 17px;
   }
   h4 {
     display:none;
     font-family: $script-font;
     color: $green;
     text-transform: lowercase;
     font-size: 16px;
     line-height: 1em;
     margin-bottom: 0;
   }
   h5 {
     font-size: 16px;
     margin-top: 20px;
     margin-bottom: 10px;
     line-height: 1em;
     color: $black;
   }
   p {
     padding: 0 5%;
     line-height: 1.4em;
     margin-bottom: 15px;
   }
   button {
     color: $green;
     border: thin solid $green;
     padding: 11px 20px 8px;
     font-family: $condensed-bold-font;
     margin-bottom: 20px;
     border-radius: 2px;
   }
 }
</style>
