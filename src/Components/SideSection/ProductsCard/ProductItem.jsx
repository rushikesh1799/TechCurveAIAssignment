import React from "react";

import ProductRatingStar from "./ProductRatingStar";

function ProductItem({ product }) {
    return (
        <div className="product-wrapper">
            <img src={product.img} alt="atlas-png" className="product-img" />
            <div className="product-info">
                <h4 className="product-title">Quis ullamcorper</h4>
                <ProductRatingStar />
            </div>
        </div>
    );
}

export default ProductItem;
