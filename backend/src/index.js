import cors from 'cors';
import express from 'express';
import {
  ApolloServer,
} from 'apollo-server-express';
import 'dotenv/config';
import chalk from 'chalk';

import schema from './schema';
import resolvers from './resolvers';
import models, {
  sequelize
} from './models';

const app = express();

app.use(cors());

const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
  context: {
    models,
  },
});

server.applyMiddleware({
  app,
  path: '/graphql',
});

const port = process.env.PORT || 3001;

sequelize.sync({
  force: true,
}).then(async () => {
  app.listen({
      port,
    },
    () => {
      console.log(chalk.yellow(
        `Apollo Server on http://localhost:${port}/graphql`
      ));
    }
  );
});