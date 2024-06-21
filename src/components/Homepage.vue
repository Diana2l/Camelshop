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
  <v-card>
    class="mx-auto"
    width="1000"
  >

    <v-carousel>
  <v-carousel-item
    src="public/Images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/Images/customerbox-aXq1oCCjlVM-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src='../Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
    cover>
  </v-carousel-item>
</v-carousel>
    </v-card>
    <v-card align="center">
      <v-card-item>
      <v-card-title>Candy Shop</v-card-title>

      <v-card-subtitle>The Best Candy Shop</v-card-subtitle>
      </v-card-item>

      <v-card-text></v-card-text>

    </v-card>

 <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
      
    </template>
    