const initialState = {
    expense: [],
    loading: false,
    error: null,
  };
  
  export const expenseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "LOADING":
        return { ...state, loading: true, error: null };
  
      case "FETCH_EXPENSE":
        return { ...state, expense: payload, loading: false, error: null };
  
      case "ADD_EXPENSE":
        return {
          ...state,
          expense: [...state.expense, payload],
          loading: false,
          error: null,
        };
      case "ADD_EXPENSE_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error adding expense.",
        };
  
      default:
        return state;
    }
  };
  