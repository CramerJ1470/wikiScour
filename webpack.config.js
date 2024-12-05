const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            zlib: false,
            buffer: false,
            stream: require.resolve('stream-browserify'),
            process: require.resolve('process/browser'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser',
        }),
    ],
};