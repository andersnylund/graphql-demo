import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { GET_THREADS } from './ThreadList';

const ADD_THREAD = gql`
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

  handleSubmit = async (event, addThreadMutation) => {
    event.preventDefault();
    await addThreadMutation();
  };

  render() {
    const { text } = this.state;
    return (
      <Mutation
        mutation={ADD_THREAD}
        variables={{ text }}
        refetchQueries={[{ query: GET_THREADS }]}
      >
        {addThreadMutation => {
          return (
            <form
              onSubmit={event => this.handleSubmit(event, addThreadMutation)}
            >
              <textarea
                name="text"
                type="text"
                value={text}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default AddThread;
