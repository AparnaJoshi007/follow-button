var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, ''),
    filename: 'cyberconnect.min.js',
  },
  mode: 'production',
};