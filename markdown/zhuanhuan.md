# vue 导入.md文件转化

### 下载依赖

> npm i markdown-loader html-loader --save-dev

### 配置
> 在webpack.base.conf.js中加入
	{
	    test: /\.md$/,
	    use: [
	      {
		loader: "html-loader"
	      },
	      {
		loader: "markdown-loader",
		options: {
		}
	      }
	    ]
	 }
### 官方网址
> https://www.npmjs.com/package/markdown-loader