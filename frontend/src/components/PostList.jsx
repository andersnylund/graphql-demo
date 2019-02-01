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

const handlePostClick = (history, id) => {
  history.push(`/${id}`);
};

const PostList = ({ history, posts }) => (
  <Ul>
    {posts.map(post => (
      <Li key={post.id} onClick={() => handlePostClick(history, post.id)}>
        {`#${post.id} ${post.text} has ${post.comments.length} comments`}
      </Li>
    ))}
  </Ul>
);

PostList.propTypes = {
  history: object.isRequired,
  posts: array.isRequired,
};

export default withRouter(PostList);
