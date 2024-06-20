<script>
    export default{
     data() {
     return {
        image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
        url: 'https://www.vuejs.org/',
        stockDetails : [
            {
                itemNumber: 1,
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
            }
        ],
      }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when wotrking with forms
    }
      }  
        
         </script>

<template>
  <v-card
    class="mx-auto"
    width="400"
  >

    <v-carousel>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
    </v-card>
      
    </template>
    