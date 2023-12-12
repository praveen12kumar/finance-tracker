import express from 'express';
import {addSaving, getSaving } from '../controller/SavingController.js';
const SavingRouter = express.Router();

SavingRouter.get('/saving', getSaving);
SavingRouter.post('/saving', addSaving);

export default SavingRouter;