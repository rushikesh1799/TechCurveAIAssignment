import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router";
import { DataContext } from "../../Context/DataContext";

function Products({}) {
    const navigate = useNavigate();
    const { products } = useContext(DataContext);

    return (
        <section className="products-wrapper">
            <h4 className="products-title">ALL PRODUCTS</h4>
            <div className="products-main">
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
