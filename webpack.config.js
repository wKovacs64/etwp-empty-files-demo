const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'production';
const isProd = mode === 'production';

module.exports = {
  mode,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: isProd, debug: !isProd }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'dependency',
      inject: 'body',
    }),
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
  ],
};
