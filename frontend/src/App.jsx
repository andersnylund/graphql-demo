import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import PostPage from './pages/PostPage';
import CommentPage from './pages/CommentPage';

export const GET_POSTS = gql`
  {
    posts {
      id
      text
      comments {
        id
        text
      }
    }
  }
`;

const App = () => (
  <Router>
    <Query query={GET_POSTS}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        return (
          <>
            <Route
              exact
              path="/"
              render={props => <PostPage posts={data.posts} {...props} />}
            />
            <Route
              path="/:id"
              render={props => <CommentPage posts={data.posts} {...props} />}
            />
          </>
        );
      }}
    </Query>
  </Router>
);

export default App;
