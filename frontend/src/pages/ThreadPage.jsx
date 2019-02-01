import React from 'react';

import AddThread from '../components/AddThread';
import ThreadList from '../components/ThreadList';
import Container from './Container';

const ThreadPage = ({ threads }) => {
  return (
    <Container>
      <AddThread />
      <ThreadList threads={threads} />
    </Container>
  );
};

export default ThreadPage;
