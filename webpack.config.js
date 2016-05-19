var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './app/index.jsx',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modeles/, loader: 'babel-loader' },
      { test: /\.(png|jpg|svg)$/, loader: 'file-loader?name=/img/[name].[ext]' },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ],
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  devServer: {
    stats: 'errors-only',
  },
};
