const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};