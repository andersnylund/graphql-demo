import React from 'react';
import { array } from 'prop-types';

import { Li, Ul } from './PostList';

const CommentList = ({ comments }) => (
  <div>
    <h3>Comments</h3>
    <Ul>
      {comments.map(comment => (
        <Li key={comment.id}>{comment.text}</Li>
      ))}
    </Ul>
  </div>
);

CommentList.propTypes = {
  comments: array.isRequired,
};

export default CommentList;
