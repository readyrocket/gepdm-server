import '../database/config';
import 'reflect-metadata';

import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(express.json());

export { app, PORT };
