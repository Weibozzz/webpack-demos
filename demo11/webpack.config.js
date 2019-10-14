const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过 npm 安装
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    idnex: './src/main.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
  ],
  optimization: {
    // runtimeChunk: {
    //   name: 'manifest'
    // },
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
