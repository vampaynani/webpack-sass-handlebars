var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/app.js', 
  	'./styles/main.scss'
  ],
  output: {
  	filename: 'build/bundle.js'
  },
  module: {
  	rules: [
  		{
  			test: /\.hbs$/,
  			use: 'handlebars-loader'
  		},
  		{
  			test: /\.(sass|scss)$/,
  			use: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
  		}
  	]
  },
  plugins: [
  	new webpack.ProvidePlugin({
  		$: 'jquery',
  		jQuery: 'jquery'
  	}),
  	new webpack.ProvidePlugin({
  		algoliasearch: 'algoliasearch'
  	}),
  	new ExtractTextPlugin({
  		filename: 'build/bundle.css',
  		allChunks: true
  	})
  ]
};
