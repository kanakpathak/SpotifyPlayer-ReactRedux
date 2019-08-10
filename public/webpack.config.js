const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
        // "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
