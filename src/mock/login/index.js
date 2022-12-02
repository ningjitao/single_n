import Mock from 'mockjs'

// 登录
Mock.mock(
  '/api/login',
  'get', {
    token: +new Date()
  })
