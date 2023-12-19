import React from "react";
import "./ProductCard.css";

import ProductItem from "./ProductItem";

const products = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/36f4/aacf/e12d8dc7aa9ec7021452da7067fa555c?Expires=1703462400&Signature=bozKD535izje0y6tXqjaFjEKTRH6OtOwST5D7mKvn0uHMNnx60JZSosL4OTremmQXSeSL2oFHF9-WCAHgjAjq2Mr8qKFxfDTM~p~LzzcNYwYTPDt3PVGwlxu3PR0-zudsezuNyTfD3DXk4jWQo-us9dLsIYHCtvwKYSQy7eWFnic3xULp1-NZsf~NBxpIlJhtvlEl1RG4CVm8M8bX16TIdOT~JQ2eDVlyv1-~lt5CZgaLuVFVsahuC1aQXbZpmJQ~kz30Idjt8~eXQq~VvTqFXndn1pRwrRdsLoa52nrkto7JqjEh~7lDibVo7ob7SdJx5RUy4sDentHzIv0H06XKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/36f4/aacf/e12d8dc7aa9ec7021452da7067fa555c?Expires=1703462400&Signature=bozKD535izje0y6tXqjaFjEKTRH6OtOwST5D7mKvn0uHMNnx60JZSosL4OTremmQXSeSL2oFHF9-WCAHgjAjq2Mr8qKFxfDTM~p~LzzcNYwYTPDt3PVGwlxu3PR0-zudsezuNyTfD3DXk4jWQo-us9dLsIYHCtvwKYSQy7eWFnic3xULp1-NZsf~NBxpIlJhtvlEl1RG4CVm8M8bX16TIdOT~JQ2eDVlyv1-~lt5CZgaLuVFVsahuC1aQXbZpmJQ~kz30Idjt8~eXQq~VvTqFXndn1pRwrRdsLoa52nrkto7JqjEh~7lDibVo7ob7SdJx5RUy4sDentHzIv0H06XKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/c5b3/e18d/bdc95abbe7beed27b789dbe9c125314a?Expires=1703462400&Signature=Ch8y~E9NsOiDVZEkCyRmAstYUqZXr0JesjV6kScQ9EPr4kVwtXw4uYure~hfwgh6IbXtWJhZYe8nPC2JFstz97jQf8Yj5LmWF7FoL1-kuRyGVrIo6WyGBnJUc~dd77JhxsY0dCIneGcDy27p5Br715VKnz-het6kgVFmGxyKMo2yEWA74hQSLNWUYA2PAdzsqh6QLzHC5puZvpmro~qMTtoyunYRrrSEJ3RBmVl6xCoMq9EhTnZPb1-W8Jzi7NV3n4q0C6w9Dz81edF8Oiz1-Q~D-vnWT0I5Cs-nv-PJOlmlrAxqxY~uYaS7sKr1fPotiyQN7ox0bq3UJcLMxxHSOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id: 4,
        img: "https://s3-alpha-sig.figma.com/img/67e4/37ae/51351d5b5bff0e0b7c87c83176cb37a7?Expires=1703462400&Signature=E1H6d2MY~oDZ0AvTW6TzccAVhmBsHKsAPX5PYH-N0u2IOpp0knjT614fdIDo9u-jVFPiIVBTbuFlFBsnLki~6QN2JxmTukaJDklmaRBglO5cEC2e5jFTWoceKTkXXsWmEsiMsT6vQ8~GS42P~qhIHFNl8e95BDizj9F769q7VcmR4jTvSY2tmEZkjSQLfvy36S4PXUgg5M3rASqRWXVvAluLx2aTgGryaK-S3mESddJT~ZLdfnbMT4-mpu8nLKknUirYpQFel3AkRR-UjBZJxtxuQIATUVnMksohj3as-Eusufw9DqRIO-X~9znnxgKHtoMmtNxCaomnRcGblXjZwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
];

function ProductCard() {
    return (
        <div className="sidesection-products">
            <div className="products-title-card">
                <h4 className="products-heading">LATEST PRODUCTS</h4>
            </div>

            <div className="products-options">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductCard;
