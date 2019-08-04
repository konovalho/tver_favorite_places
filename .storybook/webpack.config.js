const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve('./src/common/components'),
      '@blocks': path.resolve('./src/common/blocks'),
      '@constants': path.resolve('./src/common/constants'),
      '@models': path.resolve('./src/common/models'),
      '@pages': path.resolve('./src/common/pages'),
      '@layouts': path.resolve('./src/common/layouts'),
      '@': path.resolve('./src/common'),
      '@stubs': path.resolve('./src/common/stubs'),
      '@utils': path.resolve('./src/common/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'stylus-loader?resolve url',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          import: [
            path.resolve(process.cwd(), './src/common/stylesheets/variables.styl'),
            path.resolve(process.cwd(), './src/common/stylesheets/mixins.styl'),
            path.resolve(process.cwd(), './src/common/stylesheets/global.styl'),
          ],
        },
      },
    }),
  ],
};
