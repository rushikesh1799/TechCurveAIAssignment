import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import { useContext, useEffect } from "react";
import { DataContext } from "./Context/DataContext";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
                path="/view-all-products"
                element={<ProductListing />}
            ></Route>
        </Routes>
    );
}

export default App;
