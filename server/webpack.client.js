const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    //tell the root file
    entry: './src/client/client.js',

    //tell webpack where to put the budnle file
    output: {
        filename: "bundle.js",
        // resolve current path name and make a directory named public, in public, create bundle.js
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig,config);