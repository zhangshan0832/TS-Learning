const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    plugins: [
        // 数组 放所有webpack插件
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            // filename: 'index.html', //打包后的文件名
            // config: config.template,
            // minify: {
            //     removeAttributeQuotes: false, //是否删除属性的双引号
            //     collapseWhitespace: false, //是否折叠空白
            // },
            // hash: true //是否加上hash，默认是 false
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        })
    ],
    devServer: {
        contentBase: './dist',
        port: 8089, //默认是8080
        host: 'localhost',
        // quiet: false, //默认不启用
        // inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
        stats: "errors-only", //终端仅打印 error
        // overlay: false, //默认不启用
        // clientLogLevel: "silent", //日志等级
        compress: true //是否启用 gzip 压缩
    },
}