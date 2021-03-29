import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Features.scss";
import fastDamaro from "../../images/Group5.svg";

function Features({ heroColor, customButton, borderButton }) {
    const [featureContent, setFeatureContent] = useState([
        {
            title: "Agile",
            image: fastDamaro,
            detail:
                "We work with agility to make sure the development process is flexible to fit the adaptive environment.",
        },
        {
            title: "Efficient",
            image: fastDamaro,
            detail:
                "We make sure to develiver what we have promised for with no compromise to  efficiency.",
        },
        {
            title: "Professional",
            image: fastDamaro,
            detail:
                "We together make team of experts with experience over 7 years in the field to cater you with professional service.",
        },
        {
            title: "Empirical",
            image: fastDamaro,
            detail:
                "Holding experience of working together with 25+ clients, we assure you experience based service.",
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
