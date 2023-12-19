import React from "react";
import "./Newsletter.css";

function Newsletter() {
    return (
        <div className="newsletter-wrapper">
            <div className="newsletter-main">
                <div className="newsletter-left">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="34"
                        viewBox="0 0 40 34"
                        fill="none"
                    >
                        <path
                            d="M38.5714 0H1.42857C0.638393 0 0 0.690625 0 1.54545V32.4545C0 33.3094 0.638393 34 1.42857 34H38.5714C39.3616 34 40 33.3094 40 32.4545V1.54545C40 0.690625 39.3616 0 38.5714 0ZM34.9643 5.25937L20.8795 17.1159C20.5313 17.4105 20.0446 17.4105 19.6964 17.1159L5.60714 5.25937C5.55403 5.21503 5.51508 5.15382 5.49574 5.08433C5.4764 5.01483 5.47764 4.94053 5.4993 4.87184C5.52096 4.80314 5.56194 4.74351 5.61651 4.70128C5.67107 4.65905 5.73648 4.63635 5.80357 4.63636H34.7679C34.8349 4.63635 34.9004 4.65905 34.9549 4.70128C35.0095 4.74351 35.0505 4.80314 35.0721 4.87184C35.0938 4.94053 35.095 5.01483 35.0757 5.08433C35.0564 5.15382 35.0174 5.21503 34.9643 5.25937Z"
                            fill="white"
                        />
                    </svg>
                    <div className="newsletter-info">
                        <h3 className="newsletter-info-heading">
                            Signup For Newsletter
                        </h3>
                        <p className="newsletter-info-content">
                            We'll never share your email address with a third
                            party.
                        </p>
                    </div>
                </div>
                <div className="newsletter-right">
                    <div className="email-wrapper">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="email-input"
                        />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                    <a href="#" className="linkedin-details">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <path
                                d="M28.4444 0C29.3874 0 30.2918 0.374602 30.9586 1.0414C31.6254 1.70819 32 2.61256 32 3.55556V28.4444C32 29.3874 31.6254 30.2918 30.9586 30.9586C30.2918 31.6254 29.3874 32 28.4444 32H3.55556C2.61256 32 1.70819 31.6254 1.0414 30.9586C0.374602 30.2918 0 29.3874 0 28.4444V3.55556C0 2.61256 0.374602 1.70819 1.0414 1.0414C1.70819 0.374602 2.61256 0 3.55556 0H28.4444ZM27.5556 27.5556V18.1333C27.5556 16.5963 26.945 15.1221 25.8581 14.0353C24.7712 12.9484 23.2971 12.3378 21.76 12.3378C20.2489 12.3378 18.4889 13.2622 17.6356 14.6489V12.6756H12.6756V27.5556H17.6356V18.7911C17.6356 17.4222 18.7378 16.3022 20.1067 16.3022C20.7668 16.3022 21.3998 16.5644 21.8666 17.0312C22.3333 17.498 22.5956 18.131 22.5956 18.7911V27.5556H27.5556ZM6.89778 9.88445C7.68989 9.88445 8.44956 9.56978 9.00967 9.00967C9.56978 8.44956 9.88445 7.68989 9.88445 6.89778C9.88445 5.24444 8.55111 3.89333 6.89778 3.89333C6.10095 3.89333 5.33676 4.20987 4.77331 4.77331C4.20987 5.33676 3.89333 6.10095 3.89333 6.89778C3.89333 8.55111 5.24444 9.88445 6.89778 9.88445ZM9.36889 27.5556V12.6756H4.44444V27.5556H9.36889Z"
                                fill="white"
                            />
                        </svg>
                        <h4 className="linkedin-text">LinkedIn</h4>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
