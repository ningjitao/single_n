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
  // 15分钟，自动退出
  if (loginTime && (clickTime - loginTime) > 15 * 60 * 1000) {
    message.loading('token失效，自动退出中...', 0)
    localStorage.removeItem('token')
    setTimeout(() => {
      message.destroy()
    }, 500)
    setTimeout(() => {
      router.push('/login')
      document.removeEventListener('click', handleClick, true)
    }, 1000)
  } else if (loginTime && (clickTime - loginTime) <= 15 * 60 * 1000) {
    localStorage.setItem('token', JSON.stringify(+new Date()))
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
