const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //Inform webpack we are building a bundle for nodeJS
    // for nodeJS, rather than for browser
    target:"node",
    //tell the root file
    entry: './src/index.js',

    //tell webpack where to put the budnle file
    output:{
        filename:"bundle.js",
        // resolve current path name and make a directory named build, in build, create bundle.js
        path: path.resolve(__dirname,'build')
    },

    externals : [webpackNodeExternals()]
    
}

module.exports = merge(baseConfig,config);