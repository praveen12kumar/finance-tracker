import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addIncome } from '../../actions/incomeActions';
import { addExpense } from '../../actions/expenseActions';
import {addSaving} from "../../actions/savingActions";
import "./incomeExpense.css";

const IncomeExpense = () => {

    const incomeCategories = ["Salary","Wages","Freelance","Dividend","Interest","Rent Income","Profit","Capital Gains","Bonus","Gifts","None"]
    const expenseCategories =["Rent","Bills","Shopping","Loans","Transportation","Groceries","Medical","Utilities","Dining","Party","Travel","Miscellaneous"];
    const savingCategories = ["Debt","Equity","Property","Gold","Bank Account","Fixed deposits","Mutual Funds","Travel Plans","Other"];

    const [Categories, setSCategories] = useState(incomeCategories);


    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        amount:0,
        description:"",
        category:"",
        entryType:"Income"
    });

    const submitHandler = (e)=>{
        e.preventDefault();

        const data={
            amount:inputData.amount,
            description:inputData.description,
            category:inputData.category,
        }
        
        if(inputData.entryType === "Income"){
            dispatch(addIncome(data))
        }
        else if(inputData.entryType === "Expense"){
            dispatch(addExpense(data))
        }
        else if(inputData.entryType === "Saving"){
            dispatch(addSaving(data))
        }


        setInputData({
            amount:0,
            description:"",
            category:"",
            entryType:"Income"
        })
    };

    const handleForm = (e)=>(
        setInputData((prev)=>({
            ...prev, [e.target.name] : e.target.value,
        }))
    );

    const handleCategory = (value)=>{
        if(value === "Income"){
            setSCategories(incomeCategories);
            setInputData((prev)=>({...prev,  entryType:value}))
        }
        else if(value === "Expense"){
            setSCategories(expenseCategories);
            setInputData((prev)=>({...prev,  entryType:value}))
        }
        else{
            setSCategories(savingCategories);
            setInputData((prev)=>({...prev,  entryType:value}))
        }
    }

  return (
    <div className='content incomeExpense'>
      <h2 className='heading-title'> New Entry Page</h2>
      
      <form onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="">Amount</label>
            <input type="number" className='form-control' id='amount' name='amount' required onChange={handleForm}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Description</label>
            <input type="text" className='form-control' id='description' name='description' required onChange={handleForm}/>
        </div>

        <div className="form-group">
            <label htmlFor="">Entry Type</label>
            <select name="entryType" className='form-control' id="" required onChange={(e)=>handleCategory(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
                <option value="Saving">Savings</option>
            </select>
        </div>
        
        <div className="form-group">
            <label htmlFor="">Category</label>
            <select name="category" id="category" className='form-control' required onChange={handleForm}>
            {
                Categories.map((category, index) =>(
                    <option value={category}  key={index}>{category}</option>
                ))
            }
            </select>
        </div>
        <div className="btn-section">
            <input type="submit" className='btn'/>
        </div>
      </form>
    </div>
  )
}

export default IncomeExpense
