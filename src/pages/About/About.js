import React from "react";
import "./_about.scss";
import aboutImage from "../../images/about_image.png";

function About({ heroColor }) {
    return (
        <div className="about-section">
            <div className="container">
                <div className={`about-title ${heroColor}`}>
                    <h1>About Us</h1>
                </div>
                <div className="about-content">
                    <div className="card mb-3 content-row">
                        <div className="row g-0">
                            <div className="col-md-8 order-1 order-md-0">
                                <div
                                    className={`card-body pr-5 pt-5 pb-4 ${heroColor}`}
                                >
                                    <h5 className="card-title">Software</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        tempor Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit
                                    </p>
                                    <button className="btn btn-primary">
                                        How To Benefit
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 order-0 order-md-1">
                                <img
                                    src={aboutImage}
                                    alt="..."
                                    className="card-img-top"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 content-row">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={aboutImage}
                                    alt="..."
                                    className="card-img-top"
                                />
                            </div>
                            <div className="col-md-8">
                                <div
                                    className={`card-body pl-5 pt-5 pb-4 ${heroColor}`}
                                >
                                    <h5 className="card-title">Hardware</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        tempor Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit
                                    </p>
                                    <button className="btn btn-primary">
                                        How To Benefit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 content-row">
                        <div className="row g-0">
                            <div className="col-md-8 order-1 order-md-0">
                                <div
                                    className={`card-body pr-5 pt-5 pb-4 ${heroColor}`}
                                >
                                    <h5 className="card-title">Software</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        tempor Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit
                                    </p>
                                    <button className="btn btn-primary">
                                        How To Benefit
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 order-0 order-md-1">
                                <img
                                    src={aboutImage}
                                    alt="..."
                                    className="card-img-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
