import express from 'express';
import cors from 'cors';
import connectDb from './db.js';
import controller from './controller';
import config from './config';

const app = express();

connectDb(config.db);

app.use(cors());
app.use(controller);

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));
