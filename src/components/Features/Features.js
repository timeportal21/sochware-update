import React from "react";
import { Button } from "react-bootstrap";
import "./Features.scss";
import fastDamaro from "../../images/Group5.svg";

function Features() {
    return (
        <section className="our-feature">
            <div className="feature-title">
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
            <div className="feature-content">
                <div className="row">
                    <div className="col-md-3">
                        <div className="group-feature">
                            <div className="group-image">
                                <img
                                    src={fastDamaro}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="group-title">
                                <h2>Fast</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-feature">
                            <div className="group-image">
                                <img
                                    src={fastDamaro}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="group-title">
                                <h2>Fast</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-feature">
                            <div className="group-image">
                                <img
                                    src={fastDamaro}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="group-title">
                                <h2>Fast</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-feature">
                            <div className="group-image">
                                <img
                                    src={fastDamaro}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="group-title">
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
        </section>
    );
}

export default Features;
