import React from 'react'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

export const CONFIRM_EMAIL = gql`
  query confirmEmail($token: String) {
    confirmEmail(token: $token)
  }
`

export default function Verify() {
  const router = useRouter()
  const { token } = router.query

  const { loading, error, data } = useQuery(CONFIRM_EMAIL, {
    variables: { token }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (data) {
    return <div style={{ textAlign: 'center' }}>Email Verified {token}</div>
  } else {
    return <div style={{ textAlign: 'center' }}>Try againg</div>
  }
}
