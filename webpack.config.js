const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");

const outputDirectory = "dist";

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          }
        }]
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.join(__dirname, 'public')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};