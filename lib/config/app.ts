import '../database/config';
import 'reflect-metadata';

import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
export const app = express();
export const PORT = Number(process.env.PORT) || 3333;
app.use(express.json());
