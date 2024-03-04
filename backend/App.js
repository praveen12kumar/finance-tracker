import express from "express";
import {config} from "dotenv";
import cors from "cors";
import helmet from "helmet";
import {errorHandler} from "./middlewares/errorHandler.js";
import IncomeRouter from "./router/IncomeRouter.js";
import ExpenseRouter from "./router/ExpenseRouter.js";
import SavingRouter from "./router/SavingRouter.js";
import path from "path";

config({path:"backend/config/config.env"})

const __dirname = path.resolve();

const app = express();

// using middleware 
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routers

app.use('/api/v1', IncomeRouter);
app.use('/api/v1', ExpenseRouter);
app.use('/api/v1', SavingRouter);


app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})






app.use(errorHandler);

export default app;