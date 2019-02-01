import React from 'react';
import { shape, string, array } from 'prop-types';
import ThreadTitle from '../components/ThreadTitle';
import AddMessage from '../components/AddMessage';
import MessageList from '../components/MessageList';
import Container from './Container';

const MessagePage = ({
  match: {
    params: { id },
  },
  threads,
}) => {
  const thread = threads.find(t => t.id === id);
  if (!thread) {
    return <div>Thread not found!</div>;
  }
  return (
    <Container>
      <ThreadTitle title={thread.text} />
      <MessageList messages={thread.messages} />
      <AddMessage threadId={thread.id} />
    </Container>
  );
};

MessagePage.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
  threads: array.isRequired,
};

export default MessagePage;
