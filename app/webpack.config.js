const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

module.exports = {
    entry: __dirname + "/src/index.jsx", // webpack entry point. Module to start building dependency graph
    output: {
        path: __dirname + '/src/build', // Folder to store generated bundle
        filename: '[name].js',  // Name of generated bundle after build
        publicPath: '/' // public URL of the output directory when referenced in a browser
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {  // where we defined file patterns and their loaders
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['react']
                        }
                    }
                ],
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [  // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            template: __dirname + "/src/view/index.html",
            inject: 'body'
        })
    ],
    devServer: {  // configuration for webpack-dev-server
        static: './app/src/view',  //source of static assets
        port: 3000, // port to run dev-server
    }
};