import { gql } from "apollo-server-lambda";

export default gql`
  extend type Mutation {
    signUp(name: String, email: String, password: String): Token
    signIn(email: String, password: String): Token
  }
  extend type Query {
    user: User
  }
  type User {
    name: String
    email: String
    emailVerified: Boolean
  }
  type Token {
    token: String
  }
`;
