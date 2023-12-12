import express from 'express';
import { getIncome, addIncome } from '../controller/IncomeController.js';
const IncomeRouter = express.Router();




IncomeRouter.get('/income', getIncome);
IncomeRouter.post('/income',addIncome );






export default IncomeRouter;