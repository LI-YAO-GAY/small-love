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
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'published',
        name: 'Published',
        component: () => import('../views/published/Published'),
        meta: {
          title: '已发表'
        }
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('../views/statistics/Statistics'),
        meta: {
          title: '统计'
        }
      },
      {
        path: 'publish',
        name: 'Publish',
        component: () => import('../views/publish/Publish'),
        meta: {
          title: '发表文章'
        }
      },
      {
        path: 'tabs',
        name: 'Tabs',
        component: () => import('../views/tabs/Tabs'),
        meta: {
          title: '标签页'
        }
      },
      {
        path: 'export',
        name: 'Export',
        component: () => import('../views/export/Export'),
        meta: {
          title: '导出excel'
        }
      },
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('../views/upload/Upload'),
        meta: {
          title: '图片上传'
        }
      },
      {
        path: 'quit',
        name: 'Quit',
        component: () => import('../views/quit/Quit'),
        meta: {
          title: '退出系统'
        }
      },
      {
        path: '/published',
        name: 'Published',
        component: () => import('../views/published/Published'),
        meta: {
          title: '首页'
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



let whitePath = ['/login','/Registe']
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
