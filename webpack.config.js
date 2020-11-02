const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const core = {
  watch: true,
  entry:
  {
    themejs: './src/scripts/theme.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'theme.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader?-url',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: '../assets',
          flatten: true,
        },
        {
          from: 'src/config',
          to: '../config',
        },
        {
          from: 'src/layout',
          to: '../layout',
        },
        {
          from: 'src/locales',
          to: '../locales',
        },
        {
          from: 'src/sections',
          to: '../sections',
        },
        {
          from: 'src/snippets',
          to: '../snippets',
        },
        {
          from: 'src/templates',
          to: '../templates',
        },
        {
          from: 'src/svgs',
          to: '../snippets/[name].liquid',
        },
      ],
    }),
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = core;
