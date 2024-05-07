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
// 引入mockJs
require('./mock/index')

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(Antd).use(store).use(router).mount('#app')
