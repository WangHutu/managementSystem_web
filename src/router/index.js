import { createRouter, createWebHistory } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getLocal } from '../common/utils'
import Layout from '@/components/layout/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/HomeView/HomeView.vue'),
    }]
  },
  {
    path: '/type',
    component: Layout,
    children: [{
      path: 'Type',
      name: 'type',
      component: () => import('@/views/Type.vue'),
    }]
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      index: 1
    }
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../components/f.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    localStorage.clear()
    next();
  } else {
    // 获取 token
    const token = getLocal('Authorization');
    // token 不存在
    if (token === null || token === '') {
      ElMessage.error('Token不存在，请登录');
      next('/login');
    } else {
      next();
    }
  }
})

export default router
