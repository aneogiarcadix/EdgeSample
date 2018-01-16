var path = require('path');
module.exports ={
    entry:['babel-polyfill','./server.tsx'],
    output:{
        path: path.resolve(__dirname,''),
        filename:'server.js'
    },
    module:{
        loaders:[
            {
                test: /\.tsx?$/,
                loader:'ts-loader',
            }
        ]
    },
    target: 'node',
    externals: {
        'edge-js': 'require("edge-js")'
    }
}