import React from "react";
import ListSvg from "./ListSvg";

function BusinessInfo() {
    return (
        <div className="about-wrapper">
            <div className="about-top">
                <h2 className="about-title">FOR BUSINESSES</h2>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-option">
                    <ListSvg propName="FAQ's" />
                    <ListSvg propName="Write with Us" />
                    <ListSvg propName="Sell with Us" />
                </div>
            </div>
        </div>
    );
}

export default BusinessInfo;
