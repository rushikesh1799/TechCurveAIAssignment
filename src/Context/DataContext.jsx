import { createContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

const initialState = {
    products: [],
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
            try {
                const response = await fetch(
                    "https://dev-api.conqt.com/api/product/Get-All-Products",
                    requestOptions
                );
                const data = await response.json();
                dispatch({
                    type: "GET_DATA",
                    payload: data.data,
                });
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchProducts();
    }, []);

    const { products, navFlag } = state;
    return (
        <DataContext.Provider value={{ products, navFlag, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};
