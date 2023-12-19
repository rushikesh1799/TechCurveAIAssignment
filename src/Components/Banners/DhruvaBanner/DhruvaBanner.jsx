import React from "react";
import "./DhruvaBanner.css";
import { useNavigate } from "react-router";

function DhruvaBanner() {
    const navigate = useNavigate();

    return (
        <div className="dhruva-banner-wrapper">
            <div className="dhruva-left-banner">
                <img
                    src="https://s3-alpha-sig.figma.com/img/96cf/904c/cfbe23630ceed521b99391c12bcbacc3?Expires=1704067200&Signature=lLDf~r-h4~-TQ12rVMiHSddBb9UTKjbAi~dYZbcIWRywIvu0PgH~AnsD2LhNhbrTwF1Kv7O6NvZPVz4wpokmnkJqd4zXKgHLeDm-keYouOd38hPEQQreByF6OV2iGso2KAt2Ye0tu0VWy7WgHxGJLETaYDW5P37UO2aM2t2S~Ssfpaos2y-xYMCTImAEKPNP3riHBIc6cT9mDSEqQfaHtqsZ8ChztuODt1eeA4c8THDfulc37BBOzquTrUhrAxji8oKGCHqwBKpUemo2LfEl7OQux6dlK1MUK-waBUkQNgIjhNvMqEPIYLr7XPC3e2r1athFSscp3T~PDftQynY9Kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="dhruva-tab-banner"
                    className="dhruva-left-img"
                />
                <img
                    src="https://s3-alpha-sig.figma.com/img/d78a/0529/7bb5f73fa084362b08d6ad6ff1c9adad?Expires=1704067200&Signature=L8u8OdlRsN08HM507Niy-l7FZkWHcNqYRBaDVH7Fik9wv3VKdzpBQDVwy6X3AA0hulawrgjngAJjkvHDwSuVQgwUkgUi~NTA64oYD-57dVQYeQgtX9fhUl1f4KLOi1rZbJgRQNcPh~BCie75IgjCnkRvvW0XoUZcM5RRy5~zxWxzXLOd9QVs1dqzpONiGKLn8BWrPWvBc-itKs3Vx0xZlSCzxi6rCp~UtLY0BPWXHsY1BAlxeWgTjfnhRFNurI6ISXjsC0qFGSXB9fqDsykbivk5Atv-apGTrSoUvHrk7HbPWXjqoGwFmjLgMIhnB0Z~3AYT4RHJ2nL~1x6G~mCQLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="druva-left-banner-logo"
                    className="druva-left-banner-logo"
                />
            </div>
            <div className="dhruva-right-banner">
                <div className="dhruva-right-banner-card">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/ba67/a562/95e4234e9eed086d4501cf7626823e3b?Expires=1704067200&Signature=USUKQbTejb5gunOPMUuZv1iyp61i6b6-ug4c5cYTWyeYio0i~~ygdHpAt6MW5hzpBzq2XIhSAFlRzR-DE8XqkcWQJVRDS3pdUI4OYApr2DzI4V6yZ~SogfGjwL4zrBC2jMqqap9oJchzzb~Sslvyxxgewyg72IJQRsxvANSomgkbwgCsBkd9jlZU3Fb28pUoSDU5O8gdyXfAcW1~-6hdpsSpt2TrmoFO4oZM04iCTpJMm1YRqMkSeOi8OAmrILnxr7HSoSnPic7s6acTecG27YM2qGi4klzZgnVyStSoRnO4IPtKjC65qNc8NN6RBbIgoNe5e9ves-c3yZksjglMiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="dhruva-logo"
                        className="dhruva-logo-right-banner"
                    />
                    <div className="discount-taline">
                        <h2 className="discounts-desc">Get Your</h2>
                        <h2 className="discounts-desc">Favorite Discounts</h2>
                    </div>
                    <h2 className="discounts-percentage">30 % OFF</h2>
                    <div
                        className="shop-now-btn-wrapper"
                        onClick={() => navigate("/view-all-products")}
                    >
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DhruvaBanner;
