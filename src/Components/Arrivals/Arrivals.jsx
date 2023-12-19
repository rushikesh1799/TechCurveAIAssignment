import React from "react";
import "./Arrivals.css";
import ArrivalsData from "./ArrivalsData";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

function Arrivals() {
    return (
        <section className="arrivals-wrapper">
            <ComponentHeader headerText="NEW ARRIVAL" />
            <ArrivalsData />
        </section>
    );
}

export default Arrivals;
