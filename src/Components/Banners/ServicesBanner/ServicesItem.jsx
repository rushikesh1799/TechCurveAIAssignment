import React from "react";

function ServicesItem({ service }) {
    return (
        <div className="softwares-info-card">
            <img
                src={service.img}
                alt="product-img"
                className="banner-product-img"
            />
            <h2 className="banner-product-txt">{service.serviceName}</h2>
        </div>
    );
}

export default ServicesItem;
