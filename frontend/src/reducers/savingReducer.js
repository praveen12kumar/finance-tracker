const initialState = {
    saving: [],
    loading: false,
    error: null,
  };
  
  export const savingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "LOADING":
        return { ...state, loading: true };
      case "FETCH_SAVING":
        return { ...state, saving: payload, loading: false, error: null };
  
      case "ADD_SAVING":
        return {
          ...state,
          saving: [...state.saving, payload],
          loading: false,
          error: null,
        };
  
      case "ADD_SAVING_FAILURE":
        return {
          ...state,
          loading: false,
          error: "Error adding saving.",
        };
  
      default:
        return state;
    }
  };
  