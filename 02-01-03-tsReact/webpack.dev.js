const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.tsx"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: "bundle.[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3040,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}