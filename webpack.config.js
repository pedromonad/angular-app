var path = require('path');
module.exports = {
  context: __dirname + '/src',
  entry: './app.js',
  output: {
  	path: __dirname + '/src',
  	filename: 'bundle.js'
  }
};