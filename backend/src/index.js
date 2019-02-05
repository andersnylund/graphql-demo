import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import {
  ApolloServer,
} from 'apollo-server-express';
import chalk from 'chalk';

import schema from './schema';
import resolvers from './resolvers';
import models, {
  sequelize
} from './models';

const app = express();

app.use(cors());
app.use(helmet());

const server = new ApolloServer({
  introspection: true, // Enables and disables schema introspection. Disabled in production by default.
  playground: true, // Enables and disables playground and allows configuration of GraphQL Playground. 
  typeDefs: schema,
  resolvers,
  context: {
    models,
  },
});

server.applyMiddleware({
  app,
  path: '/graphql',
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 3001;

sequelize.sync({
  force: true, // adds a DROP TABLE IF EXISTS before trying to create the table
}).then(async () => {
  httpServer.listen({
      port,
    },
    () => {
      console.log(chalk.yellow(
        `Apollo Server on http://localhost:${port}/graphql`
      ));
    }
  );
});