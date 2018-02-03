const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  output: {
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      keep_fnames: true
    })
  ]
});
