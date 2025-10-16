import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login.vue'
import register from '../view/register.vue'
import findpassword from '../view/findpassword.vue'

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
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/findpassword',
      name: 'findpassword',
      component: findpassword
    }
  ]
})

export default router