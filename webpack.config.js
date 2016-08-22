const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PROD = true

module.exports ={
    // context: '__dirname',
    entry: {
        app: path.join(__dirname, 'client', 'App'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: PROD? '[name].min.[hash].js' : '[name].[hash].js',
        chunkFilename: '[hash].js',
        piblicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        colors: true,
        historyApiFallback: true,
        progress: true,
        inline: true,
        hot: true,
        port: 4000
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader!react-hot'
            }
        ]
    }
}
