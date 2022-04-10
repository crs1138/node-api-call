const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.cjs')
const hotModuleReplacement = new webpack.HotModuleReplacementPlugin()
const sourceMapDevToolsPlugin = new webpack.SourceMapDevToolPlugin()

const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'development',
    template: path.resolve(__dirname, '..', 'src/index.template.html'),
    filename: 'index.html',
})

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, '..', 'build'),
        },
    },
    plugins: [hotModuleReplacement, sourceMapDevToolsPlugin, htmlWebpackPlugin],
})
