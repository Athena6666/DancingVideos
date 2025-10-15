import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router