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
    path: '/',
    name: 'Login',
    component:()=>import('../views/Login'),
    children:[
      {
        path: 'login',
        name: 'Login',
        component:()=>import('../views/Login'),
        meta:{
        title:'登录'
    },
      },
      {
        path: 'Register',
        name: 'Register',
        component:()=>import('../views/Login'),
        meta:{
        title:'注册'
    },
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach=(to,from,next)=>{
use ? next(): next('/Login')}
export default router
