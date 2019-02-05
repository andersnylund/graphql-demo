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

const Post = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 1rem;
`;

const Id = styled.div`
  color: grey;
`;

const Text = styled.div`
  font-weight: 800;
`;

const Comments = styled.div`
  color: grey;
  justify-self: flex-end;
`;

const handlePostClick = (history, id) => {
  history.push(`/${id}`);
};

const PostList = ({ history, posts }) => (
  <Ul>
    {posts.map(post => (
      <Li key={post.id} onClick={() => handlePostClick(history, post.id)}>
        <Post>
          <Id>{`#${post.id}`}</Id>
          <Text>{`${post.text}`}</Text>
          <Comments>{`${post.comments.length} comments`}</Comments>
        </Post>
      </Li>
    ))}
  </Ul>
);

PostList.propTypes = {
  history: object.isRequired,
  posts: array.isRequired,
};

export default withRouter(PostList);
