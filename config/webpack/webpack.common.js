/* eslint-disable no-unused-vars */
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码打包分离
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Configuration } = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackBar = require('webpackbar');

const { isDevelopment } = require('../scripts/env.js');
const { resolvePath } = require('../scripts/path');
const { getEntry } = require('../scripts/getEntry');
const theme = require('../../src/theme');

// 默认开启css module
const getCssCommonLoaders = (options = {}) => {
	const { isCssModule = true } = options;
	return [
		isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				modules: {
					auto: isCssModule ? undefined : false,
					exportLocalsConvention: 'dashes',
				},
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
	entry: getEntry(),
	output: {
		path: resolvePath('../../dist'),
		filename: '[name].bundle.js',
		assetModuleFilename: 'images/[hash][ext][query]',
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
				exclude: [/src/],
				use: [
					...getCssCommonLoaders({
						isCssModule: false,
					}),
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								modifyVars: {
									...theme,
								},
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.less$/,
				exclude: [/node_module/],
				use: [
					...getCssCommonLoaders({
						isCssModule: false,
					}),
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					},
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
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': resolvePath('../../src'),
			'@public': resolvePath('../../public'),
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ESLintPlugin(),
		new WebpackBar(),
	],
};
