import React from 'react';
import { shape, string, array } from 'prop-types';
import PostTitle from '../components/PostTitle';
import AddComment from '../components/AddComment';
import CommentList from '../components/CommentList';
import Container from './Container';

const CommentPage = ({
  match: {
    params: { id },
  },
  posts,
}) => {
  const post = posts.find(t => t.id === id);
  if (!post) {
    return <div>Post not found!</div>;
  }
  return (
    <Container>
      <PostTitle title={post.text} />
      <CommentList comments={post.comments} />
      <AddComment postId={post.id} />
    </Container>
  );
};

CommentPage.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
  posts: array.isRequired,
};

export default CommentPage;
