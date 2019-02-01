import React from 'react';
import { shape, string } from 'prop-types';
import { ApolloConsumer } from 'react-apollo';

import { Li, Ul } from '../components/ThreadList';
import { GET_THREADS } from './ThreadPage';

const MessagePage = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <ApolloConsumer>
      {client => {
        console.log('client:', client);
        const result = client.cache.readQuery({
          query: GET_THREADS,
        });
        console.log('result:', result);
        return null;
      }}
    </ApolloConsumer>
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
