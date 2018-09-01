import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme.styled'
import { Routes } from './Routes'

export default ({ route, location }) => (
  <ThemeProvider theme={theme}>
    <Routes location={location} routes={route.routes} />
  </ThemeProvider>
)
