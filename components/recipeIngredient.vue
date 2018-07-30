<template>

<vk-grid class="uk-flex uk-flex-center uk-flex-middle uk-position-relative recipe-ingredient">
<listButtons :id="id" :category="item.category" :name="item.name" type="ingredient" :url="item.url" :image="this.image" :brand="item.brand" v-if="id && $auth.$state.loggedIn && item.brand" />
  <div class="uk-width-auto recipe-ingredient-image" :style="'background-image: url(https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + this.image + ')'"></div>
  <div class="uk-width-expand recipe-ingredient-info">
    <h5 class="name">{{item.name}}<span v-if="item.brand" class="brand"><span class="label">BRAND: </span>{{item.brand}}</span></h5>
  <h5 class="body-font uk-text-lowercase measurement"><span v-if="measurement">{{measurement}} </span> <span  v-if="label"> {{label}} </span>  <span  v-if="description"> {{description}} </span> </h5>
  <nuxt-link :to="url" v-if="url && (item.brand || recipe)" class="recipe-ingredient-link"><vk-icon class="uk-position-absolute details-link-icon" icon="chevron-right"></vk-icon></nuxt-link>
</div>


</vk-grid>

</template>

<script>
import axios from 'axios'
import listButtons from '~/components/listButtons.vue'

export default {
  props: ['id', 'recipe', 'measurement', 'label', 'description'],
  data() {
    return {
      item: {},
      image: 'camila-sun.jpg',
      url: null
      // name: ''
    }
  },
  components: {
    listButtons
  },
  created: function () {
    var config = {
      headers: {
        'Authorization': "Bearer-$9LSpa60vezZKbi8oiLs1ngYu8T6hQ1WF"
      }
    };

    if (this.recipe) {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/recipes/rows/?filters[id][eq]=' + this.recipe, config).then(response => {
        this.item = response.data.data[0]
        if(this.item.images.data.length > 0) {
        this.image = response.data.data[0].images.data[0].name
      }
      this.url = '/vegan-plant-based-recipes/' + response.data.data[0].url;
        console.log("NEW REQ :: " + this.url)
      }).catch(e => {
        this.errors.push(e)
      })
    } else if (this.id) {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[id][eq]=' + this.id).then(response => {
        this.item = response.data.data[0]
        if(this.item.images.data.length > 0) {
        this.image = response.data.data[0].images.data[0].name
      }
      this.url = '/plant-based-vegan-products/' + response.data.data[0].url;
        console.log("NEW REQ :: " + this.url)
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
      cb: function () {},
      onClosing: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        listTotalBadge.classList.remove('bounceEffect')
      },
      onClosed: function () {
        var listTotalBadge = document.getElementById('list-total-badge')
        setTimeout(function () {
          listTotalBadge.classList.add('bounceEffect')
          console.log('closed')
        }, 1000)
      }
    }
  }
}
</script>
