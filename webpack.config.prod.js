const express = require('express');
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'source-map',
    entry: [
        '../index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            }
        })
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
                loader: ['babel-loader'],
            }
        ]
    }
};
