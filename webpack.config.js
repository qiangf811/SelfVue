const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const env = process.env.NODE_ENV
const isDev = process.env.NODE_ENV === 'development'
// console.log(process.env)
const config = {
  target: 'web',
  entry: ['./main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: require.resolve('jquery'), // require.resolve 用来获取模块的绝对路径
      use: [{
        loader: 'expose-loader',
        options: 'jQuery'
      }, {
        loader: 'expose-loader',
        options: '$'
      }]
    }]
  },
  mode: env,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
if (isDev) {
  config.devServer = {
    port: 9000,
    host: 'localhost',
    overlay: {
      errors: true
    },
    open: true,
    hot: true
  }
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.evn': '"development"'
    }),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  config.devtool = '#cheap-module-eval-source-map'
}
module.exports = config
