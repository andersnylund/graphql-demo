import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { GET_POSTS } from '../App';
import TextAreaForm from './TextAreaForm';

export const ADD_POST = gql`
  mutation($text: String!) {
    addPost(text: $text) {
      id
      text
    }
  }
`;

class AddPost extends React.Component {
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
    event.preventDefault();
    mutation({
      variables: {
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
      <Mutation mutation={ADD_POST} refetchQueries={[{ query: GET_POSTS }]}>
        {addPostMutation => {
          return (
            <TextAreaForm
              onChange={this.handleChange}
              value={text}
              onSubmit={event => this.handleSubmit(event, addPostMutation)}
              placeholder="What?"
              buttonText="Post"
            />
          );
        }}
      </Mutation>
    );
  }
}

export default AddPost;
