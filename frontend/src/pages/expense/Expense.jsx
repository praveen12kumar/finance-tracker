import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchExpense} from "../../actions/expenseActions";
import { expenseCategory } from '../../utils';
import Table from '../../components/table/Table';
import Loader from '../../components/loader/Loader';
import Filter from '../../components/filter/Filter';
import "./expense.css";

const Expense = () => {
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        sort:"",
        category:"All",
    });

    const {expense, loading} = useSelector((state)=> state.expense);

    let filteredExpense = expense;

    if(filters.category === "All"){
        filteredExpense = expense;
    }
    else{
        filteredExpense = filteredExpense.filter((item)=> item.category === filters.category)
    }

    const totalExpense = filteredExpense.reduce((acc, curr)=> acc + curr.amount, 0);


    useEffect(()=>{
        dispatch(fetchExpense())
    },[dispatch])
  
    return (
    <div className='expense-section content'>
        <h2 className="heading-title">Expense</h2>
        {
            loading ? (<Loader/>) : 
            (
                <div className="expense-container">
                    <Filter filters={filters} setFilters={setFilters} filterdData={filteredExpense}>
                        <option value="All">All</option>
                        {
                            expenseCategory?.map((item, i)=>(
                                <option key={i} value={item}>{item}</option>
                            ))
                        }
                    </Filter>
                    <Table data={filteredExpense}/>
                    <h3>Summary</h3>
                    <div className="summary">
                        Total Expense: <strong>{totalExpense}</strong>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Expense
