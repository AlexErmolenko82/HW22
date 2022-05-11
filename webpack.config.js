const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ToDo application",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  cache: false
};
