import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import ProductAPI from './src/datasource';
import typeDefs from './src/schema';
import resolvers from './src/resolvers';
import logger from './src/middleware/logger';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ProductAPI: new ProductAPI(),
  }),
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get('/', (_req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../../client/build', 'index.html'),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get('/*', (_req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../../client/build', 'index.html'),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get('/ping', (_req, res) => {
  // eslint-disable-next-line
  console.log('someone pinged here');
  res.send('pong');
});

app.use(bodyParser.json());
app.use(logger);

export default app;
