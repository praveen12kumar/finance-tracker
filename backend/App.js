import express from "express";
import {config} from "dotenv";
config({path:"backend/config/config.env"})
const app = express();



// using middleware 
app.use(express.json());
app.use(express.urlencoded());

export default app;