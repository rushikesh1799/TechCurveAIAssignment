import React from "react";
import ListSvg from "./ListSvg";

function ServicesInfo() {
    return (
        <div className="about-wrapper">
            <div className="about-top">
                <h2 className="about-title">SERVICES</h2>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-option">
                    <ListSvg propName="Call Expert" />
                    <ListSvg propName="Customer Service" />
                </div>
            </div>
        </div>
    );
}

export default ServicesInfo;
