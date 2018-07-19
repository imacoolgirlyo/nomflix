const path = require('path');

module.exports = {
    entry : './index.js',
    mode : 'development',
    devServer: {
        contentBase:'./output' ,
        compress : true,
        port : 9000
        },
    output : {
        filename : 'awesome-output.js',
        path : path.resolve(__dirname, 'output')
    }

}