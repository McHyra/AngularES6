var webpack = require('webpack');
var path = require('path');

var APP = path.join(__dirname, '/app');

module.exports = {
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './js/core/bootstrap.js']
    },
    output: {
        path: APP,
        filename: '[name].bundle.js'
    },
    resolve: {
        root: APP
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel',
                exclude: '/node_modules|bower_components/'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};