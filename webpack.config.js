const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules | bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),


    //   The publicPath property is a special property that helps us with our dev-server. 
    //   It specifies the public URL of the the directory — at least as far as webpack-dev-server will know or care.
    //    If this is set incorrectly, you’ll get 404’s as the server won’t be serving your files from the correct location!

      publicPath: "/dist/",
      filename: "bundle.js"
    },


    // We set up webpack-dev-server in the devServer property. 
    // This doesn’t require much for our needs — just the location we’re serving static files
    //  from (such as our index.html) and the port we want to run the server on.
    //  Note that devServer also has a publicPath property. 
    //  This publicPath tells the server where our bundled code actually is.


    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3003,
      publicPath: "http://localhost:3003/dist/",
      hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };