import { createRouter, createWebHashHistory } from 'vue-router'
const files = require.context('./routers', true, /\.js/)
const routes = [
  {
    path: '/home',
    component: () => import('@/views/Home.vue'),
    children: []
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login2.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/error/404.vue')
  }
]
files.keys().forEach(item => {
  const routerArr = Object.values(require(`${item.replace('./', './routers/')}`).default)
  routes[0].children.push(...routerArr)
})
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
