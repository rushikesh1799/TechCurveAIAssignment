import React from "react";
import downArrowSvg from "../../assets/down-arrow.svg";

function NavOptions({ propName, isDropDown }) {
    return (
        <div className="categories" onMouseEnter={(e) => console.log(propName)}>
            <span className="categories-txt">{propName}</span>
            {isDropDown ? (
                <img
                    src={downArrowSvg}
                    alt="down-arrow-png"
                    className="down-arrow"
                />
            ) : (
                <></>
            )}
        </div>
    );
}

export default NavOptions;
