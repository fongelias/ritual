//Dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

//Config
const appOutputPath = "../prod/public";
const lambdaOutputPath = "../prod/lambdas";

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
		new webpack.DefinePlugin({ 
			"process.env": { NODE_ENV: "'production'" }
		}),
	]
};

const addUserLambdaConfig = {
	entry: {
		addUser: './src/lambdas/addUser.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, lambdaOutputPath),
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
		]
	},
	plugins: [
		new webpack.DefinePlugin({ 
			"process.env": { NODE_ENV: "'production'" }
		}),
	]
};


module.exports = [appConfig, addUserLambdaConfig]



