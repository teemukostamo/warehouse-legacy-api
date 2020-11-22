import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const PORT: string = process.env.PORT || '4000';

export default {
  PORT,
};
