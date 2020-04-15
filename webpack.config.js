const webpack = require('webpack');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}, argv) => {
  const isDevelopment = argv.mode === 'development';

  let config = {
    entry: ['./src/client/index.js', './src/client/styles/main.scss'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /node_modules/,
          use: ['file-loader']
        }
      ]
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css'
      })
    ]
  };

  if (isDevelopment) {
    config.devtool = 'source-map';
    config.output.path = __dirname + '/public';
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devServer = {
      contentBase: './public',
      hot: true
    };
  } else {
    config.plugins.push(new uglifyJsPlugin());
  }

  return config;
};
