import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { object, array } from 'prop-types';

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li:last-child {
    border: none;
  }
`;

export const Li = styled.li`
  border-bottom: 2px solid goldenrod;
  padding: 1rem;
  :hover {
    background: lightgoldenrodyellow;
  }
  transition: 0.3s;
  cursor: pointer;
`;

const handleThreadClick = (history, id) => {
  history.push(`/${id}`);
};

const ThreadList = ({ history, threads }) => (
  <Ul>
    {threads.map(thread => (
      <Li key={thread.id} onClick={() => handleThreadClick(history, thread.id)}>
        {`#${thread.id} ${thread.text} has ${thread.messages.length} messages`}
      </Li>
    ))}
  </Ul>
);

ThreadList.propTypes = {
  history: object.isRequired,
  threads: array.isRequired,
};

export default withRouter(ThreadList);
