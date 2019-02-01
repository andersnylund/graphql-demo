import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';

import { GET_THREADS } from './ThreadList';

export const ADD_THREAD = gql`
  mutation($text: String!) {
    addThread(text: $text) {
      id
      text
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 2px solid goldenrod;
  border-radius: 5px;
  font-family: inherit;
  width: 100%;
`;

const Button = styled.button`
  background: white;
  color: goldenrod;
  font-size: 1rem;
  font-weight: 800;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid goldenrod;
  border-radius: 5px;
  max-width: 200px;
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
            <Form
              onSubmit={event => this.handleSubmit(event, addThreadMutation)}
            >
              <TextArea
                placeholder="What are you up to?"
                name="text"
                type="text"
                value={text}
                onChange={this.handleChange}
              />
              <Button type="submit">Submit</Button>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default AddThread;
