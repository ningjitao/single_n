import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import { $Route } from './utils/routeFun'
import * as echarts from 'echarts'
// 引入mockJs
require('./mock/index')

const app = createApp(App)
// 全局挂载axios
app.config.globalProperties.$http = axios
// 挂载路由跳转
app.provide('$Route', $Route)
// 全局挂载echarts
app.config.globalProperties.$echarts = echarts
app.use(Antd).use(store).use(router).mount('#app')
