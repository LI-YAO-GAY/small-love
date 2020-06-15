import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/home',
    redirect:'/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
        {
          path: '/published',
          name: 'Published',
          component: Home,
          meta: {
            title: '首页'
          },
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



let whitePath = ['/login']
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let user = localStorage.getItem('user')
  if (whitePath.includes(to.path)) {
    next()
  } else {
    user ? next() : next('/login')
  }
})
export default router
