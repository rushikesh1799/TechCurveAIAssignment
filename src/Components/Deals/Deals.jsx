import React from "react";
import "./Deals.css";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import DealsData from "./DealsData";

function Deals() {
    return (
        <div className="deals-wrapper">
            <ComponentHeader headerText="DEAL OF THE DAY" />
            <DealsData />
        </div>
    );
}

export default Deals;
