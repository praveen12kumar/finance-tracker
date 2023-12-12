import Savings from "../models/saving.model.js";


const getSaving = async (req, res)=>{
    try {
        const savings = await Savings.find({});
        res.status(200).json({
            success: true,
            message: "All savings Found",
            savings
        })
    } catch (error) {
        res.staus(500).json({
            success: false,
            message: "Failed to fetch the savings",
            
        })
    }
};

const addSaving = async (req, res)=>{
    try {
        const {description, amount, category} = req.body;
        if(!description || !category || !amount){
            res.status(404).json({
                success: false,
                message: "Enter description or amount or category",
            })
        }
        const saving = await Savings.create({description, amount, category});
        res.status(200).json({
            success:true,
            message:"Saving added successfully",
            saving,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to add Saving "
        })
    }
}

export {addSaving, getSaving};