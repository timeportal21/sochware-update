import React, { useState, useContext } from "react";
import "./_ourservices.scss";
import cpuImage from "../../images/cpu.png";
import softwareImage from "../../images/software.png";
import trainingImage from "../../images/training.png";
import communityImage from "../../images/community.png";
import {
    Accordion,
    AccordionContext,
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
            title: "Training",
            content:
                "IT Industry of Nepal is in urge of skilled technical manpower that can create technology to solve world issues. To produce these set of international standard tech-experts, SochWare aims to create industry based trainings for fresh minds in-collaboration with IT educational institutions. From Initial days of establishment we have had oppertunity to impact young innovative minds through our training programs in IoT, Cloud, Software Development Practices, Hour of Code(HOC), etc.",
            image: trainingImage,
        },
        {
            title: "Software",
            content:
                "We aim to create a user-centric soft-solution that not only serves as a digital tool but also as the key to foster development. With best industrial practice and international standardization, we follow the process-based methodology that can meet the high-quality benchmark. Catering the team of experts in respective fields, we provide eagle-eyes to your digital needs.",
            image: softwareImage,
        },
        {
            title: "Hardware",
            content:
                "Sochware is not just another IT company that develops software. we also focus to create futuristic solutions that supports the vision of digitally enabled Nepal. for the same, we also design, develop and provide hardware solutions to support your software backgrounds. with engineers who have spectral knowledge in the field, we assure you quality of service, unique to of our own kind.",
            image: cpuImage,
        },
        {
            title: "Community",
            content:
                "we believe in empowering nation with digital expertise be it a tech expert or general public. From farmer to educator, we aim to touch life of each citizen to enable them for futuristic generation. To serve as enabler, developer and implementor of technology, we have been reaching-out to communities to train them for technology use. We also believe each individual needs to understand how technology works to survive in digital era. Hence we have been providing an hour of code as part of community out-reach program.",
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
                                <Accordion key={i}>
                                    <div className="card content-row">
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

                                                    <ContextAwareToggle
                                                        eventKey="0"
                                                        customButton={
                                                            customButton
                                                        }
                                                    ></ContextAwareToggle>

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
                                    <Accordion.Collapse eventKey="0">
                                        <div className="swservice-row row align-items-center">
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>
                            );
                        } else {
                            return (
                                <Accordion key={i}>
                                    <div className="card content-row">
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
                                                    <ContextAwareToggle
                                                        eventKey="0"
                                                        customButton={
                                                            customButton
                                                        }
                                                    ></ContextAwareToggle>
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
                                    <Accordion.Collapse eventKey="0">
                                        <div className="swservice-row row align-items-center">
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="accordion-content">
                                                <div className="image-service">
                                                    <a href="" target="_blank">
                                                        Ecommerce
                                                    </a>
                                                    <img
                                                        src="https://www.w3schools.com/css/img_chania.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Collapse>
                                </Accordion>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default OurServices;
