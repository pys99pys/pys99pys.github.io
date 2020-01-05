const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const dev = process.env.NODE_ENV !== 'production';

require('dotenv').config();

const readEnvFile = () => {
  switch (process.env.NODE_ENV) {
    case 'local':
      return '.env.local';
    case 'development':
      return '.env.stage';
    case 'production':
      return '.env.prod';
    default:
      return null;
  }
};

module.exports = {
  mode: dev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      core: path.resolve(__dirname, 'src/core/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      pages: path.resolve(__dirname, 'src/pages/'),
    },
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new Dotenv({
      path: path.join(__dirname, readEnvFile()),
      systemvars: true,
    }),
  ],
  devServer: {
    inline: true,
    port: 7777,
    historyApiFallback2: true,
  },
  optimization: {
    minimize: true,
  },
  ...(dev && {
    devtool: 'source-map',
    devServer: {
      contentBase: './',
      publicPath: '/build',
    },
  }),
};
