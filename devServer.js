var express = require('express'),
    path = require('path'),
    webpack = require('webpack'),
    devMiddleware = require('webpack-dev-middleware'),
    hotMiddleware = require('webpack-hot-middleware');

var config = require('./webpack.config.dev.js'),
    compiler = webpack(config),
    app = express();

app.use('/static', express.static(__dirname + '/static'));

// we only want hot reloading in development
console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    console.log('DEV ENVIRONMENT: Turning on WebPack Middleware...');
    app.use(devMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            chunks: false,
            'errors-only': true
        }
    }));
    app.use(hotMiddleware(compiler, {
        log: console.log
    }));

} else {
    console.log('PRODUCTION ENVIRONMENT');
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});


