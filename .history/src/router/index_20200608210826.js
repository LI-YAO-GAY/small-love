import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/Login'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/register1',
    name: 'Register1',
    component:()=>import('../views/Register1'),
    meta:{
      title:'注册'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
