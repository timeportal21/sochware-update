import React, { useState, useContext } from "react";
import "./_ourservices.scss";
import cpuImage from "../../images/cpu.png";
import softwareImage from "../../images/software.png";
import trainingImage from "../../images/services/training.jpg";
import iotTraining from "../../images/services/iot1.jpg";
import iotTraining2 from "../../images/services/iot2.jpg";
import iotTraining3 from "../../images/services/iot3.jpg";
import training1 from "../../images/services/training3.jpg";
import training5 from "../../images/services/training5.jpg";
import training7 from "../../images/services/training7.jpg";
import training8 from "../../images/services/training8.jpg";
import training9 from "../../images/services/training9.jpg";
import hardwaremain from "../../images/services/hardwaremain.jpg";
import hardware from "../../images/services/hardware.jpg";
import hardware2 from "../../images/services/hardware2.jpg";
import software1 from "../../images/services/software1.jpg";
import hoc1 from "../../images/services/hourofcode.jpg";
import community1 from "../../images/services/community.jpg";
import community2 from "../../images/services/community2.jpg";
import dld from "../../images/services/dld.jpg";
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
            Clips
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
            accordinImages: [
                { image: iotTraining, title: "IoT Training" },
                { image: training1, title: "Tech for Education" },
                { image: training7, title: "IoT Training" },
                { image: training8, title: "IoT Training" },
                { image: training9, title: "IoT Training" },
            ],
        },
        {
            title: "Software",
            content:
                "We aim to create a user-centric soft-solution that not only serves as a digital tool but also as the key to foster development. With best industrial practice and international standardization, we follow the process-based methodology that can meet the high-quality benchmark. Catering the team of experts in respective fields, we provide eagle-eyes to your digital needs.",
            image: softwareImage,
            accordinImages: [
                { image: software1, title: "IoT Training" },
                { image: training1, title: "Tech for Education" },
                { image: iotTraining, title: "IoT Training" },
                { image: iotTraining, title: "IoT Training" },
                { image: iotTraining, title: "IoT Training" },
            ],
        },
        {
            title: "Hardware",
            content:
                "Sochware is not just another IT company that develops software. we also focus to create futuristic solutions that supports the vision of digitally enabled Nepal. for the same, we also design, develop and provide hardware solutions to support your software backgrounds. with engineers who have spectral knowledge in the field, we assure you quality of service, unique to of our own kind.",
            image: hardwaremain,
            accordinImages: [
                { image: iotTraining, title: "IoT Training" },
                { image: iotTraining2, title: "Tech for Education" },
                { image: iotTraining3, title: "IoT Training" },
                { image: hardware, title: "IoT Training" },
                { image: hardware2, title: "IoT Training" },
            ],
        },
        {
            title: "Community",
            content:
                "we believe in empowering nation with digital expertise be it a tech expert or general public. From farmer to educator, we aim to touch life of each citizen to enable them for futuristic generation. To serve as enabler, developer and implementor of technology, we have been reaching-out to communities to train them for technology use. We also believe each individual needs to understand how technology works to survive in digital era. Hence we have been providing an hour of code as part of community out-reach program.",
            image: communityImage,
            accordinImages: [
                { image: hoc1, title: "Hour Of Code" },
                { image: community2, title: "Tech for Education" },
                { image: training5, title: "IoT Training" },
                { image: community1, title: "IoT Training" },
                { image: dld, title: "IoT Training" },
            ],
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
                                            {data.accordinImages &&
                                                data.accordinImages.map(
                                                    (accordinImage, i) => (
                                                        <div
                                                            className="accordion-content"
                                                            key={i}
                                                        >
                                                            <div className="image-service">
                                                                {/* <a href="#">
                                                                    {
                                                                        accordinImage.title
                                                                    }
                                                                </a> */}
                                                                <img
                                                                    src={
                                                                        accordinImage.image
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                )}
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
                                            {data.accordinImages &&
                                                data.accordinImages.map(
                                                    (accordinImage, i) => (
                                                        <div
                                                            className="accordion-content"
                                                            key={i}
                                                        >
                                                            <div className="image-service">
                                                                {/* <a
                                                                    href=""
                                                                    target="_blank"
                                                                >
                                                                    {
                                                                        accordinImage.title
                                                                    }
                                                                </a> */}
                                                                <img
                                                                    src={
                                                                        accordinImage.image
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                )}
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
