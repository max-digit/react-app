const path = require('path');
module.exports = {
  entry: './src/index.js',
  mode: "development",
  module: {
    rules: [
      {
        // should use babel-loader for all ts js tsx and jsx files
           test: /\.(ts|js)x?$/,
           exclude: /node_modules/,
           use: [
              {
                loader: 'babel-loader',
              },
           ],
        },
        {
          // should use style-loader and css-loader for all css files
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
       },
       {
          // v5 supports image loaders out of box
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
           test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
           type: 'asset/inline',
        },
      ]
     },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};