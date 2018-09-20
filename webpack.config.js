const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const proxy = require('http-proxy-middleware');
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        "presets": ['es2015']
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:3003',
                pathRewrite: { '^/api':''},
                changeOrigin: true
            },
        },
        port:9000
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@':path.resolve(__dirname,'src')
        },
        extensions:['.js','.json','.css','.vue']
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title:'my fisrt app',
            template:'index.html'
        })
    ]
}