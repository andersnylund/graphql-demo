import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { string } from 'prop-types';

import { GET_THREADS } from '../App';
import TextAreaForm from './TextAreaForm';

export const ADD_MESSAGE = gql`
  mutation($threadId: ID!, $text: String!) {
    addMessage(threadId: $threadId, text: $text) {
      id
      text
    }
  }
`;

class AddMessage extends React.Component {
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
    const { threadId } = this.props;
    event.preventDefault();
    mutation({
      variables: {
        threadId,
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
      <Mutation
        mutation={ADD_MESSAGE}
        refetchQueries={[{ query: GET_THREADS }]}
      >
        {addMessageMutation => {
          return (
            <TextAreaForm
              onChange={this.handleChange}
              value={text}
              onSubmit={event => this.handleSubmit(event, addMessageMutation)}
              placeholder="Your comment"
              buttonText="Comment"
            />
          );
        }}
      </Mutation>
    );
  }
}

AddMessage.propTypes = {
  threadId: string.isRequired,
};

export default AddMessage;
