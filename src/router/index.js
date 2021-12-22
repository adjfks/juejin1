import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '@/router/Recommend'
import Frontend from '@/router/Frontend'
import Backend from '@/router/Backend'
import Ios from '@/router/Ios'
import Android from '@/router/Android'
import Post from '@/router/Post'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend',
    meta: {
      // 控制在某路由下是否展示顶部和底部导航栏
      showNav: true
    }
  },
  {
    path: '/recommend',
    component: Recommend,
    meta: {
      showNav: true
    }
  },
  {
    path: '/frontend',
    component: Frontend,
    meta: {
      showNav: true
    }
  },
  {
    path: '/backend',
    component: Backend,
    meta: {
      showNav: true
    }
  },
  {
    path: '/IOS',
    component: Ios,
    meta: {
      showNav: true
    }
  },
  {
    path: '/Android',
    component: Android,
    meta: {
      showNav: true
    }
  },
  {
    path: '/history',
    component: () => import('@/router/History'),
    meta: {
      showNav: false
    }
  },
  {
    path: '/post/:articleId',
    component: Post,
    meta: {
      showNav: false
    }
  }
]

const router = new VueRouter({
  routes,
  // 平滑滚动
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default router
