import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 引入mockJs
require('./mock/index')

createApp(App).use(Antd).use(store).use(router).mount('#app')
