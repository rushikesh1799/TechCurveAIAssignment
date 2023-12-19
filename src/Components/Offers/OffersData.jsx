import React from "react";
import OffersListItem from "./OffersListItem";

const offersProducts = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/ff8c/691a/935a497e8f718dd29827fe366ac3903e?Expires=1703462400&Signature=kCZ9FdLiNiYdNQ-Lo6jew5aAwC7Lzbl8zvMA9CcxpmJnxKyDWb1otGk35XOZBNwkKFkCcKhpZmQeJJm6izVwxBvnAXB1Vv7enFCe7Av1duqh7oNutrOkRr5hwT5lKFVmwMvQD3~OLDUioAllkjtbTnYHSymfENlnu5Ci9Nr~SDGHVHMRL6Hbfgr9PhNYRe2BTrJGWLDKVI-Q4laGNH5VQA-o~stpfnBwWD8jR7k3tEMc4F-m41UBOsCSQIR7bQf6c3L8fD~wCxXft8G2kVRhRzqS5wXADYcEGvc1xuJguLSxGhpFF0~k47W2H6QDvl0ESiLnuaDFWucqFivjlR7LDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "SysTools SQL Backup Recovery",
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/67e4/37ae/51351d5b5bff0e0b7c87c83176cb37a7?Expires=1703462400&Signature=E1H6d2MY~oDZ0AvTW6TzccAVhmBsHKsAPX5PYH-N0u2IOpp0knjT614fdIDo9u-jVFPiIVBTbuFlFBsnLki~6QN2JxmTukaJDklmaRBglO5cEC2e5jFTWoceKTkXXsWmEsiMsT6vQ8~GS42P~qhIHFNl8e95BDizj9F769q7VcmR4jTvSY2tmEZkjSQLfvy36S4PXUgg5M3rASqRWXVvAluLx2aTgGryaK-S3mESddJT~ZLdfnbMT4-mpu8nLKknUirYpQFel3AkRR-UjBZJxtxuQIATUVnMksohj3as-Eusufw9DqRIO-X~9znnxgKHtoMmtNxCaomnRcGblXjZwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "SysTools SQL Backup Recovery",
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/67e4/37ae/51351d5b5bff0e0b7c87c83176cb37a7?Expires=1703462400&Signature=E1H6d2MY~oDZ0AvTW6TzccAVhmBsHKsAPX5PYH-N0u2IOpp0knjT614fdIDo9u-jVFPiIVBTbuFlFBsnLki~6QN2JxmTukaJDklmaRBglO5cEC2e5jFTWoceKTkXXsWmEsiMsT6vQ8~GS42P~qhIHFNl8e95BDizj9F769q7VcmR4jTvSY2tmEZkjSQLfvy36S4PXUgg5M3rASqRWXVvAluLx2aTgGryaK-S3mESddJT~ZLdfnbMT4-mpu8nLKknUirYpQFel3AkRR-UjBZJxtxuQIATUVnMksohj3as-Eusufw9DqRIO-X~9znnxgKHtoMmtNxCaomnRcGblXjZwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "SysTools SQL Backup Recovery",
    },
];

function OffersData() {
    return (
        <div className="offers-data-wrapper">
            {offersProducts.map((product) => (
                <OffersListItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default OffersData;
