import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Products from "./../components/Products.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
import Cart from "./../components/Cart.vue"
import ServicesOffered from "./../components/ServicesOffered.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage,
      },
      {
        path: '/products',
        name: 'products',
        component: Products,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutUs,
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactUs,
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
      },
      {
        path: '/services',
        name: 'services',
        component: ServicesOffered,
      },
    
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router