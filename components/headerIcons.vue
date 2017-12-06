<template>
 
    
<div id="cart-icons" class="shoppingcart-summary snipcart-summary">
<h5 class="show-for-medium white">SHOPPING BAG</h5>
 <a href="#" class="snipcart-checkout" id="cart-button">

 <div id="svg-container"><svg id="shopping-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.09 59"><title>Shopping Bag</title><path class="cls-1" d="M16.55,19V14.09A13.1,13.1,0,0,1,29.64,1a12.92,12.92,0,0,1,12.9,12.91V19" transform="translate(-1.45)"/><path class="cls-2" d="M56.57,19H39.5a10,10,0,0,1-20,0H2.43a1,1,0,0,0-1,1.16L7.79,56.81A2.76,2.76,0,0,0,10.5,59h38a2.76,2.76,0,0,0,2.71-2.19l6.32-36.65A1,1,0,0,0,56.57,19Z" transform="translate(-1.45)"/><polygon class="cls-3" points="3.31 39 52.87 39 54.59 29 1.59 29 3.31 39"/><path class="cls-3" d="M51.25,56.81,52.6,49H6.49l1.35,7.81A2.76,2.76,0,0,0,10.55,59h38A2.76,2.76,0,0,0,51.25,56.81Z" transform="translate(-1.45)"/></svg></div> <span id="cart-total-badge" class="badge snipcart-total-items"></span></a>
 
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'isAuthenticated',
    'loggedUser'
  ])
}
</script>

<style lang="scss" scoped>
@import './assets/scss/_vars.scss';
#cart-icons {
    position: fixed;
    right: 3%;
    top: 0px;
    height: 60px;
    display: flex;
    align-content: center;
    align-items: center;
    z-index: 10;
  transition: all 0.3s $curve;
  @media (min-width: $medium) {
    right: 20px;
  }
  @media (min-width: $large) {
    height: 70px;
    right: 190px;
    top: 0px;
    transition: all 0.3s $bounce;
  }
  h5 {
  font-size: 14px;
  margin-bottom: 0;
  line-height: 10px;
  margin-right: 7px;
  }
    #cart-button {
    transition: all 0.3s $bounce;
      #svg-container {
      
      border-radius: 50%;
      border: thin solid $blue;
      color: $white;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
        background: $pink;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        box-shadow: 0px 2px 3px rgba($black, 0.3);
     @media (min-width: $medium) {
       
        }
        svg {
          width: 30px;
          height: 30px;
          margin-top: 7px;
          filter: drop-shadow(0px 2px 3px rgba($black, 0.3));
          transition: all 0.3s $bounce 0.08s;
          @media (min-width: $medium) {
           
          }
          .cls-1 {
            fill:none;
            stroke:#67b9cc;
            stroke-miterlimit:10;
            stroke-width:2px;
            
          }
          .cls-2 {
            fill:#f4e6ce;
          }
          .cls-3 {
            fill:#f29c1f;
          }
          
       }
        
      }
      .badge {
        vertical-align: top;
        background: $blue;
        color: $black;
        font-weight: 900;
        margin-left: -15px;
        box-shadow: 0px 2px 6px rgba($black, 0.3);
      }
    }
    #list-button {
    transition: all 0.3s $bounce;
    margin-left: 20px;
      #svg-container {
      
      border-radius: 50%;
      border: thin solid $blue;
      color: $white;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
        background: $pink;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        box-shadow: 0px 2px 3px rgba($black, 0.3);
     @media (min-width: $medium) {
        
        }
        svg {
          width: 30px;
          height: 30px;
          margin-top: 7px;
          filter: drop-shadow(0px 2px 3px rgba($black, 0.3));
          transition: all 0.3s $bounce 0.08s;
          @media (min-width: $medium) {
          
          }
          .cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#88c057;}.cls-4{fill:#466825;}.cls-5{fill:#659c35;}.cls-6{fill:#436b1c;}.cls-7{fill:#567a34;}.cls-8{fill:#42bec1;}.cls-9{fill:#5fd6d6;}.cls-10{fill:#c92b00;}.cls-11{fill:#a01c02;}.cls-12{fill:#5ea304;}.cls-13{fill:#388c02;}.cls-14{fill:#036d2e;}.cls-15{clip-path:url(#clip-path-2);}.cls-16{fill:#eabc49;}.cls-17{fill:#ffdc6c;}.cls-18{fill:#fcf7c5;}.cls-19{fill:#562300;}.cls-20{fill:#281000;}.cls-21{fill:#8c4719;}.cls-22{fill:#ce921b;}.cls-23{fill:#3cbc0c;}.cls-24{fill:#2b9907;}.cls-25{fill:#017c1b;}.cls-26{fill:#006b12;}.cls-27{fill:#ffe000;}.cls-28{fill:#ffc200;}.cls-29{fill:#e09b77;}.cls-30{clip-path:url(#clip-path-3);}.cls-31{fill:#583e68;}.cls-32{fill:#6a3311;}.cls-33{fill:#6f58a8;}.cls-34{clip-path:url(#clip-path-4);}.cls-35{fill:#d13834;}.cls-36{fill:#f75b57;}.cls-37{fill:#e8b18b;}
          
       }
        
      }
      .badge {
        vertical-align: top;
        background: $blue;
        color: $black;
        font-weight: 900;
        margin-left: -15px;
        box-shadow: 0px 2px 6px rgba($black, 0.3);
      }
    }
  }
#cart-button:hover, #list-button:hover {
  @media (min-width: $large) {
    transform: scale(1.2);
    svg {
      transform: scale(1.1);
    }
  }
}
#cart-button:hover + #list-button {
  @media (min-width: $large) {
    transform: scale(0.6);
    }
}

#list-button:hover ~ #cart-button {
  @media (min-width: $large) {
    transform: scale(0.6);
    }
}

</style>
