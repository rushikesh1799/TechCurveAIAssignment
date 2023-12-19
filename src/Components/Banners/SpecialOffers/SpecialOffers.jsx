import React, { useEffect, useState } from "react";
import "./SpecialOffers.css";

const images = [
    "https://s3-alpha-sig.figma.com/img/affc/102d/db08a212b7f0864d114d505d54943cce?Expires=1704067200&Signature=QcV~c2W~Zth64OK-LInpNve2Gojz6VTw4NDsK48RxrmP6~buVJR5539mes8iLWWbGn2bXcwRrTheR3Y8srkyKCbdn08bK441oesfANDIJzbx15Tveos2jCitOtT8kO2DzZ2ngNufEpHKYxmxYXzLdcnS7qaFrxQKaHF3yRcJOc9Vf0Q6HUi4aa8w8uscaSLMWkOMnNvXbtqSlWOFBYvFyWKgZpkL8~fAb0Cx1cmmpG10DYJ5CJkISyuVkS31TjcdQOJXTbwtbKl1mQ9GPR7~1j-QogJyOe5DQus5dWIO45ZUM3YX~NAuh3uxhUrQJ6Xr5T4qdRz4Nkbr3y9pZIab9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/36f4/aacf/e12d8dc7aa9ec7021452da7067fa555c?Expires=1704067200&Signature=F4~Mf5RSoyhFwNiq0Dn8j7QDs9u-Z6BjoUh-Ld6oWMA38vxyM-Ff~exTa~WYEjzwlD3e9euywpsyrAcm9FMlgGkfxPm0y65lY~9vttrdq5IW1ndYvUdjNC27vtRP-y-YAw3n-rK1eN9HRDX~pzV8m6TFNRm8JcqVr0z5c4yEHlXL7qGpjmGZtyR37r7QkvMTwSq86ZATUlOOE4Zl2SO3oWsT0ldhCWrpBuzaWgYtVkjDG7UJRhMjWQeHC55I5hJDZG-h4M-TqnKGr095VnoBbraXnak3bqGxqt~V3arB0grE0tGlSjD1PdOpPYPP0OrjCF5c9FmSTQDSKloc~fQqvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/affc/102d/db08a212b7f0864d114d505d54943cce?Expires=1704067200&Signature=QcV~c2W~Zth64OK-LInpNve2Gojz6VTw4NDsK48RxrmP6~buVJR5539mes8iLWWbGn2bXcwRrTheR3Y8srkyKCbdn08bK441oesfANDIJzbx15Tveos2jCitOtT8kO2DzZ2ngNufEpHKYxmxYXzLdcnS7qaFrxQKaHF3yRcJOc9Vf0Q6HUi4aa8w8uscaSLMWkOMnNvXbtqSlWOFBYvFyWKgZpkL8~fAb0Cx1cmmpG10DYJ5CJkISyuVkS31TjcdQOJXTbwtbKl1mQ9GPR7~1j-QogJyOe5DQus5dWIO45ZUM3YX~NAuh3uxhUrQJ6Xr5T4qdRz4Nkbr3y9pZIab9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carousalImg, setCarousalImg] = useState(images);

    const handleForwardClick = () => {
        const rotatedImages = [...carousalImg];
        const removedImg = rotatedImages.shift();
        rotatedImages.push(removedImg);
        setCarousalImg(rotatedImages);
    };

    const handleBackwardClick = () => {
        const rotatedImages = [...carousalImg];
        const removedImg = rotatedImages.pop();
        rotatedImages.unshift(removedImg);
        setCarousalImg(rotatedImages);
    };

    return (
        <div className="special-offers-banner-main">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="56"
                viewBox="0 0 63 56"
                fill="none"
                onClick={handleBackwardClick}
                className="left-arrow"
            >
                <g filter="url(#filter0_d_0_609)">
                    <path
                        d="M31.4691 0C26.0362 0 20.7254 1.40513 16.2081 4.03771C11.6908 6.67028 8.17005 10.4121 6.09097 14.7899C4.0119 19.1677 3.46792 23.9849 4.52782 28.6324C5.58773 33.2798 8.2039 37.5488 12.0455 40.8994C15.8872 44.2501 20.7817 46.5319 26.1102 47.4563C31.4386 48.3807 36.9618 47.9063 41.9811 46.0929C47.0004 44.2796 51.2905 41.2088 54.3088 37.2689C57.3272 33.3289 58.9382 28.6968 58.9382 23.9583C58.9243 17.6079 56.0257 11.5211 50.8773 7.03068C45.7289 2.54026 38.7501 0.0121772 31.4691 0ZM42.0342 25.8013H26.0017L31.3635 30.4778C31.7586 30.8232 31.9805 31.2913 31.9805 31.7793C31.9805 32.2673 31.7586 32.7354 31.3635 33.0809C31.1668 33.2536 30.9319 33.3896 30.6731 33.4806C30.4143 33.5717 30.137 33.616 29.858 33.6108C29.5829 33.6156 29.3097 33.571 29.0553 33.4798C28.8009 33.3887 28.5706 33.2529 28.3788 33.0809L19.425 25.2714C19.2259 25.0988 19.0647 24.8958 18.9495 24.6725C18.738 24.2143 18.738 23.7024 18.9495 23.2442C19.0647 23.0209 19.2259 22.8179 19.425 22.6452L28.3788 14.8357C28.7808 14.5181 29.3074 14.3474 29.8496 14.3591C30.3919 14.3707 30.9082 14.5638 31.2917 14.8983C31.6753 15.2328 31.8966 15.6832 31.91 16.1561C31.9233 16.629 31.7277 17.0883 31.3635 17.4389L26.0017 22.1154H42.0342C42.5946 22.1154 43.132 22.3095 43.5283 22.6552C43.9245 23.0008 44.1472 23.4695 44.1472 23.9583C44.1472 24.4471 43.9245 24.9159 43.5283 25.2615C43.132 25.6071 42.5946 25.8013 42.0342 25.8013Z"
                        fill="#3EB489"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_0_609"
                        x="0"
                        y="0"
                        width="62.9382"
                        height="55.9167"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_0_609"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_0_609"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
            {carousalImg.slice(0, 3).map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="special-offer-banner"
                />
            ))}
            {carousalImg.slice(0, 1).map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="special-offer-banner-mobile"
                />
            ))}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="56"
                viewBox="0 0 63 56"
                fill="none"
                onClick={handleForwardClick}
                className="left-arrow"
            >
                <g filter="url(#filter0_d_0_610)">
                    <path
                        d="M31.4691 47.916C36.902 47.916 42.2129 46.5109 46.7301 43.8783C51.2474 41.2457 54.7682 37.504 56.8473 33.1261C58.9263 28.7483 59.4703 23.9311 58.4104 19.2836C57.3505 14.6362 54.7343 10.3672 50.8927 7.01659C47.0511 3.66596 42.1566 1.38415 36.8281 0.459709C31.4996 -0.464729 25.9765 0.00972748 20.9571 1.82307C15.9378 3.63643 11.6477 6.70723 8.62939 10.6472C5.61105 14.5871 4.00001 19.2192 4.00001 23.9577C4.01397 30.3081 6.91251 36.3949 12.0609 40.8853C17.2094 45.3758 24.1881 47.9038 31.4691 47.916ZM20.9041 22.1147H36.9365L31.5748 17.4383C31.1796 17.0928 30.9577 16.6247 30.9577 16.1367C30.9577 15.6487 31.1796 15.1806 31.5748 14.8351C31.7715 14.6624 32.0064 14.5265 32.2652 14.4354C32.524 14.3443 32.8013 14.3 33.0803 14.3052C33.3553 14.3005 33.6285 14.345 33.8829 14.4362C34.1374 14.5273 34.3676 14.6631 34.5594 14.8351L43.5133 22.6446C43.7124 22.8172 43.8735 23.0202 43.9887 23.2435C44.2002 23.7018 44.2002 24.2136 43.9887 24.6718C43.8735 24.8951 43.7124 25.0981 43.5133 25.2708L34.5594 33.0803C34.1574 33.3979 33.6308 33.5686 33.0886 33.557C32.5464 33.5453 32.03 33.3522 31.6465 33.0177C31.2629 32.6832 31.0416 32.2329 31.0282 31.7599C31.0149 31.287 31.2106 30.8277 31.5748 30.4771L36.9365 25.8006H20.9041C20.3437 25.8006 19.8062 25.6065 19.4099 25.2608C19.0137 24.9152 18.7911 24.4465 18.7911 23.9577C18.7911 23.4689 19.0137 23.0001 19.4099 22.6545C19.8062 22.3089 20.3437 22.1147 20.9041 22.1147Z"
                        fill="#3EB489"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_0_610"
                        x="7.62939e-06"
                        y="-0.000732422"
                        width="62.9382"
                        height="55.9167"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_0_610"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_0_610"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

function SpecialOffers() {
    return (
        <div className="special-offers-banner-wrapper">
            <Carousel images={images} />
        </div>
    );
}

export default SpecialOffers;
