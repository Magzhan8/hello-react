const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017', 'stage-0', 'react'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ],
};
