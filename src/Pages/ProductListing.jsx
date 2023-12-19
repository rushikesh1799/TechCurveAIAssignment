import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import PaginationProducts from "../Components/Products/PaginationProducts";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

function ProductListing() {
    return (
        <>
            <Navbar />
            <Breadcrumb propName="All Products" />
            <PaginationProducts />

            <Newsletter />
            <Footer />
        </>
    );
}

export default ProductListing;
