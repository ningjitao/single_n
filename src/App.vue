<template>
<div style="height: 100%" @click="handleClick">
  <router-view/>
</div>
</template>

<script setup>
import '@/assets/css/common.scss'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const handleClick = function () {
  if (localStorage.getItem('token')) {
    const loginTime = JSON.parse(localStorage.getItem('token'))
    const currentTime = +new Date()
    const loginDate = new Date(loginTime)
    const currentDate = new Date(currentTime)
    const difference = Math.abs(currentDate - loginDate)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    // 15分钟，自动退出
    if (minutes > 15) {
      message.loading('token失效，自动退出中...', 0)
      localStorage.removeItem('token')
      setTimeout(() => {
        message.destroy()
      }, 500)
      setTimeout(() => {
        router.push('/login')
      }, 1000)
    } else {
      localStorage.setItem('token', JSON.stringify(+new Date()))
    }
  }
}
</script>
