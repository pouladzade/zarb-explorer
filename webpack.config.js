
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, "/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.proto$/,
        use: [
          {
            loader: 'webpack-grpc-web-loader',
            options: {
              protoPath: path.resolve(__dirname, './proto'),
            },
          },
        ],
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      },
      
      ],
     
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: 9000,
  },

  infrastructureLogging: {
    level: 'error',
    debug: /GrpcWebPlugin/,
  },
};