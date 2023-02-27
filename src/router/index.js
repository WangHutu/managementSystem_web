import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ElMessage } from 'element-plus'
import { getLocal } from '../common/utils'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  } else {
    // 获取 token
    const token = getLocal('Authorization');
    // token 不存在
    if (token === null || token === '') {
      ElMessage.error('您还没有登录，请先登录');
      next('/login');
    } else {
      next();
    }
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
