const BASE_URL = process.env.NODE_ENV === 'procution' ? 'vue-study' : '/'
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
    lintOnSave: false, // eslint 配置
    publicPath: BASE_URL, // 请求路径
    chainWebpack: config=>{
      config.resolve.alias
        .set('@', resolve('src')) // 设置@符号代表src路径
        .set('_c', resolve('src/components')) // 设置_c符号代表src/components路径
    },
    // procutionSourceMap: false, // 打包时不生成.map文件,减少打包体积, 加快打包速度
    devServer: {
      proxy: 'http://localhost:4000' // 增加跨域配置，通过proxy告诉后端，所有没有静态资源的请求，全部代理到localhost:4000上
    }
}
