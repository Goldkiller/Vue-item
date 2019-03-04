const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('components', path.resolve(__dirname, './src/components'))
            .set('pages', path.resolve(__dirname, './src/pages'))
            .set('styles', path.resolve(__dirname, './src/assets/styles'))
            .set('utils', path.resolve(__dirname, './src/utils'))
    },
    // devServer: {
    //     proxy: {
    //         '/ajax': {
    //             target: 'http://m.maoyan.com',
    //             changeOrigin: true
    //         }

    //     },
    // },

    //css:'Module'
}