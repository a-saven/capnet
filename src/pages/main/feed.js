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

export default function Feed({ searchText }) {
  const { loading, error, data } = useQuery(POSTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Box
      xs={12}
      overflow="auto"
      height={`calc(100vh - 100px)`}
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
      {data.posts
        .filter((post) => {
          if (searchText && post?.text?.includes(searchText)) {
            return post
          }
          if (searchText && post?.tag?.includes(searchText)) {
            return post
          }
          if (
            searchText &&
            searchText.includes('#') &&
            post?.title?.includes(searchText)
          ) {
            return title
          }
          if (!searchText) {
            return post
          }
        })
        .map((params) => (
          <Post params={params} key={params._id} />
        ))}
    </Box>
  )
}
