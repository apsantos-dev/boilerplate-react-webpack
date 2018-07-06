'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
  devtool: 'source-map', // sourcemaps debug

  // mode: 'development', // development production

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/' // /static/
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  // set babel
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
})
