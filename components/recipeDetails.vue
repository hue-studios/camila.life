<template>
<div>
		<div class="bg-img" v-bind:style="{ backgroundImage: 'url(https://huestudios.com' + image + ')', width: '150px', height: '150px' }"> <h4>{{recipe.name}}</h4></div>
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
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[id][eq]=' + this.id).then(response => {
      this.recipe = response.data.data[0]
      this.image = response.data.data[0].images.data[0].url
    }).catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
 
</style>