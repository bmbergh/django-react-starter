var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // It moves every css requires/imports into a separate css output file
var BundleTracker = require('webpack-bundle-tracker');                                                                //(So your styles are no longer inlined into the JavaScript
var config = require('./webpack.config.js');

  config.plugins = config.plugins.concat([
    // Spits out some stats about webpack compilation process to a file.
    //new BundleTracker({filename: './webpack-stats-prod.json'}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }}),
    new webpack.optimize.OccurenceOrderPlugin(), // Webpack will analyze and prioritize often used modules assigning them the smallest ids
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.DedupePlugin(), // prevents the inclusion of duplicate code into your bundle and instead applies a copy of the function at runtime
    new webpack.optimize.UglifyJsPlugin({ // UglifyJS is a JavaScript compressor/minifier
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ])
  config.module.loaders.push(
    { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' }
  )
module.exports = config;