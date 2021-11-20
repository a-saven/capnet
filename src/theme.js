import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMediaQuery, Container } from '@mui/material'

const theme = createTheme({
  status: {
    danger: 'red'
  },
  palette: {
    primary: {
      main: '#1e88e5',
      light: '#6ab7ff',
      dark: '#005cb2'
    }
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
