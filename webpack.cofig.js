/* eslint-disable no-undef */
// eslint-disable-next-line strict
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    }
};
