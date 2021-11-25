import React from 'react'
import { useMutation, gql } from '@apollo/client'
import Button from '@mui/material/Button'
import { POSTS } from './feed'
import CircularProgress from '@mui/material/CircularProgress'

const EDIT_POST = gql`
  mutation editPost($_id: ID, $text: String, $title: String, $tag: String) {
    editPost(_id: $_id, text: $text, title: $title, tag: $tag) {
      _id
      text
      tag
      userId
      createdAt
      index
    }
  }
`

export default function EditPost({ _id, text, title, tag, clearInput }) {
  // eslint-disable-next-line
  const [submitPost, { loading, error }] = useMutation(EDIT_POST, {
    variables: { _id, text, title, tag },
    refetchQueries: [
      {
        query: POSTS
      }
    ]
    // onCompleted() {
    //   clearInput()
    // }
  })

  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={submitPost}
        data-testid="post-button"
      >
        {error ? error.message.replace('GraphQL error: ', '') : 'submit'}
      </Button>
      {loading && <CircularProgress />}
    </>
  )
}
