const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['./src/js/index.js'],

  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development',

  plugins: [
    new HTMLWebPackPlugin({
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/img',
          to: './assets/img'
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff?2)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource'
      }
    ]
  }
}
