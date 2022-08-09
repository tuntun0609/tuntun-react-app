/* eslint-disable no-unused-vars */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码打包分离
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { Configuration } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackBar = require('webpackbar');

const { isDevelopment, isProduction } = require('../scripts/env.js');
const { resolvePath } = require('../scripts/path');

const getCssCommonLoaders = (options = {}) => {
	const { isCssModule = true } = options;
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
			{
				test: /\.(jpg|png|gif|svg|ico$)/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 22228,
							outputPath: 'image',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': resolvePath(__dirname, '../../src'),
		},
	},
	mode: isDevelopment ? 'development' : 'production',
	plugins: [
		new CleanWebpackPlugin(),
		new ESLintPlugin(),
		new WebpackBar(),
	],
};
