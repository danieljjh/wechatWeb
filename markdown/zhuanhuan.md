# vue ����.md�ļ�ת��

### ��������

> npm i markdown-loader html-loader --save-dev

### ����
> ��webpack.base.conf.js�м���
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
### �ٷ���ַ
> https://www.npmjs.com/package/markdown-loader