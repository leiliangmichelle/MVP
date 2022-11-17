const path = require("path");
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client/src/index.js"),
  output: {
    filename: 'main.js',
    path:path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: "eval-cheap-module-source-map"
  // [devServer] configuration for the live server including port
}

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "client/src/index.js"),
  output: {
    filename: 'main.js',
    path:path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        }
    ]
  }
};






