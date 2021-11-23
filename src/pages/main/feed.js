import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Post from './post'
import Box from '@mui/material/Box'

export const POSTS = gql`
  {
    posts {
      _id
      text
      title
      tag
      createdAt
      userId
      index
    }
  }
`

export default function Feed() {
  const { loading, error, data } = useQuery(POSTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Box
      xs={12}
      overflow="auto"
      height={`calc(100vh - 220px)`}
      pr={1}
      sx={{
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#12005e'
          //outline: '1px solid slategrey'
        }
      }}
    >
      {data.posts.map((params) => (
        <Post params={params} key={params._id} />
      ))}
    </Box>
  )
}
