<template>
<div class="list-recipe-buttons">
  <transition enter-active-class="uk-animation-scale-up" leave-active-class="uk-animation-scale-down" v-if="this.$auth.$state.loggedIn">

    <a v-if="status == 0" class="uk-button uk-button-default condensed-bold save-btn" @click.prevent="addRecipeToList(id, category, name, image, type, url, steps, ingredients)">
      <vk-icon icon="plus"></vk-icon> SAVE RECIPE</a>

    <a v-else-if="status == 1" class="uk-button uk-button-default condensed-bold remove-btn" @click.prevent="removeRecipeFromList(id)">
      <vk-icon icon="check"></vk-icon> SAVED</a>

  </transition>
  <a v-else @click.prevent="showLoginModal()" class="uk-button uk-button-default condensed-bold save-btn">
    <vk-icon icon="plus"></vk-icon> SAVE RECIPE</a>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id', 'category', 'name', 'type', 'url', 'image', 'steps', 'ingredients'],
  data: function () {
    return {
      status: 3
    }
  },
  async asyncData({
    app
  }) {

  },
  mounted: function () {
    if (this.$auth.$state.loggedIn) {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[recipe_id][eq]=' + this.id).then(response => {
        if (response.data.data.length >= 1) {
          this.status = 1
        } else {
          this.status = 0
        }
      }).catch(function (error) {
        console.log(error)
      })
    }

  },
  methods: {
    addRecipeToList(recipe, category, name, image, type, url, steps, ingredients) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&recipe_id=' + recipe + '&category=' + category + '&name=' + name + '&image=' + image + '&type=' + type + '&url=' + url  + '&steps=' + steps + '&ingredients=' + ingredients +
        '&purchased=0&action=add&status=1').then(res => {
          console.log(res)
        if (res.status === 200) {
          this.status = 1
        }
        this.updateRecipeTotal()
        this.showSuccessMsg({
          title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'><span class='condensed-bold'>` + this.name + `</span> HAS BEEN SAVED</span>`,
          image: 'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + this.image
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    showLoginModal () {
      this.$store.commit('SET_LOGINMODAL', true)
    },
    removeRecipeFromList(recipe) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$auth.user.email + '&recipe_id=' + recipe + '&action=delete').then(res => {

        if (res.status === 200) {
          this.status = 0
        }
        this.updateRecipeTotal()
        this.showDeleteMsg({
          title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'><span class='condensed-bold'>` + this.name + `</span> WAS REMOVED</span>`,
          image: 'https://huestudios.com/sites/camila.life/content/thumbnail/100/100/crop/' + this.image
        })
      }).catch(function (error) {
        console.log(error)
      })
    },
    updateRecipeTotal() {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$auth.user.email + '&filters[type][eq]=recipe').then(res => {
        this.$store.commit('SET_RECIPES', res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  notifications: {
    showSuccessMsg: {
      type: 'success',
      title: 'successfully added',
      position: 'bottomRight',
      color: 'white',
      message: '',
      timeout: 2000,
      cb: function () {},
      onClosing: function () {
        // var listTotalBadge = document.getElementById('grocery-list-count')
        // listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        // var listTotalBadge = document.getElementById('grocery-list-count')
        // setTimeout(function () {
        //   listTotalBadge.classList.add('pulseEffect')
        // }, 200)
      }
    },
    showDeleteMsg: {
      type: 'warn',
      title: 'removed from list',
      position: 'bottomRight',
      color: 'white',
      message: '',
      timeout: 2000,
      cb: function () {},
      onClosing: function () {
        // var listTotalBadge = document.getElementById('grocery-list-count')
        // listTotalBadge.classList.remove('pulseEffect')
      },
      onClosed: function () {
        // var listTotalBadge = document.getElementById('grocery-list-count')
        // setTimeout(function () {
        //   listTotalBadge.classList.add('pulseEffect')
        // }, 200)
      }
    }
  }
}
</script>
