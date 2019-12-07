module.exports = {
  test: /\.(html)$/,
  use: {
    loader: "html-loader",
    options: {
      attrs: [":data-src"]
    }
  }
}

var path = require('path');

module.exports = {
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};