import { createRouter, createWebHashHistory } from 'vue-router'
const files = require.context('./routers', true, /\.js/)
const routes = []
files.keys().forEach(item => {
  const routerArr = Object.values(require(`${item.replace('./', './routers/')}`).default)
  routes.push(...routerArr)
})
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
