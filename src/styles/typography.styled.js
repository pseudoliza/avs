import styled, { css } from 'styled-components'
import media from 'src/styles/media.styled'
import { Link, NavLink } from 'react-router-dom'
import theme from './theme.styled'

export const NavLinkCss = css`
  text-decoration: none;
  color: rgba(35,31,69, 0.25);
  &.active, :hover {
    color: ${theme.colors.blue};
  }
  ${media.desktop`
    font-family: ${props => props.theme.fonts.proxima.regular};
    font-size: ${props => props.theme.fontSize.regular};
    padding: 15px 25px;
  `}
`
export const StyledNavLink = styled(NavLink)`
  ${NavLinkCss}
`

export const LinkDefaultCss = css`
  font-size: 16px;
  border-bottom: 1px solid rgba(130,126,143, 0.35);
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid rgba(130,126,143);
  }
`

export const LinkDefault = styled(Link)`
  ${LinkDefaultCss}
`
