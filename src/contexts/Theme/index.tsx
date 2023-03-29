import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import * as CustomTheme from './custom'

const theme = createTheme(CustomTheme)

const AppThemeProvider: React.FC<{
  children: React.ReactNode | React.ReactNode[]
}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    {children}
  </ThemeProvider>
)

export default AppThemeProvider
