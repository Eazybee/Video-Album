const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src', 'index.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    alias: {
      '<src>': path.resolve(__dirname, '../src'),
      '<pages>': path.resolve(__dirname, '../src/components/pages'),
      '<components>': path.resolve(__dirname, '../src/components'),
      '<routes>': path.resolve(__dirname, '../src/routes'),
      '<styles>': path.resolve(__dirname, '../src/styles')
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public', 'index.html'),
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-arrow-functions'
            ]
          }
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader'],
      },
    ]
  }
};
