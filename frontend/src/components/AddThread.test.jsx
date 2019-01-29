import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';

import AddThread from './AddThread';

afterEach(cleanup);

describe('<AddThread />', () => {
  it('should render a textarea', () => {
    const component = render(<AddThread />);
  });
});
