import "reflect-metadata"
import express, { json } from 'express';
import { router } from './routes';
import dotenv from "dotenv";

dotenv.config();

import './database'

const app = express();

app.use(express.json())
app.use(router)



app.listen(3333, () =>{
  console.log("server on port 3333")
})