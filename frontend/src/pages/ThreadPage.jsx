import React from 'react';
import styled from 'styled-components';

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

const ThreadPage = () => {
  return (
    <Div>
      <AddThread />
      <ThreadList />
    </Div>
  );
};

export default ThreadPage;
