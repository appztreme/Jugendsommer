module.exports = {
  entry: './client/src/main.js',
  output: {
    path: './client/dist/',
    filename: "bundle.js",
    publicPath: '/'
  },
  devtools: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
