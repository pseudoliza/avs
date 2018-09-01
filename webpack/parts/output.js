const { bundleDir, isDevEnv } = require('../webpack')

// @todo add hash
const config = {
  filename: 'bundle.js',
  path: bundleDir,
}

if (isDevEnv()) {
  config.filename = 'js/[name].[hash].js'
  config.publicPath = '/'
}

module.exports = config
