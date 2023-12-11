import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    category:{
        type:String,
        enum:["Rent","Bills","Shopping","Loans","Transportation","Groceries","Medical","Utilities","Dining","Party","Travel","Miscellaneous"],
        default:"Miscellaneous"
    }
},{
    timestamps:true,
});

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;