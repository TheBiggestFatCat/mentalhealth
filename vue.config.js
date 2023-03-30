// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {  //配置跨域
      '/': {
        target: 'http://127.0.0.1:8088/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true,  //允许跨域
        ws: false
        }
    }
  },
}