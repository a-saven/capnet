import { gql } from 'apollo-server-lambda'

export default gql`
  type Query {
    posts: [Post]
  }
  type Mutation {
    addPost(text: String, title: String, tag: String): Post
    editPost(_id: ID, text: String, title: String, tag: String): Post
    deletePost(id: ID): Boolean
  }
  type Post {
    _id: String
    text: String
    title: String
    tag: String
    userId: String
    createdAt: String
    index: Int
  }
`
