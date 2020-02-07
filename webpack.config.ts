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
            }
        ]
    },
    plugins: [new HTMLWepackPlugin({
        template: "./index.html"
    })]
}

export default config;