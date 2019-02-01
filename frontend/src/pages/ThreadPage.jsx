import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import AddThread from '../components/AddThread';
import ThreadList from '../components/ThreadList';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
`;

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

const ThreadPage = () => {
  return (
    <Query query={GET_THREADS}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        return (
          <Div>
            <AddThread />
            <ThreadList threads={data.threads} />
          </Div>
        );
      }}
    </Query>
  );
};

export default ThreadPage;
