var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("bundle.css")
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx','.css']
  },
  module: {
    loaders: [
    { test: /\.css$/, loader:ExtractTextPlugin.extract( "style-loader","css-loader?sourceMap") },
    { test: /\.png$/, loader: "url-loader?limit=100000" },
    { test: /\.jpg$/, loader: "file-loader" },
    {
      test: /\.(eot|woff|woff2|ttf|svg)$/,
      loader: 'url-loader?limit=30000'
    },
    {
      test: /\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};