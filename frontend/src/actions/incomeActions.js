import axios from "axios";

const fetchIncome = ()=> async(dispatch)=>{
    try {
        dispatch({type: "LOADING"});
        const response = await axios.get("https://finance-tracker-puce.vercel.app/api/v1/income")
        console.log(response)

        dispatch({type:"FETCH_INCOME", payload: response.data.income})

    } catch (error) {
        console.log("Error in fetching data", error.message);
        dispatch({type:"FETCH_INCOME_FAILURE"})
    }
};


const addIncome = (income)=> async(dispatch)=>{
    console.log("income", income);
    try {
        const {data} = await axios({
            method: "POST",
            url:`https://finance-tracker-l6zs.onrender.com/api/v1/income`,
            data:income
        })
        console.log(data);
        dispatch({type:"ADD_INCOME", payload:data})

    } catch (error) {
        console.log("Error in fetching data", error.message);
        dispatch({type:"FETCH_EXPENSE_FAILURE"})
    }
}

export {fetchIncome, addIncome};