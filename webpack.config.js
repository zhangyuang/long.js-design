const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/long.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'long.js',
    library: 'Long',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  devtool: 'source-map'
}

// Also update bower.json
const bower = require('./bower.json')
const pkg = require('./package.json')
bower.version = pkg.version
require('fs').writeFileSync(path.join(__dirname, 'bower.json'), JSON.stringify(bower, null, 4))
