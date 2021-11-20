import React from "react";
import { ApolloProvider } from "@apollo/client";
import ThemeProvider from "src/theme";
import Routes from "src/routes.js";
import CssBaseline from "@mui/material/CssBaseline";
import client from "client/apollo-client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default function NextIndexWrapper() {
  return <App />;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
