import webpack = require("webpack");
import HTMLWepackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    entry: "./App/index.tsx",
    mode: "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)/,
                loader: "babel-loader",
                exclude: /\node_module/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
        ]
    },
    plugins: [new HTMLWepackPlugin({
        template: "./index.html"
    })]
}

export default config;