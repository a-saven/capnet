import { Box, Typography, Button } from '@mui/material'
import Layout from 'src/components/layout'
import { NextLinkComposed } from 'src/components/link'

export default function Index() {
  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        height={'100%'}
      >
        <Box>
          <Typography variant="h4">Hi, Welcome to</Typography>
          <Typography variant="h1">Captain Log</Typography>
          <Typography variant="h5">
            Secure, private, indie personal log
          </Typography>
          <Box>
            <Typography variant="h6" textAlign="right">
              Daily logging with search and grouping by tags
            </Typography>
            <Typography variant="h6" textAlign="right">
              Forever free, small fee for add-free experience
            </Typography>
            <Typography variant="h6" textAlign="right">
              Your data is your's only.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            variant="text"
            component={NextLinkComposed}
            to={{
              pathname: '/login'
            }}
          >
            Login
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            component={NextLinkComposed}
            to={{
              pathname: '/signup'
            }}
          >
            Try for free
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}
