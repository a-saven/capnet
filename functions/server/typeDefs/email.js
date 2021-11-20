import { gql } from "apollo-server-lambda";

export default gql`
  extend type Mutation {
    sendEmail( email: String ): Token
  }
  extend type Query {
    confirmEmail (token: String): Boolean
  }
`;
