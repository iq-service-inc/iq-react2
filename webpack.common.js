const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: ['@babel/polyfill', './src/index.jsx'],
	output: {
		path: __dirname + '/dist/',
		filename: '[name].[hash].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
					plugins: ['react-hot-loader/babel'],
				}
			},
			{
				test: /\.styl$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV !== 'production',
                        },
                    },
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
                    'stylus-loader'
                ]
			},
			{
				test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
				loader: 'file-loader',
				options: {
					limit: 20000
				}

			},
			{
                test: /\.ico$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 1
                }
			},
			{
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV !== 'production',
                        },
                    },
                    'css-loader'
                ]
            }
		]
	},
	resolve: {
		alias: {
			Config: `${__dirname}/config.json`,
			'react-dom': '@hot-loader/react-dom',
			'actions': `${__dirname}/src/actions`,
			'lib': `${__dirname}/src/lib`,
		},
		extensions: ['.jsx', '.js', '.styl']
	},
	plugins: [
		new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: `${__dirname}/www/index.html`,
            filename: "index.html",
            inject: "body"
        }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        // })
	],

	optimization: {
		splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: "async",
                    name: "modules",
                    minChunks: 2,
                    priority: 5
                },
                modules: {
                    test: /(react|react-dom|react-redux|react-router-dom|redux-saga)/,
                    chunks: "all",
                    name: "vendors",
                    priority: 10,
                },
                styles: {
                    test: /\.styl$/,
                    name: 'styles',
                    chunks: 'all',
                    enforce: true
                },
                cssvendors: {
                    test: /\.css$/,
                    name: 'vendors',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
	}
};