import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router";
import { DataContext } from "../../Context/DataContext";

function PaginationProducts() {
    const navigate = useNavigate();
    const { products, loading } = useContext(DataContext);

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * 8;
    const indexOfFirstItem = indexOfLastItem - 8;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / 8);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevNext = (direction) => {
        const newPage =
            direction === "prev" ? currentPage - 1 : currentPage + 1;
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="products-wrapper">
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
                {currentItems?.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
            <div className="pagination-btns">
                <button
                    onClick={() => handlePrevNext("prev")}
                    disabled={currentPage === 1}
                    className="prev-btn pagination-btn"
                >
                    Previous
                </button>

                <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="pagination-btn mid-btns"
                >
                    1
                </button>

                {currentPage > 3 && <span>...</span>}

                {currentPage > 1 && (
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="pagination-btn mid-btns"
                    >
                        {currentPage - 1}
                    </button>
                )}
                <button
                    onClick={() => handlePageChange(currentPage)}
                    disabled
                    className="pagination-btn mid-btns"
                >
                    {currentPage}
                </button>

                {currentPage < totalPages && (
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="pagination-btn mid-btns"
                    >
                        {currentPage + 1}
                    </button>
                )}

                {currentPage < totalPages - 2 && <span>...</span>}

                {totalPages > 1 && (
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        className="pagination-btn mid-btns"
                    >
                        {totalPages}
                    </button>
                )}

                <button
                    onClick={() => handlePrevNext("next")}
                    disabled={currentPage === totalPages}
                    className="next-btn pagination-btn"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PaginationProducts;
