import React from 'react';
import { useMutation, gql } from "@apollo/client";
import Button from '@mui/material/Button';
import { POSTS } from './feed';
import CircularProgress from '@mui/material/CircularProgress';

const ADD_POST = gql`
  mutation addPost($text: String, $title: String, $tag: String) {
    addPost(text: $text, title: $title, tag: $tag ) {
      _id
      text
      tag
      userId
      createdAt
      index
    }
  }
`;

export default function SubmitPost({ text, title, tag, clearInput }) {
  // eslint-disable-next-line
  const [submitPost, { loading, error }] = useMutation(
    ADD_POST,
    {
      variables: { text, title, tag },
      refetchQueries: [{
        query: POSTS,
      }],
      onCompleted () {
        clearInput()
      }
    }
  );
  
  return  (
    <React.Fragment>
      <Button  type="submit" variant="contained" color="primary" onClick={submitPost} data-testid="post-button">
        {error ? error.message.replace("GraphQL error: ", "") : "submit"}
      </Button>
      {loading && <CircularProgress />}
    </React.Fragment>
    );
}
