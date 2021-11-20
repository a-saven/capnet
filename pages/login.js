import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Copyright from '../src/components/copyright'
import { gql, useMutation } from '@apollo/client'
import CircularProgress from '@mui/material/CircularProgress'
import Link from 'next/link'
import { Logo } from '../src/components/logo'
import { useRouter } from 'next/router'

const SIGN_IN = gql`
  mutation signIn($email: String, $password: String) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`

export default function SignIn() {
  const router = useRouter()
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  // eslint-disable-next-line
  const [sIn, { data, loading, error }] = useMutation(SIGN_IN, {
    variables: values,
    onCompleted(data) {
      sessionStorage.setItem('token', data.signIn.token)
      router.push('/')
    }
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <Box
      mt={{ xs: '5%', md: '25%' }}
      ml={{ xs: '5%', md: '25%' }}
      mr={{ xs: '5%', md: '25%' }}
    >
      <Logo />
      <Box align="center" justify="center">
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>
      <form noValidate>
        <Box>
          <Box mt={5}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="username"
              autoFocus
              value={values.email}
              onChange={handleChange('email')}
            />
          </Box>
          <Box mt={5}>
            <TextField
              required
              fullWidth
              error={error}
              helperText={
                error ? error.message.replace('GraphQL error: ', '') : null
              }
              name="password"
              label="Password"
              id="password"
              type="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange('password')}
            />
          </Box>
          <Box align="center" justify="center" mt={5} mb={5}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault()
                sIn()
              }}
            >
              Sign In {loading && <CircularProgress />}
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Box>
      </form>
    </Box>
  )
}
