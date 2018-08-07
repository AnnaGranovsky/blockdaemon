const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules\/bootstrap/,
        loader: 'style-loader!css-loader'
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000' 
      },
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
        use: [{ loader: 'babel-loader', options: { presets: ['es2015', 'react'] } }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', 'jsx'],
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
