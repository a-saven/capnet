import React from 'react'
import { Box } from '@mui/material'

export default function Layout({ children }) {
  return (
    <Box height={'99vh'} display="flex" flexDirection="column" flex={1}>
      {children}
    </Box>
  )
}
