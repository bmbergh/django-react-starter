var path = require('path');
var webpack = require('webpack');
var tracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "bundle.[name].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      { //npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      { //npm install --save-dev style-loader css-loader
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      },
      {
        test:/\.json$/,
        loader:'json'
      }
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
