import styled from 'styled-components'
import onecolor from 'onecolor'

const getFontColor = props =>
  (props.mainColor ? props.mainColor : props.theme.colors.companyColor)

const getBackgroundColor = (props, alpha) =>
  onecolor(getFontColor(props)).alpha(alpha).cssa()

const textActive = (theme, alpha) =>
  onecolor(theme.colors.text.active).alpha(alpha).cssa()

export const StyledButton = styled.button`
  background-color: ${props => getBackgroundColor(props, 0)};
  color: ${props => getFontColor(props)};
  line-height: 20px;
  height: 50px;
  width: 100%;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
  }

  &:hover {
    background-color: ${props => getBackgroundColor(props, 0.1)};
  }

  &:active {
    background-color: ${props => getBackgroundColor(props, 0.1)};

    &:after {
      background-color: ${({ theme }) => textActive(theme, 0.1)};
    }
  }
`
