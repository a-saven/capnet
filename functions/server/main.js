import { ApolloServer } from "apollo-server-lambda";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import context from "./context";

export const Server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});
