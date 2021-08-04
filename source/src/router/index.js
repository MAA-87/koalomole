import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',

    component: () => import(/* webpackChunkName: "Gallery" */ '../views/Gallery.vue')
  },
    {
    path: '/about',
    name: 'About',

    // this generates a separate chunk (about.[hash].js) for this route

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
path:'/events',
name:'Events',
 component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
      {
    path: '/links',
    name: 'Links',

    component: () => import(/* webpackChunkName: "links" */ '../views/Links.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
