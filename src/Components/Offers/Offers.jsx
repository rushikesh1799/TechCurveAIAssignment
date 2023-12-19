import React from "react";
import "./Offers.css";
import ComponentHeader from "../ComponentHeader/ComponentHeader";
import OffersData from "./OffersData";

function Offers() {
    return (
        <div className="offers-wrapper">
            <ComponentHeader headerText="Offers Ending Soon" />
            <OffersData />
        </div>
    );
}

export default Offers;
