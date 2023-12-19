import React from "react";
import SaleHeader from "./SaleHeader";
import SaleData from "./SaleData";
import "./Sales.css";

function Sales() {
    return (
        <section className="sales-wrapper">
            <SaleHeader />
            <SaleData />
        </section>
    );
}

export default Sales;
