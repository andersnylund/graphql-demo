import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const GET_THREADS = gql`
  {
    threads {
      id
      text
    }
  }
`;

const ThreadList = () => {
  return (
    <Query query={GET_THREADS}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        return (
          <ul>
            {data.threads.map(thread => (
              <li key={thread.id}>{thread.text}</li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default ThreadList;
