const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.cjs')
const sourceMapDevToolsPlugin = new webpack.SourceMapDevToolPlugin()

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join('..', 'build'),
        },
        devMiddleware: {
            index: true,
            mimeTypes: { phtml: 'text/html' },
            writeToDisk: true,
        },
    },
    plugins: [sourceMapDevToolsPlugin],
    output: {
        publicPath: '/',
    },
})
