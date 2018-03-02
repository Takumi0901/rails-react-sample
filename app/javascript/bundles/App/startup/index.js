import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo'
import configureStore from '../redux/Store'
import Router from '../router/index'
import Foundation from '../components/organisms/Foundation'
import routes from './routes'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken
    },
    uri: '/graphql'
  }),
  cache: new InMemoryCache()
})

const App = (props) => (
  <ApolloProvider client={client}>
    <Provider store={configureStore(props)}>
      <Router>
        {routes}
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;