import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMediaQuery, Container } from '@mui/material'

const theme = createTheme({
  status: {
    danger: 'red'
  },
  palette: {
    primary: {
      main: '#4a148c',
      light: '#7c43bd',
      dark: '#12005e',
      contrastText: '#ffee58'
    },
    // secondary: {
    //   light: '#0066ff',
    //   main: '#0044ff',
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#ffcc00'
    // },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

export default function Provider(props) {
  const mobile = useMediaQuery('(max-width:800px)')
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters={mobile}>{props.children}</Container>
    </ThemeProvider>
  )
}
