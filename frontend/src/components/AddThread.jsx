import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { GET_THREADS } from '../App';
import TextAreaForm from './TextAreaForm';

export const ADD_THREAD = gql`
  mutation($text: String!) {
    addThread(text: $text) {
      id
      text
    }
  }
`;

class AddThread extends React.Component {
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
      <Mutation mutation={ADD_THREAD} refetchQueries={[{ query: GET_THREADS }]}>
        {addThreadMutation => {
          return (
            <TextAreaForm
              onChange={this.handleChange}
              value={text}
              onSubmit={event => this.handleSubmit(event, addThreadMutation)}
              placeholder="What?"
              buttonText="Post"
            />
          );
        }}
      </Mutation>
    );
  }
}

export default AddThread;
