import React from 'react'
import { useSelector } from 'react-redux';
import "./expenseBreak.css";

const ExpenseBreakdown = () => {
    const {expense} = useSelector(state => state.expense);

    const expenseBreakdown = expense.reduce((acc, crr) => {
        const cat = acc?.find(
          (category) =>
            category?.category.toLowerCase() === crr?.category.toLowerCase()
        );
    
        if (!cat) {
          acc = [...acc, { category: crr.category, total: crr.amount }];
        } else {
          acc = acc.map((cat) => {
            if (cat.category.toLowerCase() === crr.category.toLowerCase()) {
              return { ...cat, total: cat.total + crr.amount };
            } else {
              return cat;
            }
          });
        }
        
        return acc;
      }, []);
  return (
    <div className='expensebreak'>
      {
        expenseBreakdown?.map((item)=>(
            <div className="breakdown" key={item.category}>
                <p>{item.category}</p>
                <p>{item.total}</p>
            </div>
        ))
      }
    </div>
  )
}

export default ExpenseBreakdown
