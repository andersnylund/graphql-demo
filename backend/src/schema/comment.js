import {
  gql
} from 'apollo-server-express';

export default gql `
  extend type Mutation {
    addComment(postId: ID!, text: String!): Comment!
  }

  extend type Subscription {
    commentAdded(postId: ID!): CommentAdded!
  }

  type Comment {
    id: ID!
    text: String!
  }

  type CommentAdded {
    comment: Comment!
    postId: ID!
  }

`;