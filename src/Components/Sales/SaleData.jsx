import React from "react";
import SaleProductItem from "./saleProductItem";

const saleProducts = [
    {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/f53e/ae73/97466165a97a3eba466739a2c9ed060d?Expires=1703462400&Signature=WHV~KQQFZ4VuPn3LEZDRbaJOxIQjMD3oTRkYiMVfQXwZqqegfoGuOuJGLmdF8E1YrQqMXnNTdVjAaAUUSnqKeSi5MJnrDH7zFOrndVQB110TO2MTo2VRhuaZL8B9HxC2m6vtQaX62V~sxjMxTRY~nwjbzyzUdGOScSo4u42UHJk1LmYeSww6VkfSt5OZQm12mnST4E5K-NhxryEtFmWWu24r9QIUpgA8G2uesDxOG-b-ORe4qcJ3dgOzzHTjlOEQ0o-vCdRJd2udqRl3FXBxdwfo0gq2FlHZHyzwCEsmJH9-y4XzZzCBEtRfanhG0gywV3F-LZPwUsEx2BJQMiUnkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "SAP",
    },
    {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/c6a1/9c6f/42567221f5116061893ef19618daee5e?Expires=1703462400&Signature=kpdFVw2Q4yHFHYcsTV6yVkvg6-lbkJahZgkCwEUe8xLyU6~AIy9ew7CyAV3up3wIyJv3ruy2OfsRw~3z3s4SokwLJBEMz2j0eEspphD9J7Cyzjizwpz3gUYYZRV5bLH~ykRpqmekssUdwACJ2ZPgGc9~Ab6fogR6ikzYXSqZYuCeBhxRMbZA9oM-hnPgVkG1y~hLicauog7l~TQ6x05DvwPQ3x2iMVJuHY4WDVQUiLFS-UzBUJs0sTeIu-YhSoCgaIwp4fgf5OzESfOo6qWETf~pyOZ1SCsjNnlzb1UlqIXNVvPiiyVGp-tLlQRiX8-Zf6qlRA63rX48LFLCBWso-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "Office 365",
    },
    {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/8139/c3e0/f36453b56a88372676bfddcf935153cf?Expires=1703462400&Signature=KKjTBanCu5-9AcYTumqFgmiYtRwdn4fVQ-5Ahu7f8TdWZJ47PvxQyiX0ox1yTpwcUiZQdPV3iblPVeRc3CUQefGBktFVSxlpE~R5sYbnCQ4SRQtAZBor9feLl-ZMbWQR9bVvJkJGQv2sMFESDQIkVfRSpwI~qz3jrzLU6~vmvYzwiIsgh5V-e4NxfFuCTHHr71PbYvrGPIa~jveuGc~Mkm8Ne2-S6WbwxJOiWNVZ9ollmI~pWYiOZVxhlx3jnCyzs5sqqsURXjr6SgDgpI0sC2seL6uXPNZsSejtDB~frHluMzAjaikeDJrayQVo0wBoE1-rBVP4~BrlV6U7lSoOmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        productName: "Flow Account",
    },
];

function SaleData() {
    return (
        <div className="sales-data-wrapper">
            {saleProducts.map((product) => (
                <SaleProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default SaleData;
