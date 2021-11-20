import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Copyright from 'src/components/copyright'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { Logo } from 'src/components/logo'
import Link from 'next/link'

const SIGN_UP = gql`
  mutation signUp($name: String, $email: String, $password: String) {
    signUp(name: $name, email: $email, password: $password) {
      token
    }
  }
`

export default function SignUp() {
  const router = useRouter()

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  //eslint-disable-next-line
  const [errors, setErrors] = useState({
    name: false,
    email: false
  })

  const [sUp] = useMutation(SIGN_UP, {
    variables: values,
    onCompleted(data) {
      router.push('/')
      sessionStorage.setItem('token', data.singUp.token)
    },
    onError() {
      setErrors({ ...errors, email: true })
    }
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const signUp = (e) => {
    e.preventDefault()
    if (!values.name) {
      setErrors({ ...errors, name: true })
      return
    } else {
      setErrors({ ...errors, name: false })
      sUp()
    }
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
          Sign up
        </Typography>
        <form noValidate>
          <Box>
            <Box mt={5}>
              <TextField
                name="name"
                helperText="Please enter name"
                required
                fullWidth
                id="name"
                label="Name"
                error={errors.name}
                value={values.name}
                onChange={handleChange('name')}
                autoFocus
              />
            </Box>
            <Box mt={5}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                error={errors.email}
                helperText="Please enter valid email"
                autoComplete="username"
                value={values.email}
                onChange={handleChange('email')}
              />
            </Box>
            <Box mt={5}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange('password')}
              />
            </Box>
          </Box>
          <Box align="center" justify="center" m={5}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={(e) => signUp(e)}
            >
              Sign Up
            </Button>
          </Box>
          <Box justify="flex-end">
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Box>
        </form>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Box>
    </Box>
  )
}
