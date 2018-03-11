const path = require('path');

module.exports = {
    //tell the root file
    entry: './src/client/client.js',

    //tell webpack where to put the budnle file
    output: {
        filename: "bundle.js",
        // resolve current path name and make a directory named public, in public, create bundle.js
        path: path.resolve(__dirname, 'public')
    },

    //tell webpack to run babel on every file it runs throught
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            targets: {
                                browsers: ['last 2 versions']
                            }
                        }]
                    ]
                }
            }
        ]
    }
}