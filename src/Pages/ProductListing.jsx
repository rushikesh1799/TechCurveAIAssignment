import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import PaginationProducts from "../Components/Products/PaginationProducts";

function ProductListing() {
    return (
        <>
            <Navbar />
            <PaginationProducts />
            <Newsletter />
            <Footer />
        </>
    );
}

export default ProductListing;
