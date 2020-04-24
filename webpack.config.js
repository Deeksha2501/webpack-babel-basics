var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ExtractPlugin = new ExtractTextPlugin({
    filename : 'main.css',

});

module.exports = {
    entry : './src/js/app.js',
    output : {
        path : path.resolve(__dirname , 'dist' ),
        filename : 'bundle.js',
        publicPath : '/dist'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : [
                    {
                        loader : 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test : /\.scss$/,
                use : ExtractPlugin.extract({
                    use : ['css-loader' , 'sass-loader']
                })
            }
        ]
    },
    plugins : [
        ExtractPlugin
    ]
};