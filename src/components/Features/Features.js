import React from "react";
import { Button } from "react-bootstrap";
import "./Features.scss";
import fastDamaro from "../../images/Group5.svg";

function Features({ heroColor }) {
    return (
        <section className="our-feature">
            <div className={`feature-title ${heroColor}`}>
                <h1>OUR FEATURES</h1>
                <div className="feature-button">
                    <Button className="custom-button mr-2" size="sm">
                        Learn More
                    </Button>
                    <Button className="custom-button" size="sm">
                        View All
                    </Button>
                </div>
            </div>
            <div className="container">
                <div className="feature-content">
                    <div className="row">
                        <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                            <div className="group-feature">
                                <div className="group-image">
                                    <img
                                        src={fastDamaro}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={`group-title ${heroColor}`}>
                                    <h2>Fast</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                            <div className="group-feature">
                                <div className="group-image">
                                    <img
                                        src={fastDamaro}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={`group-title ${heroColor}`}>
                                    <h2>Fast</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                            <div className="group-feature">
                                <div className="group-image">
                                    <img
                                        src={fastDamaro}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={`group-title ${heroColor}`}>
                                    <h2>Fast</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                            <div className="group-feature">
                                <div className="group-image">
                                    <img
                                        src={fastDamaro}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={`group-title ${heroColor}`}>
                                    <h2>Fast</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
