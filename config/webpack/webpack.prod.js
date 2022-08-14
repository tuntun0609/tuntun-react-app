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
			title: 'tun react app',
			template: resolvePath('../../public/index.html'),
			filename: 'index.html',
			favicon: resolvePath('../../public/favicon.ico'),
			hash: true,
			disableReactDevtools: true,
		}),
	],
	optimization: {
		splitChunks: {
			// chunks: 'all',
			minChunks: 2,
			cacheGroups: {
				default: {
					idHint: '',
					reuseExistingChunk: true,
					minChunks: 2,
					priority: -20,
				},
				defaultVendors: {
					idHint: 'vendors',
					reuseExistingChunk: true,
					test: /[\\/]node_modules[\\/]/i,
					priority: -10,
				},
			},
		},
	},
});
