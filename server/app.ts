import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from './src/middleware/logger';

const app = express();
app.use(express.json());

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

app.get('/ping', (_req, res) => {
  // eslint-disable-next-line
  console.log('someone pinged here');
  res.send('pong');
});

app.use(bodyParser.json());
app.use(logger);

export default app;
