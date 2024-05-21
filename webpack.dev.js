const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/main.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ['src/index.html'],
    },
});