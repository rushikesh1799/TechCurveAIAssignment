import React from "react";
import "./CategoryCard.css";

function CategoryOption({ categoryName }) {
    return (
        <div className="software-category-wrapper">
            <div className="software-category-main">
                <h4 className="category-name">{categoryName}</h4>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
            >
                <path
                    d="M1.19141 8L6 4L1.19141 0L0 0.991063L3.61719 4L0 7.00893L1.19141 8Z"
                    fill="#3EB489"
                />
            </svg>
        </div>
    );
}

function CategoryCard() {
    return (
        <div className="sidesection-catgories">
            <div className="categories-options">
                <CategoryOption categoryName="Software" />
                <CategoryOption categoryName="Hardware" />
            </div>
            <div className="software-category-main">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                >
                    <path
                        d="M1.55556 14H12.4444C12.857 14 13.2527 13.8361 13.5444 13.5444C13.8361 13.2527 14 12.857 14 12.4444V1.55556C14 1.143 13.8361 0.747335 13.5444 0.455612C13.2527 0.163888 12.857 0 12.4444 0H1.55556C1.143 0 0.747335 0.163888 0.455612 0.455612C0.163888 0.747335 0 1.143 0 1.55556V12.4444C0 12.857 0.163888 13.2527 0.455612 13.5444C0.747335 13.8361 1.143 14 1.55556 14ZM3.11111 6.22222H6.22222V3.11111H7.77778V6.22222H10.8889V7.77778H7.77778V10.8889H6.22222V7.77778H3.11111V6.22222Z"
                        fill="#3EB489"
                    />
                </svg>
                <h4 className="category-name">More Categories</h4>
            </div>
        </div>
    );
}

export default CategoryCard;
