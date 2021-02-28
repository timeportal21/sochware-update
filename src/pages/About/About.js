import React, { useState } from "react";
import "./_about.scss";
import aboutImage from "../../images/about_image.png";
import { IoChevronForwardSharp } from "react-icons/io5";

function About({ heroColor, customButton }) {
    const [aboutContent, setaboutContent] = useState([
        {
            title: "John Doe 1",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: aboutImage,
        },
        {
            title: "John Doe 2",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: aboutImage,
        },
        {
            title: "John Doe 3",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: aboutImage,
        },
    ]);
    return (
        <div className="about-section">
            <div className="container">
                <div className={`section-title ${heroColor}`}>
                    <h1>About Us</h1>
                </div>
                <div className="about-content">
                    {aboutContent.map((data, i) => {
                        if (i % 2 === 0) {
                            return (
                                <div className="card mb-3 content-row">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={data.image}
                                                alt="..."
                                                className="card-img-top"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div
                                                className={`card-body pl-5 pt-5 pb-4 ${heroColor}`}
                                            >
                                                <h5 className="card-title">
                                                    {data.title}
                                                </h5>
                                                <p className="card-text">
                                                    {data.content}
                                                </p>
                                                <button
                                                    className={`custom-button custom-btn-sm mr-2 ${customButton}  btn btn-primary btn-sm`}
                                                >
                                                    Read More
                                                    <IoChevronForwardSharp />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="card mb-3 content-row">
                                    <div className="row g-0">
                                        <div className="col-md-8 order-1 order-md-0">
                                            <div
                                                className={`card-body pr-5 pt-5 pb-4 ${heroColor}`}
                                            >
                                                <h5 className="card-title">
                                                    {data.title}
                                                </h5>
                                                <p className="card-text">
                                                    {data.content}
                                                </p>
                                                <button
                                                    className={`custom-button custom-btn-sm mr-2 ${customButton}  btn btn-primary btn-sm`}
                                                >
                                                    Read More
                                                    <IoChevronForwardSharp />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-4 order-0 order-md-1">
                                            <img
                                                src={data.image}
                                                alt="..."
                                                className="card-img-top"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default About;
