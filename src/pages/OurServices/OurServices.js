import React from "react";
import "./_ourservices.scss";
import cpuImage from "../../images/cpu.png";
import softwareImage from "../../images/software.png";
import trainingImage from "../../images/training.png";
import communityImage from "../../images/community.png";

function OurServices({ heroColor }) {
    return (
        <section className="our-services">
            <div className="container">
                <div className={`service-title ${heroColor}`}>
                    <h1>Our Services</h1>
                </div>
                <div className="service-content">
                    <div className="card content-row">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={cpuImage}
                                    alt="..."
                                    className="card-img-top"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className={`card-body pl-5 ${heroColor}`}>
                                    <h5 className="card-title">Hardware</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        tempor Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor eiusmod tempor tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                    <button className="btn btn-primary">
                                        How To Benefit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card content-row">
                        <div className="row g-0">
                            <div className="col-md-8 order-1 order-md-0">
                                <div className={`card-body pr-5 ${heroColor}`}>
                                    <h5 className="card-title">Software</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        tempor Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor eiusmod tempor tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                    <button className="btn btn-primary">
                                        How To Benefit
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 order-0 order-md-1">
                                <img
                                    src={softwareImage}
                                    alt="..."
                                    className="card-img-top"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card content-row">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={trainingImage}
                                    alt="..."
                                    className="card-img-top"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className={`card-body pl-5 ${heroColor}`}>
                                    <h5 className="card-title">Training</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        tempor Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor eiusmod tempor tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                    <button className="btn btn-primary">
                                        How To Benefit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card content-row">
                        <div className="row g-0 ">
                            <div className="col-md-8 order-1 order-md-0">
                                <div className={`card-body pr-5 ${heroColor}`}>
                                    <h5 className="card-title">Community</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        tempor Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor eiusmod tempor tempor
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                    <button className="btn btn-primary">
                                        How To Benefit
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 order-0 order-md-1">
                                <img
                                    src={communityImage}
                                    alt="..."
                                    className="card-img-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
