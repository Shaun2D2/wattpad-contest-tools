const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
                <html>
                <body>
                    <div id="app"></div>
                </body>
                </html>
            `,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
