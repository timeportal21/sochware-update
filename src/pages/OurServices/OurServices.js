import React, { useState, useContext } from "react";
import "./_ourservices.scss";
import cpuImage from "../../images/cpu.png";
import softwareImage from "../../images/software.png";
import trainingImage from "../../images/training.png";
import communityImage from "../../images/community.png";
import { IoChevronForwardSharp } from "react-icons/io5";
import {
    Accordion,
    AccordionContext,
    Card,
    useAccordionToggle,
} from "react-bootstrap";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

function ContextAwareToggle({ children, eventKey, callback, customButton }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <button
            type="button"
            className={`custom-button custom-btn-sm mr-2 ${customButton}  btn btn-primary btn-sm`}
            onClick={decoratedOnClick}
        >
            How To Benefit
            {!isCurrentEventKey ? (
                <MdKeyboardArrowRight />
            ) : (
                <MdKeyboardArrowDown />
            )}
            {children}
        </button>
    );
}

function OurServices({ heroColor, customButton }) {
    const [ourServices, setOurServices] = useState([
        {
            title: "Hardware",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: cpuImage,
        },
        {
            title: "Software",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: softwareImage,
        },
        {
            title: "Training",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: trainingImage,
        },
        {
            title: "Community",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmod tempor tempor  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            image: communityImage,
        },
    ]);

    return (
        <section className="our-services">
            <div className="container">
                <div className={`section-title ${heroColor}`}>
                    <h1>Our Services</h1>
                </div>
                <div className="service-content">
                    {ourServices.map((data, i) => {
                        if (i % 2 === 0) {
                            return (
                                <div className="card content-row" key={i}>
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
                                                className={`card-body pl-5 ${heroColor}`}
                                            >
                                                <h5 className="card-title">
                                                    {data.title}
                                                </h5>
                                                <p className="card-text">
                                                    {data.content}
                                                </p>
                                                <Accordion>
                                                    <ContextAwareToggle
                                                        eventKey="0"
                                                        customButton={
                                                            customButton
                                                        }
                                                    ></ContextAwareToggle>
                                                    <Accordion.Collapse eventKey="0">
                                                        <div className="swservice-row row">
                                                            <div className="col-sm-12 col-md-6 col-lg-2">
                                                                <div className="image-service">
                                                                    <img
                                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6 col-lg-2">
                                                                <div className="image-service">
                                                                    <img
                                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6 col-lg-2">
                                                                <div className="image-service">
                                                                    <img
                                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6 col-lg-2">
                                                                <div className="image-service">
                                                                    <img
                                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6 col-lg-2">
                                                                <div className="image-service">
                                                                    <img
                                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Collapse>
                                                </Accordion>

                                                {/* <button
                                                    className={`custom-button custom-btn-sm mr-2 ${customButton}  btn btn-primary btn-sm`}
                                                    size="sm"
                                                >
                                                    How To Benefit
                                                    <IoChevronForwardSharp />
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="card content-row" key={i}>
                                    <div className="row g-0">
                                        <div className="col-md-8 order-1 order-md-0">
                                            <div
                                                className={`card-body pr-5 ${heroColor}`}
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
                                                    How To Benefit
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
        </section>
    );
}

export default OurServices;
