import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login.vue'
import register from '../view/register.vue'
import findpassword from '../view/findpassword.vue'
import videos from '../view/videos.vue'

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
    },
    {
      path: '/videos',
      name: 'videos',
      component: videos
    }
  ]
})

export default router