const path = require('path')

//PLUGINS Y MIMIFICADORES DE CSS Y SCSS/SASS
//Para reducir el tamaño de las hojas de estilo de nuestro proyecto

const htmlWebPackPlugin = require('html-webpack-plugin')//Para el template del HTML que va a usar webpack
const miniCssExtractOlugin = require('mini-css-extract-plugin')//Para reducir los CSS
const {SourceMapDevToolPlugin} = require('webpack')//Para conocer el Source Map de nuestro proyecto
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//Configuracion del puerto
const port = process.env.PORT || 3000

//Exportar configuracion de WebPack
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    context: path.resolve(__dirname),
    devServer:{
        port,
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            //Reglas para archivos de JS y JSX
            //Tienen que pasar el LINTING para poder pasar
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                    'source-map-loader'
                ]
            },
            //Reglas para archivos JS y JSX
            //Reglas de Babel ES y JSX
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react'
                        ]
                    }
                }
            },
            //Reglas para archivos CSS y SASS y SCSS para minificarlas y cargarlas en el bundle
            {
                test: /(\.css|\.scss)$/,
                use:[
                        { loader: MiniCssExtractPlugin.loader },
                        { loader:'css-loader' },
                        { loader:'sass-loader' }
                    ]
                
                
            },
            //Reglas para los archivos de imagenes
            {
                test: /\.(png|.peg|.gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        //Template HTML
        new htmlWebPackPlugin(
            {
                template: './public/index.html'       
            }
        ),
        new miniCssExtractOlugin(
            {
                filename: './css/styles.css'
            }
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map'
            }
        )
    ],
    resolve: {
        extensions: ['.js','.jsx','.css','.scss',',sass'],
        modules: [
            'node_modules'
        ]
    }
}