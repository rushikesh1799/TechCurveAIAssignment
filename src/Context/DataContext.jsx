import { createContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

const initialState = {
    products: [],
    loading: true,
    error: "",
    navFlag: false,
};

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DataReducer, initialState);

    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({
                type: "SET_LOADING",
                payload: true,
            });
            try {
                const response = await fetch(
                    "https://dev-api.conqt.com/api/product/Get-All-Products",
                    requestOptions
                );
                const data = await response.json();
                dispatch({
                    type: "SET_LOADING",
                    payload: false,
                });
                dispatch({
                    type: "GET_DATA",
                    payload: data.data,
                });
            } catch (error) {
                dispatch({
                    type: "SET_ERROR",
                    payload: error.message,
                });
            }
        };
        fetchProducts();
    }, []);

    const { products, navFlag, loading, error } = state;
    return (
        <DataContext.Provider
            value={{ products, navFlag, loading, error, dispatch }}
        >
            {children}
        </DataContext.Provider>
    );
};
