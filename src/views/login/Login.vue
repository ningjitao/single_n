<template>
<div class="main-box">
  <div id="login_box">
    <h2>LOGIN</h2>
    <a-form :form="loginForm" @submit="handleSubmit">
      <a-form-item>
        <div id="input_box">
          <a-input v-model:value="loginForm.username" type="text" placeholder="admin" />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="input_box">
          <a-input v-model:value="loginForm.password" type="password" placeholder="123456" />
        </div>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = reactive({
  username: '',
  password: ''
})

const handleSubmit = () => {
  const { username, password } = loginForm
  if (username.trim() === '' || password.trim() === '') {
    return message.warning('用户名或密码不能为空！')
  }
  if (username.trim() === 'admin' && password.trim() === '123456') {
    message.loading('登录中...', 0)
    // 生成时间戳 模拟Token
    localStorage.setItem('token', JSON.stringify(+new Date()))
    setTimeout(() => {
      router.push('/')
      message.success('登录成功！')
    }, 1000)
    setTimeout(() => {
      message.destroy()
    }, 500)
  } else {
    return message.error('用户名或密码错误！')
  }
}
</script>

<style lang="scss" scoped>
.main-box {
      height: 100%;
      background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
      background-size: 100%;
    }

    #login_box {
      width: 20%;
      height: 400px;
      background-color: #00000060;
      margin: auto;
      text-align: center;
      border-radius: 10px;
      padding: 50px 50px;
      transform: translateY(50%);
    }

    h2 {
      color: #ffffff90;
      margin-top: 5%;
    }

    #input-box {
      margin-top: 5%;
    }

    span {
      color: #fff;
    }

    input {
      border: 0;
      width: 60%;
      font-size: 15px;
      color: #fff;
      background: transparent;
      border-bottom: 2px solid #fff;
      padding: 5px 10px;
      outline: none;
      margin-top: 10px;
      &::-webkit-input-placeholder {
        /* WebKit browsers 适配谷歌 */
        color: #999;
      }
    }
    button {
      margin-top: 50px;
      width: 60%;
      height: 30px;
      border-radius: 10px;
      border: 0;
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-size: 15px;
      background-image: linear-gradient(to right, #30cfd0, #330867);
    }

    #sign_up {
      margin-top: 45%;
      margin-left: 60%;
    }

    a {
      color: #b94648;
    }
</style>
