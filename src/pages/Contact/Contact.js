import React, { useState } from "react";
import "./_contact.scss";
import { AiOutlineUser, AiOutlinePhone, AiOutlineEdit } from "react-icons/ai";
import { BsEnvelopeOpen } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutImage from "../../images/about_image.png";
import { BsFillChatDotsFill } from "react-icons/bs";

function Contact({ heroColor }) {
    const [testimonialContent, setTestimonialContent] = useState([
        {
            name: "John Doe",
            designation: "senior designer",
            image: aboutImage,
            content:
                "this is wider card with supporting text below as a natural lead",
        },
        {
            name: "Johnny Doe",
            designation: "junior designer",
            image: aboutImage,
            content:
                "this is wider card with supporting text below as a natural lead",
        },
        {
            name: "Jane Doe",
            designation: "intern designer",
            image: aboutImage,
            content:
                "this is wider card with supporting text below as a natural lead",
        },
        {
            name: "Jahn Doe",
            designation: "ex designer",
            image: aboutImage,
            content:
                "this is wider card with supporting text below as a natural lead",
        },
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="contact-section">
            <div className="container">
                <div className={`section-title ${heroColor}`}>
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-content">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12 col-md-8">
                                    <div className="contact-form">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-xs-12 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">
                                                            Name
                                                        </label>
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">
                                                                    <AiOutlineUser />
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="">
                                                            Email
                                                        </label>
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">
                                                                    <BsEnvelopeOpen />
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="">
                                                            Phone
                                                        </label>
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <div className="input-group-text">
                                                                    <AiOutlinePhone />
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">
                                                            Message
                                                        </label>
                                                        <div className="text-area-message">
                                                            <textarea
                                                                name=""
                                                                id=""
                                                                cols="30"
                                                                rows="8"
                                                                className="form-control"
                                                            ></textarea>
                                                            <button type="submit" className="btn btn-md">
                                                                <BsFillChatDotsFill />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <label htmlFor="">Tags</label>
                                    <div className="tags">
                                        <button className="btn btn-outline-info">
                                            UI/UX Design
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Share An Idea
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Feedback
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Client
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Student
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            Complaint
                                        </button>
                                        <button className="btn btn-outline-success">
                                            Job Application
                                        </button>
                                        <button className="btn btn-outline-secondary">
                                            <AiOutlineEdit />
                                            Custom
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`section-title ${heroColor} mt-5`}>
                    <h1>Testimonials</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        {testimonialContent.map((data, i) => (
                            <div className="slider-content" key={i}>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-3">
                                            <img
                                                src={data.image}
                                                alt="..."
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {data.name}
                                                </h5>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        {data.designation}
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="container mt-5">
                                        {data.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Contact;
