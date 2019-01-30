import {
  gql
} from 'apollo-server-express';

import threadSchema from './thread';

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

export default [linkSchema, threadSchema];