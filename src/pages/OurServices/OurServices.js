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
                    <div className="card mb-3 content-row">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={cpuImage}
                                    alt="..."
                                    className="img-fluid"
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
                    <div className="card mb-3 content-row">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className={`card-body pr-5 ${heroColor}`}>
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
                            <div className="col-md-4">
                                <img
                                    src={cpuImage}
                                    alt="..."
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 content-row">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={cpuImage}
                                    alt="..."
                                    className="img-fluid"
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
                    <div className="card mb-3 content-row">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className={`card-body pr-5 ${heroColor}`}>
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
                            <div className="col-md-4">
                                <img
                                    src={cpuImage}
                                    alt="..."
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="row content-row">
                        <div className="col-md-4 service-image">
                            <img src={cpuImage} alt="" className="img-fluid" />
                        </div>
                        <div
                            className={`col-md-8 ${heroColor} service-description`}
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
                            className={`col-md-8 ${heroColor} service-description`}
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
                        <div className="col-md-4 service-image">
                            <img
                                src={softwareImage}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="row content-row">
                        <div className="col-md-4 service-image">
                            <img
                                src={trainingImage}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <div
                            className={`col-md-8 ${heroColor} service-description`}
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
                    <div className="row content-row"> */}
                    {/* <div
                            className={`col-md-8 ${heroColor} service-description`}
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
                        <div className="col-md-4 service-image">
                            <img
                                src={communityImage}
                                alt=""
                                className="img-fluid"
                            />
                        </div> */}
                </div>
            </div>
        </section>
    );
}

export default OurServices;
