const path = require('path');
const devConfig = require('./webpack.dev');
const productionConfig = require('./webpack.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODE = process.env.npm_lifecycle_event;

const PATHS = {
    entry : path.resolve(__dirname , "../src/index.js") 
};


const commonConfig = {
    entry : ["babel-polyfill",PATHS.entry],
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude : /(node_modules)/,
                use : {
                    loader: "babel-loader"
                }

            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src/index.html"),
            filename: "index.html"
        })
    ]
};

if(MODE == "dev"){
    const both = Object.assign({}, commonConfig, devConfig);
    module.exports = both;
    
} else if(MODE == "build"){
    module.exports = Object.assign({},commonConfig, productionConfig );

}
