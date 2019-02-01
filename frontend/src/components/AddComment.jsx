import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { string } from 'prop-types';

import { GET_POSTS } from '../App';
import TextAreaForm from './TextAreaForm';

export const ADD_COMMENT = gql`
  mutation($postId: ID!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
    }
  }
`;

class AddComment extends React.Component {
  state = {
    text: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event, mutation) => {
    const { text } = this.state;
    const { postId } = this.props;
    event.preventDefault();
    mutation({
      variables: {
        postId,
        text,
      },
    });
    this.setState({
      text: '',
    });
  };

  render() {
    const { text } = this.state;
    return (
      <Mutation mutation={ADD_COMMENT} refetchQueries={[{ query: GET_POSTS }]}>
        {addCommentMutation => {
          return (
            <TextAreaForm
              onChange={this.handleChange}
              value={text}
              onSubmit={event => this.handleSubmit(event, addCommentMutation)}
              placeholder="Your comment"
              buttonText="Comment"
            />
          );
        }}
      </Mutation>
    );
  }
}

AddComment.propTypes = {
  postId: string.isRequired,
};

export default AddComment;
