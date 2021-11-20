import React from "react";
import { useQuery, gql } from "@apollo/client";
import Post from "./post";
import Box from "@mui/material/Box";

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
`;

export default function Feed() {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Box xs={12} overflow="auto" height={`calc(100vh - 220px)`}>
      {data.posts.map((params) => (
        <Post params={params} key={params._id} />
      ))}
    </Box>
  );
}
