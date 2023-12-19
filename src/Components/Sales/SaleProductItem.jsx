import React from "react";
import ProductRatingStar from "../SideSection/ProductsCard/ProductRatingStar";
import SaleDateTimer from "./SaleDateTimer";

function SaleProductItem({ product }) {
    return (
        <div className="sale-card-wrapper">
            <div className="sale-card">
                <img
                    src={product.img}
                    alt="SAP-img"
                    className="sale-card-img"
                />
                <SaleDateTimer />
                <div className="sale-card-info-wrapper">
                    <h2 className="sale-card-info-title">
                        {product.productName}
                    </h2>
                    <div className="sale-card-rating-wrapper">
                        <div className="sale-card-rating">
                            <ProductRatingStar />
                            <h4 className="rating-number">(4.4)</h4>
                        </div>
                    </div>
                    <div className="tags_wrapper">
                        <div className="tags-main">
                            <h4 className="tag">Features</h4>
                        </div>
                        <div className="tags-main">
                            <h4 className="tag">Plan</h4>
                        </div>
                        <div className="tags-main">
                            <h4 className="tag">Write Review</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleProductItem;
