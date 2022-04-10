const path = require('path')
module.exports = {
    entry: {
        app: path.resolve(__dirname, '..', 'src/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '..', 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-react'] },
                    },
                ],
                resolve: { extensions: ['.js', '.jsx'] },
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'stylus-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    target: 'web',
}
