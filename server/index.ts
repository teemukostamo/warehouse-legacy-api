import http from 'http';
import app from './app';
import config from './src/config/config';

const server = http.createServer(app);

server.listen(config.PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on port ${config.PORT}`);
});
