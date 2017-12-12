<template>

<div :id="ingredient.id">
<transition enter-active-class="animated fadeInLeftBig"
    leave-active-class="animated fadeOutRightBig">
    <div v-if="status" class="grid-x list-item">
  <a class="remove-btn" @click.prevent="removeFromList(ingredient.id)">-</a>
  <img class="small-12 medium-shrink cell" :src="'https://huestudios.com' + ingredient.images.data[0].url" />
  <div class="small-12 medium-auto cell">
  <h3 class="list-item__name">{{ingredient.name}}</h3>
  <h5 class="list-item__brand">brand: <span class="condensed-bold">{{ingredient.brand}}</span></h5>
  <h5 class="list-item__category">category: <span class="condensed-bold">{{ingredient.category}}</span></h5>
  <nuxt-link :to="'/plant-based-vegan-products/' + ingredient.url" class="list-item__details-btn">PRODUCT DETAILS<span></span><span></span></nuxt-link>
  </div>
  </div>
  </transition>
</div>

</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      ingredient: {},
      status: true
    }
  },
  created: function () {
    axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/ingredients/rows/?filters[id][eq]=' + this.id).then(response => {
      this.ingredient = response.data.data[0]
    }).catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    removeFromList (product) {
      axios.post('https://huestudios.com/sites/camila.life/scripts/list.php?email=' + this.$store.state.user.email + '&product_id=' + product + '&action=delete').then(res => {
        console.log(res)
        if (res.status === 200) {
          this.status = false
        }
        this.updateListTotal()
        this.showDeleteMsg({title: `<span class='condensed' style='font-size: 20px; line-height: 20px; font-weight: 100;'>removed <span class='condensed-bold'>` + this.ingredient.name + `</span> FROM SHOPPING LIST</span>`, image: 'https://huestudios.com' + this.ingredient.images.data[0].url})
      }).catch(function (error) {
        console.log(error)
      })
    },
    updateListTotal () {
      axios.get('https://huestudios.com/sites/camila.life/content/api/1.1/tables/list/rows/?filters[email][eq]=' + this.$store.state.user.email).then(res => {
        console.log(res)
        this.$store.commit('SET_LISTITEMS', res.data.meta.total)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  notifications: {
    showDeleteMsg: {
      type: 'warn',
      title: 'removed from list',
      position: 'bottomRight',
      color: 'white',
      message: '',
      timeout: 2000,
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
        }, 1000)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
 .list-item {
   border: thin solid $pink;
   background: $pink;
   background: $pink-gradient-2;
   border-radius: 3px;
   box-shadow: 0px 1px 15px rgba($black, 0.3);
   margin-bottom: 40px;
   align-items: center;
   align-content: center;
   justify-content: center;
   flex-direction: column;
   position: relative;
   text-align: center;
   transition: all 0.3s ease-out;
   @media (min-width: $medium) {
     align-items: center;
     align-content: flex-start;
     justify-content: flext-start;
     flex-direction: row;
     
   }
   @media (min-width: 800px) {
     margin-right: auto;
     margin-left: auto;
     width: 700px
   }
   img {
    max-width: 370px;
     width: 100%;
     height: auto;
     @media (min-width: $medium) {
       width: 250px;
     }
   }
   .list-item__name {
     color: $white;
     text-transform: lowercase;
     font-family: $bold-font;
     padding: 10px 10px 0;
     margin-bottom: 5px;
     text-align: center;
     line-height: 1em;
     @media (min-width: $medium) {
       text-align: left;
       font-size: 22px;
     }
     @media (min-width: $large) {
       text-align: left;
       font-size: 22px;
     }
   }
   .list-item__brand {
     font-size: 16px;
     line-height: 1.2em;
     color: $black;
     margin-bottom: 0px;
     padding: 10px 10px 0px;
     text-align: center;
     @media (min-width: $medium) {
       text-align: left;
       font-size: 18px;
     }
   }
   .list-item__category {
     font-size: 16px;
     line-height: 1.2em;
     color: $black;
     margin-bottom: 0px;
     padding: 0px 10px 10px;
     text-align: center;
     @media (min-width: $medium) {
       text-align: left;
       font-size: 18px;
     }
   }
   a.list-item__details-btn {
      font-family: $condensed-bold-font;
      border: thin solid $green;
      text-align: center;
      padding: 7px 20px 5px;
      color: $green;
      border-radius: 2px;
      margin-top: 5px;
      margin-bottom: 20px;
      display: inline-block;
      width: 50%;
      font-size: 16px;
      position: relative;
      @media (min-width: $medium) {
        text-align: right;
        margin-left: 50%;
        margin-bottom: 10px;
        width: 60%;
        border: none;
        font-size: 42px;
        line-height: 40px;
        position: absolute;
        bottom: 0px;
        right: 10px;
        z-index: 5;
        font-family: $condensed-font;
        padding-right: 30px;
        margin-top:0;
      }
      span {
      display: none;
      @media (min-width: $medium) {
        display: block;
        position: absolute;
        height: 2px;
        width: 20px;
        background: $green;
        border-radius: 1px;
        right: 0;
        transform: rotate(0deg);
        transition: .25s linear;
        }
      }
       span:nth-child(1) {
        top: 4px;
        transform-origin: left center;
        transform: rotate(61deg);
      }
      span:nth-child(2) {
        bottom: 11px;
        transform-origin: left center;
        transform: rotate(-61deg);

      }
    }
   a.remove-btn  {
     align-self: flex-start;
    border-radius: 50%;
    color: $green;
    padding: 0;
    font-size: 38px;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    left: -25px;
    top: -25px;
    width: 50px;
    height: 50px;
    line-height: 47px;
    z-index: 2;
    transition: all .5s ease-out;
    border: thin solid $black;
    color: $green;
    background: $black;
    line-height: 36px;
    font-size: 60px;
  }
 }
</style>