var webpack = require('webpack');
require('babel-loader');

module.exports = {
    entry: {
        'detect-font': ['./src/detect-font.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: 'detectFont',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
