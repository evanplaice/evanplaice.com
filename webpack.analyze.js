const merge = require('webpack-merge');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.config.js');

module.exports = merge(common, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});
