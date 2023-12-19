import React from "react";
import CategoryCard from "./CategoriesCard/CategoryCard";
import ProductCard from "./ProductsCard/ProductCard";

function SideSection() {
    return (
        <div className="sidesection-wrapper">
            <CategoryCard />
            <ProductCard />
            <CategoryCard />
            <ProductCard />
        </div>
    );
}

export default SideSection;
