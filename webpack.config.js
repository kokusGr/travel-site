module.exports = {
  entry: {
    app: "./app/assets/scripts/app.js",
    vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: __dirname + '/app/temp/scripts/',
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};