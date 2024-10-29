const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point for the app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    publicPath: '/', // Public path for the app
  },
  resolve: {
    extensions: ['.web.js', '.js', '.jsx', '.json', '.ts', '.tsx'], // Resolve these extensions
    alias: {
      'react-native$': 'react-native-web', // Aliasing react-native to react-native-web
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Transpile JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Correct option for static file serving
    }, // Serve static files
    compress: true,
    port: 3000, // Port for the server
    historyApiFallback: true, // Enable for React Router
  },
};
