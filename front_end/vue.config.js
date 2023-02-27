const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}

// module.exports = {
//     chainWebpack: (config) => {
//         config.module
//             .rule('images')
//             .use('url-loader')
//             .tap(options => Object.assign({}, options, { name: '[name].[ext]' }));
//     },
//     css: {
//         extract: {
//             filename: '[name].css',
//             chunkFilename: '[name].css',
//         },
//     },
//     configureWebpack: {
//         output: {
//             filename: '[name].js',
//             chunkFilename: '[name].js',
//         }
//     }
// };