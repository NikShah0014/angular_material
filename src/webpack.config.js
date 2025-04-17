const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   