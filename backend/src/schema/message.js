import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    messages(threadId: ID!): [Message!]!
  }

  extend type Mutation {
    addMessage(threadId: ID!, text: String!): Message!
  }

  type Message {
    id: ID!
    text: String!
  }
`;