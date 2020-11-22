/* eslint-disable no-console */
import express from 'express';

const logger = (
  req: express.Request,
  _res: express.Response,
  next: express.NextFunction
): void => {
  console.log('Method:', req.method);
  console.log('Path:  ', req.path);
  console.log('Body:  ', req.body);
  console.log('---');
  next();
};

export default logger;
