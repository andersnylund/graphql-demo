import React from 'react';

import AddPost from '../components/AddPost';
import PostList from '../components/PostList';
import Container from './Container';

const PostPage = ({ posts }) => {
  return (
    <Container>
      <AddPost />
      <PostList posts={posts} />
    </Container>
  );
};

export default PostPage;
