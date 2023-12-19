import React, { useContext } from "react";
import "./Navbar.css";
import NavOptions from "./NavOptions";
import { useNavigate } from "react-router";
import { DataContext } from "../../Context/DataContext";

const Navbar = () => {
    const { navFlag, dispatch } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <div className="navbar-wrapper">
            <div className="navbar-main">
                <div className="navbar-top">
                    <div className="navbar-top-left">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/4801/7a23/652ba6b752fdccc6a6d2e07aade44864?Expires=1704067200&Signature=iDm75oI9KY8xbWoy5wRaeGNVRpwfDgtlaPFWBj8qamgKnx03da17LKheTwKFQV4vL3DaXnd07Y98LanB1P-1ZuXtWB68l4Ch1w7MGa0EtAN0AlsSsTKo65KUfdqOooLby-MCdw3sXz7TlAGeT1tmdjf1DobNQVqGziOox2LcXn05uYm5kFrMu-PoWXW22T4ggIZPaJSKuYcEPcwo13Xn1Pxd19VhGXiNS1HfZo91o-JIiK~hLCotqm1FPGdZEuPseCs0rsSenSETcUpNtWQ1z9PTeFBjU5L8fQ~Fqtg6vgS1W5ioAq38eF5-sbuC1LwaIUAD3e-w2sZGpykdE~Rd1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="title-img"
                            className="title-image"
                            onClick={() => navigate("/")}
                        />
                        <div className="navbar-vendor-customer">
                            <div className="navbar-vendor">
                                <button className="vendor-text">
                                    Find Vendor
                                </button>
                            </div>
                            <div className="navbar-customer">
                                <button className="customer-text">
                                    Find Customer
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-top-right">
                        <div className="navbar-top-right-main">
                            <div className="call-expert-main">
                                <div className="call-expert">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.5714 2.13031C5.3334 2.68564 5.92674 3.44364 6.4334 4.16898L6.72807 4.59831L7.00607 5.00831C7.14513 5.21146 7.20458 5.45868 7.17311 5.70284C7.14164 5.94701 7.02143 6.17106 6.8354 6.33231L5.53474 7.29831C5.4719 7.34369 5.42767 7.41033 5.41026 7.48586C5.39284 7.56139 5.40344 7.64067 5.44007 7.70898C5.73474 8.24431 6.25874 9.04165 6.85874 9.64164C7.4594 10.2416 8.29407 10.8003 8.86674 11.1283C8.93854 11.1686 9.02306 11.1799 9.10291 11.1598C9.18276 11.1397 9.25189 11.0898 9.29607 11.0203L10.1427 9.73165C10.2984 9.52488 10.528 9.38636 10.7835 9.3451C11.039 9.30384 11.3006 9.36305 11.5134 9.51031L11.9554 9.81631C12.7814 10.3896 13.6687 11.041 14.3474 11.9096C14.455 12.0482 14.5235 12.2131 14.5457 12.3871C14.5678 12.5611 14.5429 12.7379 14.4734 12.899C13.9154 14.201 12.5034 15.3096 11.0347 15.2556L10.8347 15.2443L10.6794 15.231L10.5074 15.211L10.3201 15.1856L10.1167 15.1523C10.0811 15.1459 10.0456 15.1392 10.0101 15.1323L9.78607 15.0843C9.7469 15.0757 9.70778 15.0668 9.66874 15.0576L9.42474 14.995L9.16807 14.9216L8.90007 14.835C7.6694 14.4176 6.1074 13.5976 4.50474 11.995C2.90274 10.393 2.08274 8.83098 1.6654 7.60031L1.57874 7.33231L1.5054 7.07564L1.44274 6.83165L1.39074 6.60098C1.37572 6.52873 1.36172 6.45628 1.34874 6.38365L1.3154 6.18031L1.28874 5.99298L1.2694 5.82098L1.25607 5.66565L1.2454 5.46564C1.1914 4.00164 2.31207 2.57964 3.60807 2.02431C3.76406 1.95696 3.93487 1.93131 4.10376 1.9499C4.27264 1.96848 4.4338 2.03065 4.5714 2.13031ZM9.99474 4.52698L10.0721 4.53565C10.5573 4.62124 11.0031 4.85827 11.3453 5.21276C11.6876 5.56725 11.9089 6.021 11.9774 6.50898C12.0018 6.67776 11.9607 6.8495 11.8623 6.98885C11.764 7.1282 11.616 7.22457 11.4488 7.25813C11.2816 7.29169 11.1079 7.25989 10.9634 7.16928C10.8189 7.07866 10.7147 6.93612 10.6721 6.77098L10.6567 6.69431C10.6299 6.50305 10.5483 6.32364 10.4217 6.17777C10.2951 6.0319 10.129 5.92581 9.94341 5.87231L9.84007 5.84898C9.67267 5.81931 9.52293 5.7268 9.42147 5.59038C9.32002 5.45396 9.27451 5.28393 9.29427 5.11507C9.31402 4.94622 9.39755 4.79128 9.52775 4.68197C9.65796 4.57265 9.82501 4.51721 9.99474 4.52698ZM10.0001 2.50031C11.0609 2.50031 12.0784 2.92174 12.8285 3.67188C13.5786 4.42203 14.0001 5.43945 14.0001 6.50031C13.9999 6.67023 13.9348 6.83367 13.8182 6.95722C13.7015 7.08078 13.5421 7.15514 13.3725 7.16509C13.2028 7.17505 13.0358 7.11986 12.9055 7.0108C12.7752 6.90174 12.6915 6.74704 12.6714 6.57831L12.6667 6.50031C12.667 5.82326 12.4096 5.17149 11.9467 4.67733C11.4839 4.18317 10.8504 3.88368 10.1747 3.83964L10.0001 3.83364C9.82326 3.83364 9.65369 3.76341 9.52867 3.63838C9.40364 3.51336 9.3334 3.34379 9.3334 3.16698C9.3334 2.99017 9.40364 2.8206 9.52867 2.69557C9.65369 2.57055 9.82326 2.50031 10.0001 2.50031Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span className="call-expert-txt">
                                        Call Expert
                                    </span>
                                </div>
                            </div>
                            <div
                                className="user-menu-wrapper"
                                onClick={() => {
                                    dispatch({
                                        type: "SET_NAVFLAG",
                                        payload: !navFlag,
                                    });
                                }}
                            >
                                <div className="user-menu-main">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="17"
                                        viewBox="0 0 20 17"
                                        fill="none"
                                    >
                                        <path
                                            d="M0 16.5H20V13.8333H0V16.5ZM0 9.83333H20V7.16667H0V9.83333ZM0 0.5V3.16667H20V0.5H0Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="29"
                                        viewBox="0 0 28 29"
                                        fill="none"
                                    >
                                        <path
                                            d="M14 0.5C6.272 0.5 0 6.772 0 14.5C0 22.228 6.272 28.5 14 28.5C21.728 28.5 28 22.228 28 14.5C28 6.772 21.728 0.5 14 0.5ZM14 6.1C16.702 6.1 18.9 8.298 18.9 11C18.9 13.702 16.702 15.9 14 15.9C11.298 15.9 9.1 13.702 9.1 11C9.1 8.298 11.298 6.1 14 6.1ZM14 25.7C11.158 25.7 7.798 24.552 5.404 21.668C7.85625 19.744 10.8831 18.6983 14 18.6983C17.1169 18.6983 20.1438 19.744 22.596 21.668C20.202 24.552 16.842 25.7 14 25.7Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-bottom">
                    <div className="navbar-bottom-left">
                        <NavOptions
                            propName="All Categories"
                            isDropDown={true}
                        />
                        <NavOptions propName="By Industry" isDropDown={true} />
                        <NavOptions
                            propName="By Department"
                            isDropDown={true}
                        />
                        <NavOptions propName="Compare Product" />
                        <NavOptions propName="Sell your Products" />
                        <NavOptions propName="Offer" />
                    </div>
                    <div className="navbar-bottom-right">
                        <NavOptions propName="Write Review" />
                        <div className="help-option">
                            <NavOptions propName="Need help" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M13.07 9.25L12.17 10.17C11.45 10.89 11 11.5 11 13H9V12.5C9 11.39 9.45 10.39 10.17 9.67L11.41 8.41C11.78 8.05 12 7.55 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071 5.96086 8 6.46957 8 7H6C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3C11.0609 3 12.0783 3.42143 12.8284 4.17157C13.5786 4.92172 14 5.93913 14 7C13.9986 7.84324 13.6643 8.65183 13.07 9.25ZM11 17H9V15H11M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
