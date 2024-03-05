import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {fetchIncome} from "../../actions/incomeActions";
import {fetchExpense} from "../../actions/expenseActions";
import {fetchSaving} from "../../actions/savingActions";
import ExpenseBreakdown from '../../components/expenseBreakdown/ExpenseBreakdown';

import "./financeReport.css";

const FinanceReports = () => {
  const dispatch = useDispatch();
  const [reportStatus, setReportStatus] = useState("");
  const {income} = useSelector((state)=> state.income);
  const {expense} = useSelector((state)=> state.expense);
  const {saving} = useSelector((state)=> state.saving);



  const totalIncome = income.reduce((acc, curr)=> acc + curr.amount, 0);
  const totalExpense = expense.reduce((acc, curr)=> acc + curr.amount, 0);
  const totalSaving = saving.reduce((acc, curr)=> acc + curr.amount, 0);
  const finalSaving = totalSaving + totalIncome - totalExpense;
 
  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpense());
    dispatch(fetchSaving());
  }, [dispatch]);

  return (
    <div className='content report'>
      <h2 className='heading-title'>Financial Reports</h2>
      <div className="report-container">
        <span>Select Report Type:</span>
        <select name="" id="" onChange={(e)=> setReportStatus(e.target.value)} >
            <option value="none">select report type</option>
            <option value="IncomeVsExpense">Income vs Expense</option>
            <option value="Expense">Expense Breakdown</option>
        </select>
      </div>
      <div className="">
        {reportStatus === "IncomeVsExpense" ? (
          <div className="incomevsexpene-report">
            <p>Total Income: <strong>{totalIncome}</strong></p>
            <p>Total Expense: <strong>{totalExpense}</strong></p>
            <p>Total Savings: <strong>{finalSaving}</strong></p>
          </div>
        ) : null}
      </div>
      {
        reportStatus === "Expense" ? (<ExpenseBreakdown/>) : null
      }
    </div>
  )
}

export default FinanceReports
