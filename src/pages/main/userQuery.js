import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { SendEmail } from './sendEmail'
import { useRouter } from 'next/router'
import { CircularProgress, Box } from '@mui/material'

const USER = gql`
  {
    user {
      name
      email
      emailVerified
    }
  }
`

export default function UserQuery(props) {
  const { loading, error, data, refetch } = useQuery(USER)
  const router = useRouter()

  if (loading)
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    )

  if (error) {
    if (!localStorage.getItem('token')) {
      router.push('/home')
      return null
    } else {
      return <p>Error :(</p>
    }
  }
  if (data.user && data.user.emailVerified) {
    return props.children
  }
  return <SendEmail email={data?.user.email} refetch={refetch} />
}
