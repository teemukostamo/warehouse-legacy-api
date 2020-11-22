import React from 'react';
import ReactDOM from 'react-dom';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloLink } from '@apollo/client/core';

import App from './App';
import './styles.css';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({
  link: (link as unknown) as ApolloLink,
  cache,
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<ApolloApp />, rootElement);
