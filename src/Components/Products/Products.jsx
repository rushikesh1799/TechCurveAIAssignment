import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router";
import { DataContext } from "../../Context/DataContext";

function Products({}) {
    const navigate = useNavigate();
    const { products, loading } = useContext(DataContext);

    return (
        <section className="products-wrapper">
            <h4 className="products-title">ALL PRODUCTS</h4>
            <div className="products-main">
                {loading && (
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            strokeWidth="5"
                        ></circle>
                    </svg>
                )}
                {products.slice(0, 8).map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
            <div
                className="view-more-wrapper"
                onClick={() => navigate("/view-all-products")}
            >
                <div className="view-more-btn">
                    <h4 className="view-more-txt">View More</h4>
                </div>
            </div>
        </section>
    );
}

export default Products;
