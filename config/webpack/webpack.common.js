/* eslint-disable no-unused-vars */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码打包分离
const { Configuration } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const { isDevelopment, isProduction } = require('../scripts/env.js');

const resolvePath = relativePath => path.resolve(__dirname, relativePath); // 根据相对路径获取绝对路径

const getCssCommonLoaders = (options = {}) => {
	const { isCssModule = true } = options;
	console.log(options);
	return [
		isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				modules: isCssModule,
				sourceMap: isDevelopment,
			},
		},
		'postcss-loader',
	];
};

/**
 * @type {Configuration}
 */
module.exports = {
	entry: resolvePath('../../src/js/index.jsx'),
	// entry: resolvePath('../../src/ts/index.tsx'),
	output: {
		path: resolvePath('../../dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: [/node_module/],
				use: [
					...getCssCommonLoaders(),
				],
			},
			{
				test: /\.css$/,
				exclude: [/src/],
				use: [
					...getCssCommonLoaders({
						isCssModule: false,
					}),
				],
			},
			{
				test: /\.less$/,
				use: [
					...getCssCommonLoaders(),
					'less-loader',
				],
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					...getCssCommonLoaders(),
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
		open: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': resolvePath(__dirname, '../../src'),
		},
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'react app',
			template: resolvePath('../../public/index.html'),
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css',
		}),
		new ESLintPlugin(),
	],
};
