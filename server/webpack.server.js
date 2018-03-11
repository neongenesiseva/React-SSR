const path = require('path');

module.exports = {
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

    //tell webpack to run babel on every file it runs throught
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{
                            targets: {
                                browsers:['last 2 versions']
                            }
                        }]
                    ]
                }
            }
        ]
    }
}