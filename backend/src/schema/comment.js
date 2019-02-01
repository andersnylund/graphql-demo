import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Mutation {
    addComment(postId: ID!, text: String!): Comment!
  }

  type Comment {
    id: ID!
    text: String!
  }
`;