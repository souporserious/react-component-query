var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
  entry: {
    index: [
      'webpack/hot/dev-server',
      path.join(__dirname, 'example/index.jsx')
    ]
  },
  output: {
    path: path.join(__dirname, 'example'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: 'style!css!postcss!sass?sourceMap' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [],
  devServer: {
    contentBase: './example',
    inline: true
  }
};

if (TARGET === 'minify') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

module.exports = config;
