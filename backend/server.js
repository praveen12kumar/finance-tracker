import app from "./App.js";
import connectDB from "./config/data.js";


connectDB();


app.listen(process.env.PORT, ()=>{
    console.log("server listening on port", process.env.PORT);
})

