import React, { useContext } from "react";
import "./MobileSideNav.css";
import { DataContext } from "../../Context/DataContext";
import NavOptions from "./NavOptions";

function MobileSideNav() {
    const { navFlag, dispatch } = useContext(DataContext);

    return (
        <div className="mobile-nav-popup">
            <div className="mobile-nav-body">
                <div className="logo-and-cancel">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/4801/7a23/652ba6b752fdccc6a6d2e07aade44864?Expires=1704067200&Signature=iDm75oI9KY8xbWoy5wRaeGNVRpwfDgtlaPFWBj8qamgKnx03da17LKheTwKFQV4vL3DaXnd07Y98LanB1P-1ZuXtWB68l4Ch1w7MGa0EtAN0AlsSsTKo65KUfdqOooLby-MCdw3sXz7TlAGeT1tmdjf1DobNQVqGziOox2LcXn05uYm5kFrMu-PoWXW22T4ggIZPaJSKuYcEPcwo13Xn1Pxd19VhGXiNS1HfZo91o-JIiK~hLCotqm1FPGdZEuPseCs0rsSenSETcUpNtWQ1z9PTeFBjU5L8fQ~Fqtg6vgS1W5ioAq38eF5-sbuC1LwaIUAD3e-w2sZGpykdE~Rd1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="mobile-logo"
                        className="mobile-nav-logo"
                    />
                    <svg
                        onClick={() => {
                            dispatch({
                                type: "SET_NAVFLAG",
                                payload: !navFlag,
                            });
                        }}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM676.1 657.9c4.4 5.2.7 13.1-6.1 13.1h-58.9c-4.7 0-9.2-2.1-12.3-5.7L512 561.8l-86.8 103.5c-3 3.6-7.5 5.7-12.3 5.7H354c-6.8 0-10.5-7.9-6.1-13.1L470.2 512 347.9 366.1A7.95 7.95 0 0 1 354 353h58.9c4.7 0 9.2 2.1 12.3 5.7L512 462.2l86.8-103.5c3-3.6 7.5-5.7 12.3-5.7H670c6.8 0 10.5 7.9 6.1 13.1L553.8 512l122.3 145.9z"></path>
                    </svg>
                </div>
                <hr />
                <div className="mobile-navbar-bottom">
                    <div className="mobile-navbar-bottom-left">
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
                    <div className="mobile-navbar-bottom-right">
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
                <hr />
                <div className="vendor-and-customer">
                    <div className="mobile-navbar-vendor-customer">
                        <div className="mobile-navbar-vendor">
                            <h3 className="vendor-text">Find Vendor</h3>
                        </div>
                        <div className="mobile-navbar-customer">
                            <h3 className="customer-text">Find Customer</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileSideNav;
