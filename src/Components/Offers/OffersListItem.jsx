import React from "react";
import ProductRatingStar from "../SideSection/ProductsCard/ProductRatingStar";

function OffersListItem({ product }) {
    return (
        <div className="offer-card">
            <div className="offer-card-top">
                <img
                    src={product.img}
                    alt="SQL-Backup"
                    className="offer-card-img"
                />
                <div className="offer-card-text">
                    <h4 className="offer-percentage">Flat 40% Off</h4>
                </div>
            </div>
            <div className="offer-card-bottom">
                <h4 className="offer-card-info-title">{product.productName}</h4>
                <ProductRatingStar />
                <div className="offer-card-description">
                    <p className="description-txt">
                        Quam ullamcorper aliquet rhoncus in eget pharetra luctus
                        nisi aliquam. Lorem cursus
                    </p>
                    <p className="description-txt">
                        Save upto <span>28%</span>, Get <span>GST Invoice</span>{" "}
                        on your business purchase |
                    </p>
                </div>
                <div className="terms-and-conditions">
                    <p className="terms-and-conditions-text">T&C</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.71889 1.207L6.3663 2.29268C6.25709 2.38046 6.10903 2.42991 5.95454 2.4302H3.82632C2.8424 2.4302 2.04522 3.07064 2.04522 3.8611V5.57087C2.04491 5.69528 1.98338 5.81454 1.87405 5.90264L0.521464 6.98831C0.18757 7.25665 0 7.62053 0 7.99995C0 8.37936 0.18757 8.74325 0.521464 9.01158L1.87405 10.0982C1.98331 10.186 2.04486 10.3049 2.04522 10.429V12.1388C2.04522 12.9293 2.8424 13.5697 3.82632 13.5697H5.95454C6.1094 13.5699 6.25784 13.6194 6.3675 13.7072L7.71889 14.7939C8.05289 15.0621 8.50583 15.2128 8.97811 15.2128C9.45038 15.2128 9.90333 15.0621 10.2373 14.7939L11.5899 13.7072C11.6991 13.6194 11.8472 13.57 12.0017 13.5697H14.1299C15.1138 13.5697 15.911 12.9293 15.911 12.1388V10.429C15.9113 10.3046 15.9728 10.1854 16.0822 10.0973L17.4348 9.01158C17.7686 8.74325 17.9562 8.37936 17.9562 7.99995C17.9562 7.62053 17.7686 7.25665 17.4348 6.98831L16.0822 5.90167C15.9729 5.81393 15.9114 5.69499 15.911 5.57087V3.8611C15.911 3.07064 15.1138 2.4302 14.1299 2.4302H12.0017C11.8468 2.43016 11.6982 2.3807 11.5887 2.29268L10.2373 1.20604C9.90333 0.9378 9.45038 0.787109 8.97811 0.787109C8.50583 0.787109 8.05289 0.938761 7.71889 1.207ZM5.56194 10.0636L11.5468 5.25546L12.3943 5.93629L6.4094 10.7444L5.56194 10.0636ZM5.98567 5.59588V6.5575H7.18264V5.59588H5.98567ZM10.7736 10.404H11.9706V9.44239H10.7736V10.404Z"
                            fill="#7B7B7B"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default OffersListItem;
