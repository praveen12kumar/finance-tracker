const initialState = {
    income: [],
    loading: false,
    error: null,
  };
  
  export const incomeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "LOADING":
        return { ...state, loading: true, error: null };
      case "FETCH_INCOME":
        return { ...state, income: payload, loading: false, error: null };
      case "ADD_INCOME":
        return {
          ...state,
          income: [...state.income, payload],
          loading: false,
          error: null,
        };
      case "FETCH_INCOME_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error adding income.",
        };
  
      default:
        return state;
    }
  };
  