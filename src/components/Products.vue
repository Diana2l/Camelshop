<template>
    <h1>Confectionery</h1>
    <v-btn
        color="deep-purple-lighten-2"
        text="ManageProducts"
        to = "/manage_products"
    ></v-btn>
    <div>
        <v-row>
        <v-col cols="12" md="4"  v-for="product in stock" :key=product>     
            <v-card
                class="mx-auto my-12"
                max-width="374"
            >
                <v-img
                    height="250"
                    :src="product.itemImage"
                    cover
                ></v-img>

                <v-card-item>
                    <v-card-title>{{product.itemName}}</v-card-title>
                </v-card-item>

                <v-card-text>
                    <div class="my-4 text-subtitle-1">{{product.itemPrice}}</div>
                    <div>{{ product.description }}</div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-actions>
                    <v-btn
                        color="deep-purple-lighten-2"
                        text="Add to Cart"
                        block
                        border
                        @click="addToCart(product)"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </div>

</template>
<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data(){
            return{
               
            }
        },
        methods:{
            ...mapActions([
                "addToCart",
                "fetchProducts" // action to trigger fetching products from api
            ])

        },
        computed: {
            ...mapGetters({
                stock: 'stock'
            })
        },
        created() {
            this.fetchProducts() // retrieve the products when the component is called
        }
    }
</script>