<template>
<div class="loginBox">
  <h2>login</h2>
  <a-form :form="loginForm" @submit="handleSubmit">
      <a-form-item>
        <div class="input_box">
          <a-input v-model:value="loginForm.username" type="text" placeholder="admin" />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="input_box">
          <a-input-password v-model:value="loginForm.password" type="password" placeholder="1" class="password-style-input" />
        </div>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" class="btn">登录</a-button>
      </a-form-item>
    </a-form>
</div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
const $Route = inject('$Route')
// import API from '@/api/login/index'

const router = useRouter()
// const { proxy } = getCurrentInstance()
const loginForm = reactive({
  username: '',
  password: ''
})

const handleSubmit = () => {
  const { username, password } = loginForm
  if (username.trim() === '' || password.trim() === '') {
    return message.warning('用户名或密码不能为空！')
  }
  if (username.trim() === 'admin' && password.trim() === '1') {
    message.loading('登录中...', 0)
    // proxy.$http.get(API.Login).then(res => {
    const token = +new Date()
    localStorage.setItem('token', JSON.stringify(token))
    setTimeout(() => {
      $Route(router, '/', {}, true)
      message.success('登录成功！')
      setTimeout(() => {
        message.destroy()
      }, 200)
    }, 500)
    // })
  } else {
    return message.error('用户名或密码错误！')
  }
}
</script>

<style lang="scss" scoped>
  input,
  button {
    background: transparent;
    border: 0;
    outline: none;
  }
  .loginBox {
    width: 400px;
    height: 364px;
    background-color: #0c1622;
    margin: 0 auto;
    transform: translateY(65%);
    border-radius: 10px;
    box-shadow: 0 15px 25px 0 rgba(0, 0, 0, .6);
    padding: 40px;
    box-sizing: border-box;
    .input_box {
      .ant-input {
        color: #03e9f4;
      }
      .password-style-input {
        background-color: transparent;
        border: 0;
        ::v-deep .ant-input {
          color: #03e9f4;
          background-color: transparent !important;
        }
        &:hover {
          ::v-deep .ant-input-password-icon {
            color: #03e9f4;
          }
        }
      }
    }
  }

  h2 {
    text-align: center;
    color: aliceblue;
    margin-bottom: 30px;
    font-family: 'Courier New', Courier, monospace;
  }

  .item {
    height: 45px;
    border-bottom: 1px solid #fff;
    margin-bottom: 40px;
    position: relative;
  }

  .item input {
    width: 100%;
    height: 100%;
    color: #fff;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .item input:focus+label,
  .item input:valid+label {
    top: 0px;
    font-size: 2px;
  }

  .item label {
    position: absolute;
    left: 0;
    top: 12px;
    transition: all 0.5s linear;
    color: #03e9f4;
  }

  .btn {
    font-size: 16px;
    padding: 0px 20px;
    margin-top: 30px;
    color: #03e9f4;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 2px;
    left: 35%;
    cursor: pointer;
  }

  .btn:hover {
    border-radius: 5px;
    color: #fff;
    background: #03e9f4;
    box-shadow: 0 0 5px 0 #03e9f4,
      0 0 25px 0 #03e9f4,
      0 0 50px 0 #03e9f4,
      0 0 100px 0 #03e9f4;
    transition: all 1s linear;
  }

  .btn>span {
    position: absolute;
  }

  .btn>span:nth-child(1) {
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, transparent, #03e9f4);
    left: -100%;
    top: 0px;
    animation: line1 1s linear infinite;
  }

  @keyframes line1 {

    50%,
    100% {
      left: 100%;
    }
  }

  .btn>span:nth-child(2) {
    width: 2px;
    height: 100%;
    background: -webkit-linear-gradient(top, transparent, #03e9f4);
    right: 0px;
    top: -100%;
    animation: line2 1s 0.25s linear infinite;
  }

  @keyframes line2 {

    50%,
    100% {
      top: 100%;
    }
  }

  .btn>span:nth-child(3) {
    width: 100%;
    height: 2px;
    background: -webkit-linear-gradient(left, #03e9f4, transparent);
    left: 100%;
    bottom: 0px;
    animation: line3 1s 0.75s linear infinite;
  }

  @keyframes line3 {

    50%,
    100% {
      left: -100%;
    }
  }

  .btn>span:nth-child(4) {
    width: 2px;
    height: 100%;
    background: -webkit-linear-gradient(top, transparent, #03e9f4);
    left: 0px;
    top: 100%;
    animation: line4 1s 1s linear infinite;
  }

  @keyframes line4 {

    50%,
    100% {
      top: -100%;
    }
  }
</style>
