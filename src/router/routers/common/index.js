const login = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/Login2.vue')
}
const Home = {
  path: '/',
  redirect: '/home'
}
const HomeViews = {
  path: '/home',
  component: () => import('@/views/Home.vue')
}
const ErrorPage = {
  path: '/:pathMatch(.*)*',
  name: '404',
  component: () => import('@/views/error/404.vue')
}

export default {
  login,
  Home,
  HomeViews,
  ErrorPage
}
