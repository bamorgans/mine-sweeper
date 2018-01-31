module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './index.js',
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
    ],
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
