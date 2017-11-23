<template>
<div>
<div v-for="option in options">
<h5>{{option.option_title}}</h5>
<select :name="option.option_title">
<option v-for="optionValue in optionValues" :value="optionValue">{{optionValue}}</option>
</select>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['slug'],
  data () {
    return {
      options: [],
      optionValues: [],
      optionValuesSplit: []
    }
  },
  created: function () {
    axios.get('http://camila.life/admin/api/1.1/tables/products/rows/?filters[url][eq]=' + this.slug).then(response => {
      console.log(response.data.data[0].product_options.data[0].option_values.split(','))
      this.options = response.data.data[0].product_options.data
      this.optionValues = response.data.data[0].product_options.data[0].option_values.split(',')
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