import express from 'express';
import { getExpense, addExpense } from '../controller/ExpenseController.js';

const ExpenseRouter = express.Router();


ExpenseRouter.get('/expense', getExpense);
ExpenseRouter.post('/expense', addExpense);


export default ExpenseRouter;