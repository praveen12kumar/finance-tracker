import Expense from "../models/expense.model.js";


const getExpense = async(req, res)=>{
    try {
        const expense = await Expense.find({});
        res.status(201).json({
            success: true,
            message:"All Expenses found Successfully",
            expense
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Faild to fetch Expenses"
        })
    }
};

const addExpense = async(req, res)=>{
    try {
        const {description, amount, category} = req.body;
        if(!description | !amount | !category){
            return res.status(404).json({
                success: false,
                message: "Enter description or amount or category",
            })
        }

        const expense = await Expense.create({description, amount, category});
        res.status(201).json({
            success: true,
            message:"Expense added Successfully",
            expense,
        })
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in creating expense"
        })
    }
};
export {getExpense, addExpense};