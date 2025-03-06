const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Switch to 'production' for production builds
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build/dist'),
    },
    port: 3000,
    open: true
  },
  module: {
    rules: [
      // Process TypeScript files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // Process SCSS files
      {
        test: /\.scss$/,
        use: [
          // For production you might switch to MiniCssExtractPlugin.loader
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'build/dist'),
    clean: true // Cleans output directory before each build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // This copies the entire public folder to build/public
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'build/public')
        }
      ]
    }),
    // Optionally extract CSS into a separate file (often used in production)
    // new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
  ]
};
