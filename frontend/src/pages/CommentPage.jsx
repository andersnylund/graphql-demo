import React from 'react';
import { shape, string, array, func } from 'prop-types';
import gql from 'graphql-tag';

import PostTitle from '../components/PostTitle';
import AddComment from '../components/AddComment';
import CommentList from '../components/CommentList';
import Container from './Container';

const COMMENT_ADDED = gql`
  subscription($postId: ID!) {
    commentAdded(postId: $postId) {
      comment {
        id
        text
      }
    }
  }
`;
class CommentPage extends React.Component {
  componentDidMount() {
    const {
      subscribeToMore,
      match: {
        params: { id },
      },
    } = this.props;
    subscribeToMore({
      document: COMMENT_ADDED,
      variables: { postId: id },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const changedPost = prev.posts.find(post => post.id === id);
        changedPost.comments = [
          ...changedPost.comments,
          subscriptionData.data.commentAdded.comment,
        ];

        return {
          posts: [...prev.posts],
        };
      },
    });
  }

  render() {
    const {
      match: {
        params: { id },
      },
      posts,
    } = this.props;
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
  }
}

CommentPage.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
  posts: array.isRequired,
  subscribeToMore: func.isRequired,
};

export default CommentPage;
