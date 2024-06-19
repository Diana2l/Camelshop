<script>
     
     data() 
     return {
        message: "Hello World!",
        product: 'Sweets',
        image: 'vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
        url: 'https://www.vuejs.org/',
        //simple array demo
        stock: ["Sweets", "Lollipop", "Chocolates", "Chewing Gum"],
        //Object demo
        stockDetails : [
            {
                itemNumber: 1,
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: 'customerbox-aXq1oCCjlVM-unsplash.jpg'
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: 'jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
            }
        ],
        totalStock: 100
      }
    
        
        
        
    </script>
<template>
    <h1>My Candy Shop</h1>
    <div class="center">
        <img v-bind:src="image" width="500" height="300">
    </div>
    <div class="center">
        <a :href="url">Vue JS Practice</a>
        <h3>Milk,white,dark</h3>
        <h5>A wide variety of fine snacks,sweets and chocolates perfect for all occasions</h5>
    </div>
    <div class="center">
        <ul>
          <li :key="item" v-for="(item, index) in stockDetails">
            <div>
              <img v-bind:src="image" width="200" height="150"> 
            </div>
            <div>
                    <span>{{ item.itemName }}</span> &nbsp; &nbsp;
                    <span> <button style="background-color: aqua; color: bisque; border: violet;"> +</button></span>
            </div>
            <br>
                 </li>  
        </ul> 
    </div>
    </template>
    