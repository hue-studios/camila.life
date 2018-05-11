<template>
<tr v-if="item" class="list-row">
  <td class="uk-text-center uk-width-1-5 uk-width-1-4@s"><input class="uk-checkbox" type="checkbox"></td>

  <td class="uk-width-1-4"><h4>{{item.name}}<span v-if="item.brand">{{item.brand}}</span></h4></td>
  <td class="uk-width-1-4"><h4>{{item.category}}</h4></td>
  <td class="uk-width-1-4"><img v-if="image" :src="'https://huestudios.com/sites/camila.life/content/thumbnail/300/300/crop/' + image" /></td>
</tr>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id', 'group', 'index'],
  data() {
    return {
      item: {},
      image: null,
      sortedBy: {
        name: 'asc'
      }
    }
  },
  components: {},
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[id][eq]=' + this.id).then(response => {
      this.item = response.data.data[0]
      this.image = response.data.data[0].images.data[0].name
    }).catch(e => {
      this.errors.push(e)
    })
  },
  computed: {},
  methods: {
    truncate(str, length, ending) {
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
    }
  }
}
</script>
