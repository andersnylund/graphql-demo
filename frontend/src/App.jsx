import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ThreadPage from './pages/ThreadPage';
import MessagePage from './pages/MessagePage';

export const GET_THREADS = gql`
  {
    threads {
      id
      text
      messages {
        id
        text
      }
    }
  }
`;

const App = () => (
  <Router>
    <Query query={GET_THREADS}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        return (
          <>
            <Route
              exact
              path="/"
              render={props => <ThreadPage threads={data.threads} {...props} />}
            />
            <Route
              path="/:id"
              render={props => (
                <MessagePage threads={data.threads} {...props} />
              )}
            />
          </>
        );
      }}
    </Query>
  </Router>
);

export default App;
