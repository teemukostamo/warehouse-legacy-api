import supertest from 'supertest';
import app from '../../app';

const api = supertest(app);

test('get pong from ping', async () => {
  const response = await api.get('/ping');
  expect(response.text).toBe('pong');
});
