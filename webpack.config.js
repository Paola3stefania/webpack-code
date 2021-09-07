const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Capital letter para plugins
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devServer: { //para q siempre se carge autmaitcamente en vez de estar haciendo siempre el run build
    historyApiFallback: true,
    port: 4000,
    open: true,
    compress: true, //como se guarda en memoria lo comprimimos
    hot: true
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.js") // de donde tiene que leer el fichero
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].bundle.js' //va a  coger el name de la entrada en entry, en este caso main
  },
  plugins: [
    new HtmlWebpackPlugin({     //le voy a poner atributos y opciones, y donde esta el fichero que voy a escribir
      title: "Webpack Workshop Test",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html" //va usar el path del output
    }),

    new webpack.HotModuleReplacementPlugin(),

  ],
  //reglas para usar babel
  module: {
    rules: [
      {
        test: /\.js$/, //todos los ficheros js
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/, //ponga todos los ficherso de stylos juntos
        use: ["style-loader", "css-loader", "sass-loader"] //Array de loader en un cierto orden por temas de conf
      }
    ]
  }
}
