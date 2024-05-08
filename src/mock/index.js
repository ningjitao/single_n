const files = require.context('./mocks', true, /\.js/)
files.keys().forEach(item => {
  require(`${item.replace('./', './mocks/')}`)
})
