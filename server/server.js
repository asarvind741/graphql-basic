import express  from "express";
import mongoose from './config/mongoose';
const cors = require("cors");
const db = mongoose();
const app = express();



app.use('*', cors());

require('./graphql/index')(app);


// Up and Running at Port 4000

