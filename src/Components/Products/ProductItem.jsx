import React from "react";

function ProductItem({ product }) {
    return (
        <div className="product-card">
            <div className="product-top-part">
                <div className="category-wrapper">
                    <span className="product-category-name">
                        {product.category_name}
                    </span>
                </div>
                <div className="product-card-info">
                    <div className="product-info-top">
                        <div className="product-card-img">
                            <img
                                src={product.brand_logo_url}
                                alt="google"
                                className="brand-img"
                            />
                        </div>

                        <div className="product-title">
                            <span className="title-name">
                                {product.product_name}
                            </span>
                            <div className="tags">
                                <span className="tag">Features</span>
                                <span className="tag">Plan</span>
                                <span className="tag">Write Review</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-info-bottom">
                        <p className="description-text">
                            {product.product_description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="product-lower-part">
                <h6 className="price-text">Price on Request</h6>
                <div className="price-details-btn">
                    <h5 className="pricing-btn-txt">Get Pricing</h5>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
