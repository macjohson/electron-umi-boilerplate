const path = require('path');
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require('copy-webpack-plugin');

const translateEnvToMode = (env) => {
    if (env === "production") {
        return "production";
    }
    return "development";
};

module.exports = env => (
    {
        entry:"./src/main/index.js",
        node: {
            __dirname: false,
            __filename: false
        },
        output:{
            path: path.resolve(__dirname,"app"),
            filename:"main.js"
        },
        plugins:[
            new CopyPlugin([
                {from:"src/main/preload",to:"preload"}
            ])
        ],
        mode:translateEnvToMode(env),
        externals: [nodeExternals()],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
);
