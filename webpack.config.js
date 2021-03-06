const path = require('path');
const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};
module.exports = {
  mode: "development",
  entry: {
    app: PATHS.app
  },
  devServer: {
    contentBase: PATHS.build,
    index: 'index.html',
    port: 9000,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};