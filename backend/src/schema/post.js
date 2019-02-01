import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Query {
    posts: [Post!]!
  }

  extend type Mutation {
    addPost(text: String!): Post!
  }

  type Post {
    id: ID!
    text: String!
    comments: [Comment!]!
  }
`;