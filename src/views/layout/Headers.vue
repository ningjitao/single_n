<template>
  <div>
      <a-layout-header style="background: #fff; padding: 0">
        <div>
          <div></div>
          <div class="user-avatar">
            <a-tooltip color="cyan">
              <template #title>{{tooltipText}}</template>
              <a-switch v-model:checked="checked" @change="changeChecked" class="switch-style"/>
            </a-tooltip>
            <a-popover placement="bottom">
              <template #content>
                <a @click="logOut">退出登录</a>
              </template>
              <img src="../../assets/user.png" />
            </a-popover>
          </div>
        </div>
      </a-layout-header>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const checked = ref(false)
const tooltipText = ref('开启主题')
const logOut = () => {
  // 退出登录
  router.push('/login')
  localStorage.removeItem('token')
}

const changeChecked = (val) => {
  if (val) {
    const scriptInfo = document.createElement('script')
    scriptInfo.type = 'text/javascript'
    scriptInfo.setAttribute('dynamic-type', 'callScript')
    scriptInfo.src = 'https://cdn.jsdelivr.net/gh/Fuukei/Public_Repository@latest/static/js/sakura-less.js'
    document.head.appendChild(scriptInfo)
    tooltipText.value = '关闭主题'
  } else {
    tooltipText.value = '开启主题'
    const callScript = document.querySelector("script[dynamic-type='callScript']")
    const canvas = document.querySelectorAll('#canvas_sakura')
    console.log(canvas, 'canvas')
    canvas.forEach(can => {
      can.remove()
    })
    document.head.removeChild(callScript)
  }
}
</script>

<style lang="scss" scoped>
.user-avatar {
  text-align: right;
  padding-right: 30px;
  .ant-switch {
    margin-right: 15px;
  }
  .ant-switch-checked {
    background-color: #f8cfdf;
  }
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid #f5f5f5;
    &:hover {
    transform: rotate(360deg);
    transition: all 1.5s;
  }
  }
}
</style>
