import React from "react";
import ProductRatingStar from "../SideSection/ProductsCard/ProductRatingStar";

function ArrivalProductItem({ product }) {
    return (
        <div className="arrival-card">
            <div className="arrival-product-img">
                <img
                    src={product.img}
                    alt="Atlas-img"
                    className="arrival-product-card-img"
                />
            </div>
            <div className="arrival-product-info">
                <div className="arrival-product-title-info">
                    <h2 className="arrival-product-title">{product.productName}</h2>
                    <ProductRatingStar />
                </div>
                <div className="quantity-info">
                    <div className="quantity">
                        <h4 className="availability">
                            Available:{" "}
                            <span className="availability-qty">200</span>
                        </h4>
                        <h4 className="sold">
                            Sold : <span className="sold-qty">10</span>
                        </h4>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="197"
                        height="8"
                        viewBox="0 0 197 8"
                        fill="none"
                    >
                        <rect
                            x="1.04242"
                            width="195.958"
                            height="8"
                            rx="4"
                            fill="#D9D9D9"
                        />
                        <rect
                            width="65.6667"
                            height="8"
                            rx="4"
                            fill="#0F2B95"
                        />
                    </svg>
                </div>
                <div className="pricing-btn">
                    <h2 className="pricing-btn-txt">Get Pricing</h2>
                </div>
            </div>
        </div>
    );
}

export default ArrivalProductItem;
