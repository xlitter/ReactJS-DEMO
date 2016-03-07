'use strict';

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: [
    `${APP_PATH}/index.jsx`
  ],
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: APP_PATH
    }]
  },

  devServer: {
    // 设置index.html页面所在目录
    'contentBase': '.',
    'historyApiFallback': true,
    'hot': true,
    'inline': true,
    'port': 9018
  },
  // plugins : [
  // 	new HtmlWebpackPlugin({
  // 		title: 'index'
  // 	})
  // ],
  devtool: 'source-map'
};
