import React from "react";

function SaleDateTimer() {
    return (
        <div className="sale-date-timer-wrapper">
            <div className="sale-timer">
                <h2 className="sale-timer-details sale-timer-digit">120</h2>
                <h4 className="sale-timer-details sale-timer-word">Day</h4>
            </div>
            <div className="sale-timer">
                <h2 className="sale-timer-details sale-timer-digit">6</h2>
                <h4 className="sale-timer-details sale-timer-word">Hours</h4>
            </div>
            <div className="sale-timer">
                <h2 className="sale-timer-details sale-timer-digit">39</h2>
                <h4 className="sale-timer-details sale-timer-word">Min</h4>
            </div>
            <div className="sale-timer">
                <h2 className="sale-timer-details sale-timer-digit">22</h2>
                <h4 className="sale-timer-details sale-timer-word">Sec</h4>
            </div>
        </div>
    );
}

export default SaleDateTimer;
