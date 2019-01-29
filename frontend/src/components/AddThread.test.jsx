import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';

import AddThread, { ADD_THREAD } from './AddThread';

afterEach(cleanup);

const mocks = [
  {
    request: {
      query: ADD_THREAD,
      variables: jest.fn(),
    },
    result: {
      data: {
        threads: [{ id: '1', text: 'Hello1' }, { id: '2', text: 'Hello2' }],
      },
    },
  },
];

describe('<AddThread />', () => {
  it('should render without error', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AddThread />
      </MockedProvider>
    );
  });

  it('should render a text area ', () => {
    const { getByPlaceholderText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AddThread />
      </MockedProvider>
    );
    getByPlaceholderText('What are you up to?');
  });

  it('should allow the user to input text', () => {
    const { getByPlaceholderText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AddThread />
      </MockedProvider>
    );
    const textarea = getByPlaceholderText('What are you up to?');
    fireEvent.change(textarea, { target: { value: 'nothing' } });
    expect(textarea.value).toBe('nothing');
  });

  it('should show a submit button', () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <AddThread />
      </MockedProvider>
    );
    getByText('Submit');
  });

  it('should handle pressing the submit button', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AddThread />
      </MockedProvider>
    );
    getByText('Submit');
    // TODO test if handleSubmit called, test if apollo refetch called
  });
});
