import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import { expenseReducer } from "../reducers/expenseReducer";
import { savingReducer } from "../reducers/savingReducer";
import { incomeReducer } from "../reducers/incomeReducer";


const reducers = combineReducers({
    income:incomeReducer,
    expense: expenseReducer,
    saving: savingReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;