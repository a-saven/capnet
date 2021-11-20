import { Box, Typography } from '@mui/material'
import Layout from 'src/components/layout'
import Main from 'src/pages/main'

export default function Index() {
  //if no session return this
  //if logged in return list
  //add edit route
  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        height={'100%'}
      >
        <Main />
      </Box>
    </Layout>
  )
}
