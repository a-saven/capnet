import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { POSTS } from './feed'
import { useSnackbar } from 'notistack'

const DELETE_POST = gql`
  mutation deletePost($id: ID) {
    deletePost(id: $id)
  }
`

export default function AlertDialog({ id }) {
  const [open, setOpen] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const [deletePost, { loading, error }] = useMutation(DELETE_POST, {
    variables: { id },
    refetchQueries: [
      {
        query: POSTS
      }
    ],
    onCompleted() {
      enqueueSnackbar('Post deleted', {
        variant: 'success'
      })
    }
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {
    deletePost()
  }

  if (loading) {
    enqueueSnackbar('Deleting post...', {
      variant: 'info'
    })
  }

  if (error) {
    enqueueSnackbar('Delete post error', {
      variant: 'error'
    })
  }

  return (
    <Box>
      <Button variant="text" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you want to delete this item?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Item will be deleted forever
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
