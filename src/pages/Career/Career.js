import React, { useState, useContext, Fragment } from "react";
import "./_career.scss";
import {
    Accordion,
    AccordionContext,
    Card,
    useAccordionToggle,
} from "react-bootstrap";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import CustomModal from "../../components/common/modal/CustomModal";
import { BsEnvelopeOpen } from "react-icons/bs";

function ContextAwareToggle({ children, eventKey, callback, buttonColor }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <a onClick={decoratedOnClick}>
            {!isCurrentEventKey ? (
                <MdKeyboardArrowRight />
            ) : (
                <MdKeyboardArrowDown />
            )}
            {children}
        </a>
    );
}

function Career({ heroColor, customButton }) {
    const [jobDescription, setJobDescription] = useState([
        {
            id: 1,
            title: "Job Title",
            requirements:
                "At least a year of demonstrable working experience Proficient in C#, .NET, Xamarin, MVVM architecture Must have a understanding of software development, deployment and maintenance Must know the software development best practices, coding conventions and design patterns. Must be able to design/develop RESTful web APIs Proficient understanding of databases Very good understanding of Git Understanding cloud computing and its basics is a plus point",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in etiam dui ornare varius mauris amet. Leo massa, pellentesque purus ut urna. ",
            available: true,
        },
        {
            id: 2,
            title: "Job Title",
            requirements:
                "At least a year of demonstrable working experience Proficient in C#, .NET, Xamarin, MVVM architecture Must have a understanding of software development, deployment and maintenance Must know the software development best practices, coding conventions and design patterns. Must be able to design/develop RESTful web APIs Proficient understanding of databases Very good understanding of Git Understanding cloud computing and its basics is a plus point",
            description:
                "Lorem ips1um dolor sit amet, consectetur adipiscing elit. Sed in etiam dui ornare varius mauris amet. Leo massa, pellentesque purus ut urna. ",
            available: false,
        },
        {
            id: 3,
            title: "Job Title",
            requirements:
                "At least a year of demonstrable working experience Proficient in C#, .NET, Xamarin, MVVM architecture Must have a understanding of software development, deployment and maintenance Must know the software development best practices, coding conventions and design patterns. Must be able to design/develop RESTful web APIs Proficient understanding of databases Very good understanding of Git Understanding cloud computing and its basics is a plus point",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in etiam dui ornare varius mauris amet. Leo massa, pellentesque purus ut urna. ",
            available: true,
        },
    ]);

    const [modalData, setModalData] = useState({});

    const [toggleModal, setToggleModal] = useState(false);

    const handleClose = () => setToggleModal(false);
    const handleShow = (e) => {
        setToggleModal(true);
        setModalData(e);
    };

    const handleChange = (e) => {
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <section className={`hire-now ${heroColor}`}>
                <div className="container">
                    <h1>We are hiring now</h1>
                    <div className="filter-by d-flex justify-content-end">
                        <div className="form-group row">
                            <label htmlFor="">Filter By</label>
                            <select name="" id="" className="form-control">
                                <option value="">All</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>
                    <div className="career-description">
                        <Accordion>
                            <ContextAwareToggle
                                eventKey="0"
                                buttonColor={heroColor}
                            >
                                Frontend Development
                            </ContextAwareToggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="row sw-row">
                                    {jobDescription.map((data, i) => {
                                        if (data.available === true) {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            ]{data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} `}
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                onClick={(e) =>
                                                                    handleShow(
                                                                        data
                                                                    )
                                                                }
                                                            >
                                                                Apply
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card text-muted">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} disabled`}
                                                            >
                                                                Hired
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <div className="career-description">
                        <Accordion defaultActiveKey="0">
                            <ContextAwareToggle
                                eventKey="0"
                                buttonColor={heroColor}
                            >
                                Backend Development
                            </ContextAwareToggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="row sw-row">
                                    {jobDescription.map((data, i) => {
                                        if (data.available === true) {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} `}
                                                                onClick={(e) =>
                                                                    handleShow(
                                                                        data
                                                                    )
                                                                }
                                                            >
                                                                Apply
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card text-muted">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} disabled`}
                                                            >
                                                                Hired
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <div className="career-description">
                        <Accordion>
                            <ContextAwareToggle
                                eventKey="0"
                                buttonColor={heroColor}
                            >
                                UI/UX Design
                            </ContextAwareToggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="row sw-row">
                                    {jobDescription.map((data, i) => {
                                        if (data.available === true) {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} `}
                                                                onClick={(e) =>
                                                                    handleShow(
                                                                        data
                                                                    )
                                                                }
                                                            >
                                                                Apply
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card text-muted">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} disabled`}
                                                            >
                                                                Hired
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                    <div className="career-description">
                        <Accordion>
                            <ContextAwareToggle
                                eventKey="0"
                                buttonColor={heroColor}
                            >
                                Other job Categories
                            </ContextAwareToggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="row sw-row">
                                    {jobDescription.map((data, i) => {
                                        if (data.available === true) {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} `}
                                                                onClick={(e) =>
                                                                    handleShow(
                                                                        data
                                                                    )
                                                                }
                                                            >
                                                                Apply
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className="col-sm-12 col-md-4"
                                                    key={i}
                                                >
                                                    <Card.Body className="career-card text-muted">
                                                        <Card.Title>
                                                            <h1>
                                                                {data.title}
                                                            </h1>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {data.description}
                                                        </Card.Text>
                                                        <Card.Footer>
                                                            <button
                                                                type="button"
                                                                className={`custom-button float-right ${customButton} disabled`}
                                                            >
                                                                Hired
                                                            </button>
                                                        </Card.Footer>
                                                    </Card.Body>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                    </div>
                </div>
                <div className="notified">
                    <div className="container">
                        <div className="text-center text-dark">
                            <h2>
                                Want to get notified of new vacancies from us?
                            </h2>

                            <div className="notified-form">
                                <p>Enter Your Email</p>
                                <form
                                    onSubmit={handleSubmit}
                                    method="post"
                                    className="form-inline justify-content-center"
                                >
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <BsEnvelopeOpen />
                                            </div>
                                        </div>
                                        <input
                                            type="email"
                                            onChange={handleChange}
                                            name="email"
                                            className="form-control"
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CustomModal
                modalData={modalData}
                toggleModal={toggleModal}
                handleClose={handleClose}
                customButton={customButton}
            />
        </Fragment>
    );
}

export default Career;
