import React from "react";

function Footer({ logo }) {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
