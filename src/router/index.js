import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Giveaway from '@/views/Giveaway'
import Sort from '@/views/Sort'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page/:page',
    name: 'Home',
    component: Home
  },
  {
    path: '/giveaway/:id',
    name: 'Giveaway',
    component: Giveaway
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  }
]

const router = new VueRouter({
  routes
})

export default router
