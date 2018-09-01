import { babel } from 'docz-plugin-babel6'
import { createPlugin } from 'docz-core'
import merge from 'webpack-merge'
import path from 'path'
import pkg from './package.json'
import webpackConfig from './webpack.config'

const pathResolver = () => {
  const resolve = {
    ...webpackConfig.resolve,
  }
  resolve.alias.fixtures = path.resolve('./fixtures')

  createPlugin({
    modifyBundlerConfig: bundler =>
      merge(bundler, { resolve }),
  })
}

// @todo docz use file-loader for svg, but we use svg-inline-loader
// https://github.com/pedronauck/docz/blob/master/packages/docz-core/src/bundlers/webpack/loaders.ts#L113
const configureRules = () =>
  createPlugin({
    modifyBundlerConfig: (config) => {
      const newConfig = {
        ...config,
      }
      newConfig.module.rules = config.module.rules.reduce((acc, rule) => {
        if (!rule.test.toString().includes('svg')) {
          acc.push(rule)
        }

        return acc
      }, [])

      // @todo load from webpack config
      newConfig.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      })

      return newConfig
    },
  })

export default {
  title: pkg.name,
  description: pkg.description,
  plugins: [
    babel(),
    pathResolver(),
    configureRules(),
  ],
}
