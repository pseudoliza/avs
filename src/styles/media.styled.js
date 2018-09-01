import { css } from 'styled-components'
import theme from './theme.styled'

// ${media.desktop`padding: 0 40px;`}...
export default Object.keys(theme.size).reduce((accumulator, label) => {
  // eslint-disable-next-line
  accumulator[label] = (...args) => css`
    @media (min-width: ${theme.size[label]}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
