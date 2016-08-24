const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ENV = process.env.npm_lifecycle_event === 'build'  


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/client/index.ejs',
	hash: true,
	filename: 'index.html',
	inject: 'body'
});

module.exports ={
    // context: '__dirname',
    entry: {
        app: path.join(__dirname, 'client', 'index'),
    },
    devtool: ENV ? false : 'eval-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: ENV? '[name].min.[hash].js' : '[name].[hash].js',
        chunkFilename: '[hash].js',
        publicPath: '/'
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
                exclude: /node_modules/,
                loaders: ['react-hot','babel-loader'],
            }
        ]
    },

    plugins: ENV ? [
        new CleanWebpackPlugin([path.join(__dirname, 'dist')], {
            root: process.cwd()
        }),
        HTMLWebpackPluginConfig,
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: true
            }
        })
    ] : [
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin()
    ]
}
