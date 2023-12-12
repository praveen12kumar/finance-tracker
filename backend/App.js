import express from "express";
import {config} from "dotenv";
import {errorHandler} from "./middlewares/errorHandler.js";
import IncomeRouter from "./router/IncomeRouter.js";
import ExpenseRouter from "./router/ExpenseRouter.js";
import SavingRouter from "./router/SavingRouter.js";

config({path:"backend/config/config.env"})
const app = express();



// using middleware 
app.use(express.json());
app.use(express.urlencoded());


//Routers

app.use('/api/v1', IncomeRouter);
app.use('/api/v1', ExpenseRouter);
app.use('/api/v1', SavingRouter);


app.use(errorHandler);

export default app;