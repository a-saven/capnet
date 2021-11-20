import React from 'react'
import Layout from 'src/components/layout'
import { Box, Typography } from '@mui/material'

export default function Forgot() {
  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height={'100%'}
      >
        <Typography>Please contact us to receive email.</Typography>
      </Box>
    </Layout>
  )
}
