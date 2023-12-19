import React from "react";
import "./ComponentHeader.css";

function ComponentHeader({ headerText }) {
    return (
        <div className="header-wrapper">
            <div className="header-main">
                <h4 className="header-title">{headerText}</h4>
            </div>
        </div>
    );
}

export default ComponentHeader;
