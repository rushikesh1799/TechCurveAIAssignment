export const DataReducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, products: action.payload };
        case "SET_NAVFLAG":
            return { ...state, navFlag: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};
