<template>
  <div>
      <a-layout-header style="background: #fff; padding: 0">
        <div>
          <div></div>
          <div class="user-avatar">
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
const router = useRouter()
const logOut = () => {
  // 退出登录
  router.push('/login')
  localStorage.removeItem('token')
}
</script>

<style lang="scss" scoped>
.user-avatar {
  text-align: right;
  padding-right: 30px;
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
