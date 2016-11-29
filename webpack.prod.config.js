var path = require('path');
var webpack = require('webpack');
var banner = require('./webpack.banner');
var TARGET = process.env.TARGET || null;

var externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-motion': {
    root: 'ReactMotion',
    commonjs2: 'react-motion',
    commonjs: 'react-motion',
    amd: 'react-motion'
  },
  'react-measure': {
    root: 'Measure',
    commonjs2: 'react-measure',
    commonjs: 'react-measure',
    amd: 'react-measure'
  }
};

var config = {
  entry: {
    index: './src/react-component-query.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-component-query.js',
    sourceMapFilename: 'react-component-query.sourcemap.js',
    library: 'ReactComponentQuery',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: externals
};

if (TARGET === 'minify') {
  config.output.filename = 'react-component-query.min.js';
  config.output.sourceMapFilename = 'react-component-query.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactMotion']
    }
  }));
}

module.exports = config;
