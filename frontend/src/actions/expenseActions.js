import axios from "axios";

const fetchExpense = ()=> async(dispatch)=>{
    try {
        dispatch({type: "LOADING"});
        const response = await axios.get("https://finance-tracker-puce.vercel.app/api/v1/expense")
        //console.log(response)

        dispatch({type:"FETCH_EXPENSE", payload: response.data.expense})

    } catch (error) {
        console.log("Error in fetching data", error.message);
        dispatch({type:"FETCH_EXPENSE_FAILURE"})
    }
};

const addExpense = (expense)=> async(dispatch)=>{
    try {
        const {data} = await axios({
            method: "POST",
            url:`https://finance-tracker-puce.vercel.app/api/v1/expense`,
            data:expense
        })
        dispatch({type:"ADD_EXPENSE", payload:data.expense})

    } catch (error) {
        console.log("Error in fetching data", error.message);
        dispatch({type:"FETCH_EXPENSE_FAILURE"})
    }
}

export {fetchExpense, addExpense};