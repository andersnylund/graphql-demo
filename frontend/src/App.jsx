import React from 'react';
import styled from 'styled-components';

import ThreadList from './components/ThreadList';
import AddThread from './components/AddThread';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
`;

const App = () => (
  <Div>
    <AddThread />
    <ThreadList />
  </Div>
);

export default App;
