const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            // jquery: 'jquery',
            // jQuery: 'jquery',
            // 'window.jQuery': 'jquery'
        }])
    }
})


// 添加代码
