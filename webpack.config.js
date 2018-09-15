const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title:'my fisrt app',
            template:'index.html'
        })
    ]
}