module.exports = {
  configureWebpack: {
    // devtool: 'source-map'
    devtool: 'nosources-source-map'// 生产环境使用
  },
  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}
