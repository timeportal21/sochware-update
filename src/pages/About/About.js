import React, { useState } from "react";
import "./_about.scss";

import {
    FaLinkedin,
    FaFacebookSquare,
    FaInstagram,
    FaEnvelope,
    FaTwitter,
} from "react-icons/fa";

import eeda from "../../images/teams/eeda.png";
import shishir from "../../images/teams/shishir.png";
import saurav from "../../images/teams/saurav.png";
import rabin from "../../images/teams/rabin.png";
import dharaateeshree from "../../images/teams/dharaateeshree.png";
import aarati from "../../images/teams/aarati.png";
import sanjay from "../../images/teams/sanjay.png";
import gautam from "../../images/teams/gautam.png";
import dinesh from "../../images/teams/dinesh.png";
import susan from "../../images/teams/susan.png";
import anil from "../../images/teams/anil.png";

// partners
import mars from "../../images/partners/mars.png";
import asman from "../../images/partners/asman.jpg";
import bloom from "../../images/partners/bloom.png";
import fibro from "../../images/partners/fibro.jpg";
import gdo from "../../images/partners/gdo.png";
import irda from "../../images/partners/irda.jpg";
import sirisyouth from "../../images/partners/sirisyouth.jpg";
import somen from "../../images/partners/somen.png";
import suswasthya from "../../images/partners/suswasthya.png";

import Slider from "react-slick";

function About({ heroColor, customButton, listImage }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
                "Sochware is one of the leading fresh tech companies in Nepal, with National and international recognition. We stand strong and dedicated with vision to contribute in development of Nation by adding essence of technology. We work to educate, train, and develop technology suitable and accessible to world through Nepal. We have been actively involved to promote technology, with key working area in Soft-solution development, hardware research and development, training with IoT. We are also, Microsoft Education Partner working to promote technology in Education with training in office 365 and Hour of Code as social contribution.",
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
            name: "Eeda Rijal",
            designation: "CEO",
            image: eeda,
        },
        {
            name: "Shishir Shrestha",
            designation: "COO",
            image: shishir,
            facebook: "https://www.facebook.com/link2shishir",
            linkedin: "https://www.linkedin.com/in/link2shishir/",
            twitter: "https://twitter.com/link2shishir",
        },
        {
            name: "Saurav Shrestha",
            designation: "Manager",
            image: saurav,
        },
        {
            name: "Rabin Shrestha",
            designation: "Tech Lead",
            image: rabin,
            facebook: "https://www.facebook.com/shrestha21",
            linkedin: "https://www.linkedin.com/in/rabin-shrestha-272991186/",
        },
        {
            name: "Dharaatee Shree Shrestha",
            designation: "Project Lead",
            image: dharaateeshree,
            linkedin: "https://www.linkedin.com/in/dharaatee/",
        },
        {
            name: "Susan Shrestha",
            designation: "WordPress Developer",
            image: susan,
            facebook: "https://www.facebook.com/susansrth/",
            linkedin: "https://www.linkedin.com/in/susan-shrestha-739580154/",
            instagram: "https://www.instagram.com/shrestha_d_sushant/",
            twitter: "https://twitter.com/Shr10Susan",
        },
        {
            name: "Sanjay Limbu",
            designation: "WordPress Developer",
            image: sanjay,
            facebook: "https://www.facebook.com/sanjeev.limboo.3",
            linkedin: "https://www.linkedin.com/in/sanjay-subba-aa833917a/",
        },
        {
            name: "Gautam Chaudhary ",
            designation: "ReactJs Intern",
            image: gautam,
            facebook: "https://www.facebook.com/gautam.chaudhary.1800",
            linkedin: "https://www.linkedin.com/in/gautam-chaudhary-007/",
        },
        {
            name: "Anil Tiruwa",
            designation: "IoT Intern",
            image: anil,
            facebook: "https://www.facebook.com/anil.tiruwa.399",
        },
        // {
        //     name: "Aarati Shah",
        //     designation: "ReactJs Native Developer",
        //     image: aarati,
        // },
        {
            name: "Dinesh Yadav",
            designation: "ReactJs Native Developer",
            image: dinesh,
        },
    ]);

    const [partners, setPartners] = useState([
        { logo: mars, link: "lwal" },
        { logo: somen, link: "lwal" },
        { logo: asman, link: "lwal" },
        { logo: irda, link: "lwal" },
        { logo: sirisyouth, link: "lwal" },
        { logo: fibro, link: "lwal" },
        { logo: gdo, link: "lwal" },
        { logo: bloom, link: "lwal" },
        { logo: suswasthya, link: "lwal" },
        // { logo: "2", link: "lwal" },
        // { logo: "3", link: "lwal" },
        // { logo: "4", link: "lwal" },
        // { logo: "5", link: "lwal" },
        // { logo: "6", link: "lwal" },
        // { logo: "7", link: "lwal" },
        // { logo: "8", link: "lwal" },
    ]);
    return (
        <div className="about-section">
            <div className="container">
                <div className="aboutus-section">
                    <div className={`section-title ${heroColor}`}>
                        <h1>About Us</h1>
                    </div>
                    <div className={`about-content ${heroColor}`}>
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
                    <ul>
                        {whySochware.map((data, i) => (
                            <div className="d-flex" key={i}>
                                <li>
                                    <div>
                                        <img
                                            src={listImage}
                                            alt=""
                                            className="mr-2 list-image"
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
            <section>
                <div className="container">
                    <div className={`section-title ${heroColor} mt-5`}>
                        <h1>Our Team</h1>
                    </div>
                </div>
                <div className={`team-slider ${heroColor}`}>
                    <div className="container">
                        <Slider {...settings}>
                            {ourTeam.map((data, i) => (
                                <div className="slider-content" key={i}>
                                    <div className="card mr-3">
                                        <div className="row no-gutters justify-content-center">
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
                                                    <div className="social-links d-flex">
                                                        {data.facebook ? (
                                                            <a
                                                                href={
                                                                    data.facebook
                                                                }
                                                            >
                                                                <FaFacebookSquare />
                                                            </a>
                                                        ) : null}
                                                        {data.instagram ? (
                                                            <a
                                                                href={
                                                                    data.instagram
                                                                }
                                                            >
                                                                <FaInstagram />
                                                            </a>
                                                        ) : null}

                                                        {data.mail ? (
                                                            <a href={data.mail}>
                                                                <FaEnvelope />
                                                            </a>
                                                        ) : null}
                                                        {data.twitter ? (
                                                            <a
                                                                href={
                                                                    data.twitter
                                                                }
                                                            >
                                                                <FaTwitter />
                                                            </a>
                                                        ) : null}

                                                        {data.linkedin ? (
                                                            <a
                                                                href={
                                                                    data.linkedin
                                                                }
                                                            >
                                                                <FaLinkedin />
                                                            </a>
                                                        ) : null}
                                                    </div>
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
                    <div className="container">
                        <div className="partner-logo">
                            {partners.map((data, i) => (
                                <div className="partner-circle" key={i}>
                                    <img src={data.logo} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
