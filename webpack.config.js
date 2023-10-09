// Import path for resolving file paths
var path = require('./src');
module.exports = {
  // Specify the entry point for our app.
  entry: [
    path.join(__dirname, 'load_json.js')
  ],
  // Specify the output file containing our bundled code
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    /**
      * Tell webpack how to load 'json' files. 
      * When webpack encounters a 'require()' statement
      * where a 'json' file is being imported, it will use
      * the json-loader.  
      */
    loaders: [
      {
        test: /\.json$/, 
        loaders: ['json']
      }
    ]
  }
}