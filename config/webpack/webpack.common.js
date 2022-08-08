const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码打包分离
const { Configuration } = require('webpack')

const resolvePath = relativePath => path.resolve(__dirname, relativePath); // 根据相对路径获取绝对路径

/**
 * @type {Configuration}
 */
module.exports = {
	entry: resolvePath('../../src/js/index.jsx'),
	output: {
		path: resolvePath('../../dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(js|jsx)/,
				use: 'babel-loader',
			},
			{
				test: /\.(ts|tsx)/,
				use: 'ts-loader',
			},
		],
	},
	devServer: {
    hot: true,
    // open: true
  },
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		// alias: {
		// 	'@': resolvePath(__dirname, '../../src'),
		// },
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'react app',
			template: resolvePath('../../public/index.html'),
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: `[name].[hash:8].css`
		}),
	]
};
