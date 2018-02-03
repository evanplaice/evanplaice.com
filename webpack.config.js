const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/main.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'es2015', 'angular2' ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|woff(2)?|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    symlinks: false,
    alias: {
      //'@angular/core': path.resolve(__dirname, 'node_modules/@angular/core/bundles/core.umd'),
      //'@angular/common': path.resolve(__dirname, 'node_modules/@angular/common/bundles/common.umd'),
      //'@angular/platform-browser-dynamic': path.resolve(__dirname, 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd'),
      'ngx-freshresume': path.resolve(__dirname, 'node_modules/ngx-freshresume/dist/freshresume-modern'),
      'ng2-markdown': path.resolve(__dirname, 'node_modules/ng2-markdown/dist/ng2-markdown')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
};
