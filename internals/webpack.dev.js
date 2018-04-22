//Dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
			{test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader')},
			{test: /\.svg$/, use: [{loader: "babel-loader"}, {loader: "react-svg-loader", options: {jsx: true }}]},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/app/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].[chunkhash].css',
			allChunks: true
		}),
	]
};


module.exports = [appConfig]



