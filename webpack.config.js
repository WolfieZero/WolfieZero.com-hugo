const path = require('path');
const spawn = require('child_process').spawn;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourceMap = true;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'scripts/app.js',
    },
    devtool: 'source-map',
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 1337,
        watchContentBase: true,
        before: () => {
            spawn('hugo', ['-d', 'public', '--ignoreCache', '-v', '-b', '/', '-w', '--cleanDestinationDir'], { stdio: 'inherit' });
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        }, {
            // CSS
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        root: '/',
                        minimize: true,
                        sourceMap,
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap,
                        includePaths: ['node_modules'],
                    },
                }],

            }),
        }],
    },
    plugins: [
        // new DashboardPlugin(),
        new UglifyJSPlugin({
            sourceMap,
        }),
        new ExtractTextPlugin({
            filename: 'styles/app.css',
        }),
    ],
};
