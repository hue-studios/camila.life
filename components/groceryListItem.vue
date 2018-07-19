<template>
<div class="grocery-list-item">
  <img :src="'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/'+image"/>
  <h5>{{item.name}}</h5>
  <h5>{{item.category}}</h5>
</div>
</template>

<script>

export default {
  props: ['id', 'category'],
  data: function () {
    return {
      item: {},
      image: null
    }
  },
  created: function () {
    this.$axios.get('ingredients/rows/?filters[id][eq]=' + this.id + '&filters[category][eq]=' + this.category).then(response => {
      this.item = response.data.data[0]
      this.image = response.data.data[0].images.data[0].name
      console.log("PETER" + this.item.images.data[0].name)
    }).catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
