import React from 'react'
import { Routes } from '../config';

import './App.css';
// import './index.css';
// import '../assets/css/logo-ds.svg
import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/normalize.css';
import '../assets/css/nice-select2.css';
import '../assets/css/swiper-bundle.css';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
// configure our API URI & cache
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

// return the headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  };
});

// create the Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

// check for a local token
const data = {
  isLoggedIn: !!localStorage.getItem('token')
};

// write the cache data on initial load
cache.writeData({ data });
// write the cache data after cache is reset
client.onResetStore(() => cache.writeData({ data }));
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Routes />  
      </div>
    </ApolloProvider>
  )
}

export default App;
