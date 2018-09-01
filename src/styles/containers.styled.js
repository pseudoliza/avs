import styled, { css } from 'styled-components'
import media from 'src/styles/media.styled'

export const ContainerCss = css`
  padding: 0 30px;

  ${media.desktop`
    padding: 0 80px;
    max-width: 920px;
    margin-left: auto;
    margin-right: auto;
  `}
`

export const Container = styled.div`
  ${ContainerCss}
`
