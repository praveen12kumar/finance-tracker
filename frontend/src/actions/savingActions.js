import axios from "axios";

const fetchSaving = ()=> async(dispatch)=>{
    try {
        dispatch({type: "LOADING"});
        const response = await axios.get("https://finance-tracker-puce.vercel.app/api/v1/saving")
        //console.log("response",response.data.savings)

        dispatch({type:"FETCH_SAVING", payload: response.data.savings})

    } catch (error) {
        console.log("Error in fetching data", error.message);
        dispatch({type:"FETCH_SAVING_FAILURE"})
    }
};


const addSaving = (saving)=> async(dispatch)=>{
    console.log("saving",saving);
    dispatch({type:"LOADING"});
    try {
        const {data} = await axios({
            method: "POST",
            url:`https://finance-tracker-puce.vercel.app/api/v1/saving`,
            data:saving
        })
        dispatch({type:"ADD_SAVING", payload:data.saving})

    } catch (error) {
        console.log("Error in fetching data", error.message);
        dispatch({type:"FETCH_EXPENSE_FAILURE"})
    }
}

export {fetchSaving, addSaving};