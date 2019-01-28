import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    threads: [Thread!]!
  }

  extend type Mutation {
    addThread(text: String!): Thread!
  }

  type Thread {
    id: ID!
    text: String!
  }
`;