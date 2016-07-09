var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/index",
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style!css!sass' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
  	hot: true,
    contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};