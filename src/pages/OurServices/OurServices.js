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
                    <div className="row content-row">
                        <div className="col-md-3 service-image">
                            <img src={cpuImage} alt="" className="img-fluid" />
                        </div>
                        <div
                            className={`col-md-9 ${heroColor} service-description`}
                        >
                            <div className="content-head">
                                <h2>Hardware</h2>
                            </div>
                            <div className="content-body mt-3">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor eiusmod tempor
                                    tempor Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                </p>
                            </div>
                            <button className="btn btn-primary btn-sm">
                                How To Benefit
                            </button>
                        </div>
                    </div>
                    <div className="row content-row">
                        <div
                            className={`col-md-9 ${heroColor} service-description`}
                        >
                            <div className="content-head">
                                <h2>Software</h2>
                            </div>
                            <div className="content-body mt-3">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor eiusmod tempor
                                    tempor Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                </p>
                            </div>
                            <button className="btn btn-primary btn-sm">
                                How To Benefit
                            </button>
                        </div>
                        <div className="col-md-3 service-image">
                            <img
                                src={softwareImage}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="row content-row">
                        <div className="col-md-3 service-image">
                            <img
                                src={trainingImage}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <div
                            className={`col-md-9 ${heroColor} service-description`}
                        >
                            <div className="content-head">
                                <h2>Training</h2>
                            </div>
                            <div className="content-body mt-3">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor eiusmod tempor
                                    tempor Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                </p>
                            </div>
                            <button className="btn btn-primary btn-sm">
                                How To Benefit
                            </button>
                        </div>
                    </div>
                    <div className="row content-row">
                        <div
                            className={`col-md-9 ${heroColor} service-description`}
                        >
                            <div className="content-head">
                                <h2>Community</h2>
                            </div>
                            <div className="content-body mt-3">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor tempor Lorem
                                    ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor eiusmod tempor
                                    tempor Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor
                                </p>
                            </div>
                            <button className="btn btn-primary btn-sm">
                                How To Benefit
                            </button>
                        </div>
                        <div className="col-md-3 service-image">
                            <img
                                src={communityImage}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
