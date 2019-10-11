const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack');
const path = require('path')
module.exports={
  // mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          "file-loader"
        ]
      },
      {
        test: /\.xml$/,
        use: [
          "xml-loader"
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          "csv-loader"
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hmr'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
