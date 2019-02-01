import React from 'react';
import { Li, Ul } from './PostList';

const CommentList = ({ comments }) => (
  <Ul>
    {comments.map(comment => (
      <Li key={comment.id}>{`#${comment.id} ${comment.text}`}</Li>
    ))}
  </Ul>
);

export default CommentList;
