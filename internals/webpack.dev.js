//Dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
		publicPath: '/'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/app/index.html'
		}),

	]
};


module.exports = [appConfig]



