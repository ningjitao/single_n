<template>
<div id="app">
  <router-view/>
</div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginTime = localStorage.getItem('token')

const handleClick = function () {
  const clickTime = +new Date()
  // 10分钟，自动退出
  if (loginTime && (clickTime - loginTime) > 10 * 60 * 100) {
    message.loading('token失效，自动退出中...', 0)
    localStorage.removeItem('token')
    setTimeout(() => {
      message.destroy()
    }, 500)
    setTimeout(() => {
      router.push('/login')
      document.removeEventListener('click', handleClick, true)
    }, 1000)
  }
}
if (loginTime) {
  document.addEventListener('click', handleClick, true)
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
