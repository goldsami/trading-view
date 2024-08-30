import dotenv from 'dotenv';
import express from 'express';
import Router from './router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(Router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});