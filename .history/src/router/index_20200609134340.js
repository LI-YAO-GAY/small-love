import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    meta: {
      title: '登录'
    },
  },
  {
    path: '/Registe',
    name: 'Registe',
    component: () => import('../views/Registe'),
    meta: {
      title: '注册'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  Document.title=to.meta.title
  next()
})

// let whitePath=['/login']
// router.beforeEach((to, from, next) => {
//   // Document.title=to.meta.title
//   // next()
//   let ruleForm =JSON.parse(localStorage.getItem('ruleForm'))
//   if( whitePath.includes(to.path)){
//     next()
//   }else{
//     ruleForm ? next():next('/login')
//   }
// })
export default router
