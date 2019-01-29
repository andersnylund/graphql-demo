import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li:last-child {
    border: none;
  }
`;

const Li = styled.li`
  border-bottom: 2px solid goldenrod;
  padding: 1rem;
  :hover {
    background: lightgoldenrodyellow;
  }
  transition: 0.3s;
  cursor: pointer;
`;

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
          <Ul>
            {data.threads.map(thread => (
              <Li key={thread.id}>{thread.text}</Li>
            ))}
          </Ul>
        );
      }}
    </Query>
  );
};

export default ThreadList;
