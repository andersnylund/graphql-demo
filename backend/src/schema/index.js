import {
  gql
} from 'apollo-server-express';

import postSchema from './post';
import commentSchema from './comment';

const linkSchema = gql `
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, postSchema, commentSchema];