const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

const isDev = process.env.NODE_ENV !== 'production'
module.exports = {
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devtool: isDev ? 'source-map' : '',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.json', 'css']
    },
    mode: isDev ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'ts-loader'
                    }
                ],
                include: path.resolve('src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
}