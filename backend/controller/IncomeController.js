import Income from "../models/Income.model.js";

const getIncome = async(req, res)=>{
    try {
        const income = await Income.find({});
        
        res.status(200).json({
            success:true,
            message:"All incomes found successfully",
            income,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:"Failed to fetch income."
        })
    }
}


const addIncome = async(req, res)=>{
    try {
        const {description, amount, category} = req.body;
        if(!description || !amount || !category){
            return res.status(404).json({
                success:false,
                error:"Enter description or amount or category"
            }); 
        }
        const income = await Income.create({description, amount, category})
        res.status(201).json({
            success:true,
            message:"Successfully added income",
            income,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to add income"
        })
    }
}


export {getIncome, addIncome};