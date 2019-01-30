import React from 'react';
import { shape, string } from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Li, Ul } from '../components/ThreadList';

const MESSAGES = gql`
  query($threadId: ID!) {
    messages(threadId: $threadId) {
      id
      text
    }
  }
`;

const MessagePage = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <Query query={MESSAGES} variables={{ threadId: id }}>
      {({ data, loading }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        return (
          <Ul>
            {data.messages.map(message => (
              <Li key={message.id}>{message.id}</Li>
            ))}
          </Ul>
        );
      }}
    </Query>
  );
};

MessagePage.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MessagePage;
