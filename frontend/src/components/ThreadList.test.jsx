import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import 'jest-dom/extend-expect';

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

    await waitForElement(() => getByText('Hello1'));
    await waitForElement(() => getByText('Hello2'));
  });
});
