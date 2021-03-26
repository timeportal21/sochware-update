import React, { useState } from "react";
import "./_about.scss";
import aboutImage from "../../images/about_image.png";
import { IoChevronForwardSharp } from "react-icons/io5";
import listPoint from "../../images/bullet-point.svg";

import Slider from "react-slick";

function About({ heroColor, customButton }) {
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
    const [aboutContent, setaboutContent] = useState([
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc quam fusce tincidunt volutpat. Sit tellus purus, sed arcu viverra id purus sem aliquam. Pretium auctor pellentesque sit amet, et. Nunc ipsum volutpat dictumst duis varius libero nisl. At consectetur a ipsum, posuere. Vitae urna dui viverra dignissim.  ",
        },
    ]);

    const [whySochware, setWhySochware] = useState([
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc quam fusce tincidunt volutpat. Sit tellus purus, sed arcu viverra id purus sem aliquam. Pretium auctor pellentesque sit amet, et. Nunc ipsum volutpat dictumst duis varius libero nisl. At consectetur a ipsum, posuere. Vitae urna dui viverra dignissim.  ",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc quam fusce tincidunt volutpat. Sit tellus purus, sed arcu viverra id purus sem aliquam. Pretium auctor pellentesque sit amet, et. Nunc ipsum volutpat dictumst duis varius libero nisl. At consectetur a ipsum, posuere. Vitae urna dui viverra dignissim.  ",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc quam fusce tincidunt volutpat. Sit tellus purus, sed arcu viverra id purus sem aliquam. Pretium auctor pellentesque sit amet, et. Nunc ipsum volutpat dictumst duis varius libero nisl. At consectetur a ipsum, posuere. Vitae urna dui viverra dignissim.  ",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc quam fusce tincidunt volutpat. Sit tellus purus, sed arcu viverra id purus sem aliquam. Pretium auctor pellentesque sit amet, et. Nunc ipsum volutpat dictumst duis varius libero nisl. At consectetur a ipsum, posuere. Vitae urna dui viverra dignissim.  ",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc quam fusce tincidunt volutpat. Sit tellus purus, sed arcu viverra id purus sem aliquam. Pretium auctor pellentesque sit amet, et. Nunc ipsum volutpat dictumst duis varius libero nisl. At consectetur a ipsum, posuere. Vitae urna dui viverra dignissim.  ",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc quam fusce tincidunt volutpat. Sit tellus purus, sed arcu viverra id purus sem aliquam. Pretium auctor pellentesque sit amet, et. Nunc ipsum volutpat dictumst duis varius libero nisl. At consectetur a ipsum, posuere. Vitae urna dui viverra dignissim.  ",
        },
    ]);
    const [ourTeam, setOurTeam] = useState([
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

    const [partners, setPartners] = useState([
        { logo: "1", link: "lwal" },
        { logo: "2", link: "lwal" },
        { logo: "3", link: "lwal" },
        { logo: "4", link: "lwal" },
        { logo: "5", link: "lwal" },
        { logo: "6", link: "lwal" },
        { logo: "7", link: "lwal" },
        { logo: "8", link: "lwal" },
        { logo: "1", link: "lwal" },
        { logo: "2", link: "lwal" },
        { logo: "3", link: "lwal" },
        { logo: "4", link: "lwal" },
        { logo: "5", link: "lwal" },
        { logo: "6", link: "lwal" },
        { logo: "7", link: "lwal" },
        { logo: "8", link: "lwal" },
    ]);
    return (
        <div className="about-section">
            <div className="container">
                <div className="aboutus-section">
                    <div className={`section-title ${heroColor}`}>
                        <h1>About Us</h1>
                    </div>
                    <div className="about-content">
                        {aboutContent.map((data, i) => (
                            <div className="card" key={i}>
                                <div className="card-body">
                                    <p className="card-text">{data.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`why-sochware ${heroColor}`}>
                    <div className={`section-title`}>
                        <h1>Why Sochware ?</h1>
                    </div>
                    <div className="why-sochware">
                        <ul>
                            {whySochware.map((data, i) => (
                                <div className="d-flex" key={i}>
                                    <li>
                                        <div>
                                            <img
                                                src={listPoint}
                                                alt=""
                                                className="mr-2"
                                                width="30"
                                            />
                                        </div>
                                        <div>{data.content}</div>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className={`section-title ${heroColor} mt-5`}>
                        <h1>Our Team</h1>
                    </div>
                </div>
                <div className="team-slider">
                    <div className="container">
                        <Slider {...settings}>
                            {ourTeam.map((data, i) => (
                                <div className="slider-content" key={i}>
                                    <div className="card mr-3">
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
            </section>
            <section className="partners">
                <div className="container">
                    <div className={`section-title ${heroColor} mt-5`}>
                        <h1>Our Partners</h1>
                    </div>
                    <div className="partner-logo">
                        {partners.map((data, i) => (
                            <div className="partner-circle" key={i}></div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
