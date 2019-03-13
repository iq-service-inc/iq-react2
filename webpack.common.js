const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['@babel/polyfill', './src/index.jsx'],
	output: {
		path: __dirname + '/dist/',
		filename: '[name].[hash].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.styl?/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('autoprefixer')(),
								require('cssnano')()
							]
						}
					},
					{
						loader: 'stylus-loader', options: { sourceMap: false }
					}
				]
			},
			{
				test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
				loader: 'file-loader',
				options: {
					limit: 10000
				}

			},
		]
	},
	resolve: {
		alias: {
			Config: `${__dirname}/config.json`
		},
		extensions: ['.jsx', '.js', '.styl']
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new HtmlWebpackPlugin({
			template: `${__dirname}/www/index.html`,
			filename: 'index.html',
			inject: 'body',
		}),

	],

	optimization: {
		splitChunks: {
			minSize: 3000,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					name: 'vendors',
					priority: 5,
				},
				modules: {
					test: /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router-dom|redux-saga)[\\/]/,
					chunks: 'initial',
					name: 'modules',
					priority: 10,
				},
				// dynamic import
			},
		}
	}
};