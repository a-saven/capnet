import Head from "next/head";
import ErrorBoundary from "src/components/utils/errorBoundary";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "src/theme";
import { ApolloProvider } from "@apollo/client";
import client from "client/apollo-client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>Captain Log</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ErrorBoundary>
        <ThemeProvider>
          <ApolloProvider client={client}>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </ApolloProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}
