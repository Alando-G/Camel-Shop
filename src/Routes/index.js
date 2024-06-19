import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Products from "./../components/Products.vue"
import AboutUs from "./../components/About us.vue"
import ContactUs from "./../components/Contact us.vue"
import Cart from "./../components/Cart.vue"
import Servicesofferd from "./../components/Servicesofferd.vue"



const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },

    {
      path: '/Products',
      name: 'Products',
      component: Products,
    },

     {
      path: '/About us',
      name: 'About us',
      component: AboutUs,
    },

    {
      path: '/Contact Us',
      name: 'Contact Us',
      component: ContactUs,
    },

    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },

    {
      path: '/Servicesofferd',
      name: 'servicesofferd',
      component: Servicesofferd,
    },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router