// @flow

import React from 'react'
import type { Node } from 'react'
import theme from 'src/styles/theme.styled'
import { StyledButton } from './Button.styled'

type ButtonProps = {
  children: Node,
  mainColor?: string,
}

export const PrimaryButton = ({ mainColor, children }: ButtonProps) => (
  <StyledButton mainColor={mainColor} >
    {children}
  </StyledButton>
)

export const SecondaryButton = ({ children }: { children: Node }) => (
  <PrimaryButton mainColor={theme.colors.text.active}>
    {children}
  </PrimaryButton>
)

export default PrimaryButton
