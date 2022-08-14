const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 模板

const common = require('./webpack.common.js');
const { resolvePath } = require('../scripts/path.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
		],
	},
	devServer: {
		historyApiFallback: true,
		// proxy: {
		// 	'/api': 'http://localhost:8000',
		// },
		open: true,
		compress: true,
		hot: true,
		port: 8000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'tun react app',
			template: resolvePath('../../public/index.html'),
			filename: 'index.html',
			favicon: resolvePath('../../public/favicon.ico'),
		}),
	],
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
		minimize: false,
		concatenateModules: false,
		usedExports: false,
	},
});
