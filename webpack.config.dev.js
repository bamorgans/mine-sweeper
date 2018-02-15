var webpack = require('webpack');
var express = require('express');
var path = require('path');
module.exports = {
    cache: false,
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: [
        '../index.js',
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/ ],
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
        ],

        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test:[/\.js$/, /\.jsx$/ ],
                exclude: /node_modules/,
                loader: ['react-hot','babel-loader'],
            }
        ]
    }
};
/*  get this working
module.exports = {
    cache: false,
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: [
        '../index.js',
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                enforce: "pre",
                loader: 'eslint-loader'
            },
            {
                test: [/\.js$/, /\.jsx$/ ],
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader',
                ],
            },
        ]
    }
};
 */
