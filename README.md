## webpack 4.41.0
## demo1 起步
webpack基本使用

## demo2 管理资源
- 加载css
- 加载图片 xml csv

## demo3 管理输出

- [将 CSS 分离成单独的文件](https://github.com/webpack-contrib/mini-css-extract-plugin)

## demo4 模块热替换（HMR）

模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。
它允许在运行时更新各种模块，而无需进行完全刷新。

每点击一下add Item按钮就会在页面上增加一个item元素，奇数元素的背景色为粉色。
如果这时候改一下背景色：
页面会重新刷新，那么之前添加的item就都没了。

## demo5 tree shaking
用于描述移除 JavaScript 上下文中的未引用代码(dead-code)

**测试发现 mode为production的时候已经自动去掉**

## demo6 代码分离
插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
让我们使用这个插件，将之前的示例中重复的 lodash 模块去除

```js
optimization: {
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
```

- [optimization文档](https://www.webpackjs.com/plugins/split-chunks-plugin/#optimization-splitchunks-chunks-all)
- [bundle 分析(bundle analysis)](https://github.com/webpack-contrib/webpack-bundle-analyzer)
