<template>
  <nuxt-link :to="ingredient.url">
  <div class="grid-x recipe-ingredient__container">

    <div class="cell shrink recipe-ingredient__image">
       
    </div>
    <h5 class="cell auto recipe-ingredient__description"><span class="recipe-ingredient__measurement">{{measurement}} {{label}}</span> {{ ingredient.name }} <span class="recipe-ingredient__text">{{description}}</span></h5>


  </div>
  </nuxt-link>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    recipe: Number,
    id: Number,
    measurement: String,
    label: String,
    description: String
  },
  data () {
    return {
      ingredient: []
    }
  },
  components: {
  },

  created: function () {
    const vm = this
    if (!vm.recipe) {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[id][eq]=' + vm.id).then(response => {
        vm.ingredient = response.data.data[0]
      }).catch(e => {
        this.errors.push(e)
      })
    } else {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[id][eq]=' + vm.recipe).then(response => {
        vm.ingredient = response.data.data[0]
      }).catch(e => {
        this.errors.push(e)
      })
    }
  },
  methods: {

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

</style>
