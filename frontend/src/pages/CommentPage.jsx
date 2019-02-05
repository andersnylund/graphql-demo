import React from 'react';
import { shape, string, array, func, object } from 'prop-types';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import AddComment from '../components/AddComment';
import CommentList from '../components/CommentList';
import Container from './Container';
import { Button } from '../components/TextAreaForm';

const PostTitle = styled.h1`
  color: goldenrod;
  text-shadow: 1px 1px 1px gray;
  margin: 0;
`;

const Header = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 50px 1fr 50px;
  justify-content: space-between;
  text-align: center;
  padding: 1rem;
`;

const BackButton = styled.div``;

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
      history,
    } = this.props;
    const post = posts.find(t => t.id === id);
    if (!post) {
      return <div>Post not found!</div>;
    }
    return (
      <Container>
        <Header>
          <BackButton>
            <Button onClick={() => history.push('/')}>←</Button>
          </BackButton>
          <PostTitle>{post.text}</PostTitle>
        </Header>
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
  history: object.isRequired,
};

export default withRouter(CommentPage);
