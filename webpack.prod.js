const merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: __dirname + '/dist/',
        filename: '[name].[chunkhash].js',
        publicPath: '/dist/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': 'production'
            }
        })
    ],

    optimization: {
        //minimize: true,
        minimizer: [
          new UglifyJsPlugin()
        ]
      }
})