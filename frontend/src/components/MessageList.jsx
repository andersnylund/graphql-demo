import React from 'react';
import { Li, Ul } from './ThreadList';

const MessageList = ({ messages }) => (
  <Ul>
    {messages.map(message => (
      <Li key={message.id}>{`#${message.id} ${message.text}`}</Li>
    ))}
  </Ul>
);

export default MessageList;
