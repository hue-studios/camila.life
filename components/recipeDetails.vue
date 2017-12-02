<template>
<div>
		<div class="bg-img" v-bind:style="{ backgroundImage: 'url(https://huestudios.com' +recipe.images.data[0].url+')', width: '150px', height: '150px' }"> <h4>{{recipe.name}}</h4></div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      recipe: {}
    }
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[id][eq]=' + this.id).then(response => {
      this.recipe = response.data.data[0]
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