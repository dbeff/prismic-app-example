const path = require("path");
const config = {
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/scripts/'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            }, {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    }
};

module.exports = config;