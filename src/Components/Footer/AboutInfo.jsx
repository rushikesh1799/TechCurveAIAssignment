import React from "react";
import ListSvg from "./ListSvg";

function AboutInfo() {
    return (
        <div className="about-wrapper">
            <div className="about-top">
                <h2 className="about-title">About ConQT</h2>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-option">
                    <ListSvg propName="About Us" />
                    <ListSvg propName="Contact Us" />
                    <ListSvg propName="Find Vendor" />
                    <ListSvg propName="Find Customer" />
                    <ListSvg propName="ConQT University" />
                </div>
            </div>
        </div>
    );
}

export default AboutInfo;
