import React, { useContext } from "react";

import Arrivals from "../Components/Arrivals/Arrivals";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products/Products";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import SideSection from "../Components/SideSection/SideSection";
import Sales from "../Components/Sales/Sales";
import Deals from "../Components/Deals/Deals";
import Offers from "../Components/Offers/Offers";
import SpecialOffers from "../Components/Banners/SpecialOffers/SpecialOffers";
import ServicesBanner from "../Components/Banners/ServicesBanner/ServicesBanner";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import DhruvaBanner from "../Components/Banners/DhruvaBanner/DhruvaBanner";
import MobileSideNav from "../Components/Navbar/MobileSideNav";
import { DataContext } from "../Context/DataContext";

function Home() {
    const { navFlag } = useContext(DataContext);

    return (
        <>
            <Navbar />
            {navFlag && <MobileSideNav />}
            <DhruvaBanner />
            <Breadcrumb />
            <Products />
            <div className="main-section">
                <SideSection />
                <div className="main-section-right">
                    <Sales />
                    <Arrivals />
                    <Deals />
                    <Offers />
                </div>
            </div>
            <SpecialOffers />
            <ServicesBanner />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;
