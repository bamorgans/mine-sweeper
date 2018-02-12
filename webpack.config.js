var express = require('express');
var path = require('path');
module.exports = {
    cache: false,
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: [
        '../index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
    ],
    devServer: {
        contentBase: './', //disk location
        watchContentBase: true,
        setup(app){
            app.use('static/', express.static('/static/'));
        }
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
                loader: 'babel-loader'
                ,
                query: {
                }
            }
        ]
    }
};
