import mongoose from "mongoose";

const savingsSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
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
        enum:["Debt","Equity","Property","Gold","Bank Account","Fixed deposits","Mutual Funds","Travel-Plans","Other"],
        default:"Other"
    }
},{
    timestamps:true
})

const Savings = mongoose.model("Savings",savingsSchema);

export default Savings