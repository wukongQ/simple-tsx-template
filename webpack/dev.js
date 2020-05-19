const path = require('path')
const Base = require('./base.js')
const merge = require('webpack-merge')

module.exports = merge(Base, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[hash]_bundle.js',
    publicPath: '/'
  },
  resolve: {},
  devServer: {
    host: 'localhost',
    port: 8802,
    open: true,
    hotOnly: true,
    inline: true,
    historyApiFallback: true,
    proxy: {}
  }
})
