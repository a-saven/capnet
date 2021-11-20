import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? token : ''
    }
  }
})

const httpLink = createHttpLink({
  uri: '/.netlify/functions/server'
  //credentials: "same-origin",
})

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        if (
          message ===
          'Context creation failed: Context creation TokenExpiredError: jwt expired'
        ) {
          sessionStorage.removeItem('token')
          window.location.reload()
        }
      })
    if (networkError) console.log(`[Network error]: ${networkError}`)
    return forward(operation)
  }
)

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache()
})

export default client
