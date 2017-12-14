<template>
  <nuxt-link :to="'/plant-based-vegan-products/' + ingredient.url">
  <div class="grid-x recipe-ingredient__container">

    <div class="cell shrink recipe-ingredient__image">
       <img :src="'https://huestudios.com' + ingredient.images.data[0].thumbnail_url" :alt="ingredient.name" :name="ingredient.name"/>
    </div>
    <h5 class="cell auto recipe-ingredient__description"><span class="recipe-ingredient__measurement">{{measurement}} {{label}}</span> {{ ingredient.name }} </h5>


  </div>
  </nuxt-link>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  props: {
    id: String,
    measurement: String,
    label: String
  },
  data () {
    return {
      ingredient: []
    }
  },
  components: {
  },
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ]),
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[id][eq]=' + this.id).then(response => {
      this.ingredient = response.data.data[0]
    }).catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    showLoginScreen () {
      var loginForm = document.getElementById('login-screen')
      loginForm.classList.remove('close')
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'center',
      color: 'black',
      message: '',
      timeout: 3000,
      cb: function () {
      },
      onClosing: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        setTimeout(function () {
          listTotalBadge.classList.add('pulseEffect')
          console.log('closed')
        }, 1000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
a {

}
.recipe-ingredient__container {
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: $white;
    .recipe-ingredient__image {
      width: 50px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: thin solid $green;
      }
    }

    .recipe-ingredient__description {
      margin-bottom: 0px;
      margin-left: 5px;
      color: $green;
      .recipe-ingredient__measurement {
        color: $white;
      }
    }
}
</style>
