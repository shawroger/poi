'use strict'
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (config, options) => {
  config.module.preLoaders = config.module.preLoaders || []

  if (options.eslint) {
    config.module.preLoaders.push({
      test: /\.js$/,
      loaders: ['eslint'],
      exclude: [/node_modules/],
      query: Object.assign({
        configFile: require.resolve('eslint-config-rem')
      }, options.eslint)
    })
  }

  if (options.gzip) {
    config.plugins.push(new CompressionPlugin(
      typeof options.gzip === 'object' ?
      options.gzip :
      {}
    ))
  }
}