import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Features.scss";
import fastDamaro from "../../images/Group5.svg";

function Features({ heroColor, customButton, borderButton }) {
    const [featureContent, setFeatureContent] = useState([
        {
            title: "Fast",
            image: fastDamaro,
            detail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            title: "Efficient",
            image: fastDamaro,
            detail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            title: "Professional",
            image: fastDamaro,
            detail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            title: "Experience",
            image: fastDamaro,
            detail:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
    ]);

    return (
        <section className="our-feature">
            <div className={`feature-title ${heroColor}`}>
                <h1>OUR FEATURES</h1>
                <div className="feature-button">
                    <Button
                        className={`custom-button custom-btn-sm mr-2 ${customButton} `}
                        size="sm"
                    >
                        Learn More
                    </Button>
                    <Button
                        className={`custom-button custom-btn-sm custom-btn-sm-border ${customButton} ${borderButton}`}
                        size="sm"
                    >
                        View All
                    </Button>
                </div>
            </div>
            <div className="container">
                <div className="feature-content">
                    <div className="row">
                        {featureContent.map((data, i) => (
                            <div
                                className="col-12 col-xl-3 col-md-6 col-lg-4"
                                key={i}
                            >
                                <div className="group-feature">
                                    <div className="group-image">
                                        <img
                                            src={data.image}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className={`group-title ${heroColor}`}>
                                        <h2>{data.title}</h2>
                                        <p>{data.detail}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
