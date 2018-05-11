<template>
  <div class="grocery-list-section">
    <h5>{{category}}</h5>
    <div>{{getListItem(items)}}</div>
<div v-for="(item, index) in items" v-bind:key="index" class="grocery-list-item">
  {{item.category}}
</div>
</div>
</template>

<script>
import groceryListItem from '~/components/groceryListItem'

export default {
  props: ['items', 'total', 'category'],
  data: function () {
    return {
    }
  },
  components: {
    groceryListItem
  },
  created: function () {
    this.$axios.get('ingredients/rows/?filters[id][eq]=' + this.id + '&filters[category][eq]=' + this.category).then(response => {
      this.item = response.data.data[0]
      this.image = response.data.data[0].images.data[0].name
      console.log("PETER" + this.item.images.data[0].name)
    }).catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    getListItem: function (id, category) {
      let vm = this
      this.$axios.get('ingredients/rows/?filters[id][eq]=' + id + '&filters[category][eq]=' + category).then(response => {
        return vm.items = response.data.data[0]
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
