const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    sourceMapFilename: '[file].map',
    library: 'SupersetPluginChartDebugger',
    libraryTarget: 'umd',
    umdNamedDefine: false
  },
  externals: {
    '@kristw-lab-superset/core': {
      root: 'SupersetCore',
      commonjs2: '@kristw-lab-superset/core',
      commonjs: '@kristw-lab-superset/core',
      amd: '@kristw-lab-superset/core'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

let config;
const prodConfig = require('lazynerd-devtools/config/webpack/webpack.config.prod.js');
config = merge(prodConfig, commonConfig);
config.plugins = [];

module.exports = config;