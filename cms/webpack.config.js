//https://webpack.js.org/guides/migrating

const path = require('path')
const webpack = require('webpack')

const context = path.join(__dirname, './src')

module.exports = {
    context,

    entry: [
        './index.jsx',
    ],

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    module: {
      rules: [
        { test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { modules: false } }
          ],
          exclude: /node_modules/
        },
        { test: /\.(jpe?g|png|gif)$/i,
          use: [
            { loader: 'file-loader',
              options: {
                hash: 'sha512',
                digest: 'hex',
                name: 'assets/[hash].[ext]'
              },
            },
            { loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                optimizationLevel: 7,
                interlaced: false,
              }
            }
          ],
          exclude: /node_modules/
        },
        { test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['env', {
                modules: false,
                targets: {
                  'browsers': ['last 2 versions']
                }
              }],
              'stage-0',
              'react'
            ],
            plugins: [
              'transform-runtime',
              'react-hot-loader/babel',
              //path.join(__dirname, 'babelRelayPlugin')
            ]
          },
          exclude: /node_modules/
        },
        { test: /\.html$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          },
          exclude: /node_modules/
        },
        { test: /\.worker\.js$/,
          loader: 'worker-loader',
          exclude: /node_modules/
        },
        { test: /\.(eot|woff)$/i,
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: 'assets/[hash].[ext]'
          },
          exclude: /node_modules/
        },
      ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.SourceMapDevToolPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'vendor.bundle.js'
        }),
/*        new webpack.DefinePlugin({
          'process.env': JSON.stringify({
            NODE_ENV:    process.env.NODE_ENV,
            ENV_NAME:    process.env.ENV_NAME,
            GRAPHQL_URL: process.env.GRAPHQL_URL,
          })
        }) */
     ],

    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 8080,
        contentBase: './dist',
        hot: true
    }

}
