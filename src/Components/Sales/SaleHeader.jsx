import React from "react";
import "./Sales.css";

function SaleHeader() {
    return (
        <div className="sales-header-wrapper">
            <div className="sale-main-left">
                <h4 className="sale-title">Flash Sale</h4>
                <img
                    src="https://s3-alpha-sig.figma.com/img/82d0/5bdb/fe086575f7645b0fa96f3477a53fd414?Expires=1703462400&Signature=nUIgK2F83sYN3wsgnlRENoQSj3bGcUkgVtfvCS73Mg50mCP8ZRLTaPKqEtdzdP1a6lGg1~gWdmjVphDjlgdh13BrxwIP6HWe8~KkSYp9kDDU0-OkQX48G20qboZnbxjxcLUUdEufp6xUj4rmW3eUIPTzFfAIQS7ivfvIbKJ5yvNedP0HVTVe-1-hFZ7p~Rft0rMrR2Aiocyjxvw7Bq~6fcK9yia5nvkG-8QCk34heWNLfOw2eVOfSNvdCL1BL0gGYxKugl-2lDhqCKFbMW~P8ra5AQudrq4wiWPsrxsQkvpJiqBptCEDr-WUtiI2Y4TD0FwpRxaMpppCbBUaWxEgPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="fire-img"
                    className="fire"
                />
            </div>
            <div className="sale-main-right">
                <h4 className="end-time">ENDING IN</h4>
                <div className="timer-wrapper">
                    <div className="timer-count">
                        <h4 className="time">00</h4>
                    </div>
                    <span className="timer-divider">:</span>
                    <div className="timer-count">
                        <h4 className="time">00</h4>
                    </div>
                    <span className="timer-divider">:</span>
                    <div className="timer-count">
                        <h4 className="time">00</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleHeader;
