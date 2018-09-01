const path = require('path')

const rootPath = path.resolve(__dirname, '../')
const sourcePath = path.resolve(rootPath, 'src')
const staticPath = path.resolve(rootPath, 'static')
const bundleDir = path.resolve(rootPath, 'dist/')

const isDevEnv = () => process.env.NODE_ENV === 'development'

module.exports = {
  rootPath,
  sourcePath,
  staticPath,
  bundleDir,
  isDevEnv,
}
