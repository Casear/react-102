var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.json', '.js', '.jsx','.css']
  },
  module: {
    loaders: [
    { test: /\.css$/, loader: "style-loader!css-loader?sourceMap" },
    { test: /\.png$/, loader: "url-loader?limit=100000" },
    { test: /\.jpg$/, loader: "file-loader" },
    {
      test: /\.(eot|woff|woff2|ttf|svg)$/,
      loader: 'url-loader?limit=30000'
    },
    {
      test: /\.js?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};