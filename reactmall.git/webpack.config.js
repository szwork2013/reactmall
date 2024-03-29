
'use strict';

var path = require('path');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://localhost:3080',
		path.resolve(__dirname, 'static/js/mall.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/, // Only .css files
			loader: 'style!css' // Run both loaders
		}]
	}
};