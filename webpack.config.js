const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process.env.NODE_ENV
const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: ['./main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: '#cheap-module-eval-source-map',
  mode: env,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
if (isDev) {
  config.devServer = {
    port: 9000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
}
module.exports = config
