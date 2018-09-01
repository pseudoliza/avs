const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const output = require('./webpack/parts/output')
const { isDevEnv, staticPath, sourcePath } = require('./webpack')

const htmlWebpackPluginDevConfig = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  decodeEntities: true,
  html5: true,
  processScripts: ['text/html'],
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: true,
}

const config = {
  entry: ['react-hot-loader/patch', path.join(path.resolve(sourcePath), '/index.js')],
  output,
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[folder]__[name]__[hash].[ext]',
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: isDevEnv(),
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  devtool: isDevEnv() ? 'cheap-module-eval-source-map' : 'nosources-source-map',
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(sourcePath),
      static: path.resolve(staticPath),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.ejs',
      inject: 'body',
      minify: isDevEnv() ? htmlWebpackPluginDevConfig : {},
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    isDevEnv() ?
      new Dotenv({
        path: './.env',
      }) :
      new webpack.DefinePlugin({
        'process.env.SENDBIRD_APP_ID': JSON.stringify(process.env.SENDBIRD_APP_ID),
        'process.env.SENDBIRD_SHARED_SECRET': JSON.stringify(process.env.SENDBIRD_SHARED_SECRET),
      }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '/static'),
    hot: true,
    open: true,
    historyApiFallback: true,
  },
}

module.exports = config
