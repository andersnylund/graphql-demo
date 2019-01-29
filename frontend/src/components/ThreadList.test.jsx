import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';

import ThreadList, { GET_THREADS } from './ThreadList';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: GET_THREADS,
    },
    result: {
      data: {
        threads: [{ id: '1', text: 'Hello1' }, { id: '2', text: 'Hello2' }],
      },
    },
  },
];

describe('<ThreadList />', () => {
  it('should render loading', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThreadList />
      </MockedProvider>
    );
    getByText('Loading...');
  });

  it('should render the list', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThreadList />
      </MockedProvider>
    );
    await wait(0);
    getByText('Hello1');
    getByText('Hello2');
  });
});
