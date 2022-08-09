const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css 代码打包分离

const common = require('./webpack.common.js');
const { resolvePath } = require('../scripts/path');

module.exports = merge(common, {
	mode: 'production',
	devtool: false,
	module: {
		rules: [],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css',
		}),
		new HtmlWebpackPlugin({
			title: 'react app',
			template: resolvePath('../../public/index.html'),
			filename: 'index.html',
			favicon: resolvePath('../../public/favicon.ico'),
			hash: true,
			disableReactDevtools: true,
		}),
	],
});
