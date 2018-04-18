//Dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

//Config
const appOutputPath = "../dev/public";

//Modules
const appConfig = {
	entry: {
		app: './src/app/js/index.jsx',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, appOutputPath),
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: './src/app/index.html', to: './index.html'},
		]),
	]
};


module.exports = [appConfig]



