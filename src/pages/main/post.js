import React from 'react'
import Typography from '@mui/material/Typography'
import { Divider, Box } from '@mui/material'
import Moment from 'react-moment'
import PostMenu from './postMenu'

const Post = ({ params }) => {
  const c = params

  if (!c) return null
  return (
    <Box width={'100%'}>
      <Divider variant="middle" />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        m={3}
      >
        <Box>
          <Typography variant="subtitle1">
            <p>{c.title || 'Post title'}</p>
          </Typography>
        </Box>
        <Box align="center" justify="center">
          <PostMenu id={c._id} post={params} />
        </Box>
      </Box>
      <Box m={3}>
        <Typography variant="body1">{c.text}</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        m={3}
      >
        <Box mr={5}>
          <Typography variant="caption" display="block" gutterBottom>
            {c.tag || 'Tag'}
          </Typography>
        </Box>
        <Box align="center" justify="center">
          <Typography variant="caption" display="block" gutterBottom>
            <Moment format="HH:MM:SS D MMM YYYY" unix>
              {c.createdAt / 1000}
            </Moment>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Post
