export const DataReducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return { ...state, products: action.payload };
        case "SET_NAVFLAG":
            return { ...state, navFlag: action.payload };
    }
};
