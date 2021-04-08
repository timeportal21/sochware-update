import React, { useState } from "react";
import "./_footer.scss";
import facebookIcon from "../../images/Facebook.svg";
import twitterIcon from "../../images/Twitter.svg";
import instagramIcon from "../../images/Insta.svg";
import mailIcon from "../../images/Mail.svg";
import dribbleIcon from "../../images/Dribbble.svg";
import miniRocketIcon from "../../images/mini-rocket.svg";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import footerLogo from "../../images/sochwarelogo.svg";
import qr from "../../images/sochwareqr.png";

function Footer({ logo, heroColor }) {
    // const handleTopButton = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };

    return (
        <section className={`footer-section ${heroColor}`}>
            {/* <div className="goto-top">
                <button className="btn" onClick={handleTopButton}>
                    {scrollToTopSvg}
                </button>
            </div> */}
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-4">
                        <div className="footer-content">
                            <div className="footer-logo">
                                <img
                                    src={footerLogo}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="footer-content">
                            <div className="social-links">
                                <a href="https://www.facebook.com/sochware/">
                                    <img src={facebookIcon} alt="" />
                                </a>
                                <a href="https://www.instagram.com/sochware/?hl=en">
                                    <img src={instagramIcon} alt="" />
                                </a>
                                <a href="mailto:mail@sochware.com">
                                    <img src={mailIcon} alt="" />
                                </a>
                                <a href="https://twitter.com/sochware?lang=en">
                                    <img src={twitterIcon} alt="" />
                                </a>
                                {/* <a href="https://www.facebook.com">
                                    <img src={dribbleIcon} alt="" />
                                </a> */}
                            </div>
                            <div className="feedback-content dark text-center">
                                <p>Got Some Feedback</p>
                                <form action="">
                                    <div className="form-group">
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    {rocketSvg}
                                                    {/* <img
                                                        src={rocketSvg}
                                                        alt=""
                                                    ></img> */}
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 footer-link text-white text-center">
                        <h3>Website</h3>
                        <ul>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/about">What we do</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/service">Services</Link>
                            </li>
                            <li>
                                <Link to="/career">Career</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 footer-link text-white text-center ">
                        <h3>Connect With us</h3>
                        <ul>
                            <li>
                                <Link to="/about">Media link</Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com/sochware/?hl=en">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/company/sochware/">
                                    Linkedin
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/service">Dribble</Link>
                            </li> */}
                            {/* <li>
                                <Link to="/career">Dribble</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 text-center">
                        <img src={qr} alt="" className="qr-image" />
                    </div>
                </div>
            </div>
            <div className="copyright text-center text-white">
                <p className="mb-0">
                    Copyright &copy; Sochware. All Right Reserved
                </p>
            </div>
        </section>
    );
}

export default Footer;

const rocketSvg = (
    <svg
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22.3461 1.85544C22.2449 1.55167 21.9411 1.24789 21.6373 1.14663C17.3845 0.0327858 13.0303 1.34915 10.0938 4.79194L8.98 6.1083L6.24602 5.50075C4.92965 4.99446 3.51203 5.60201 2.90448 6.81712L0.67679 10.7662C0.474273 11.07 0.474273 11.3738 0.67679 11.6775C0.778049 11.9813 1.08182 12.1838 1.3856 12.2851L4.52462 12.9939C4.22084 13.804 4.11958 14.614 3.91707 15.4241C3.91707 15.7279 4.01833 16.0317 4.22084 16.2342L7.35986 19.3732C7.56238 19.5757 7.7649 19.677 8.06867 19.677H8.16993C9.08126 19.5757 9.89133 19.4744 10.7014 19.1707L11.3089 22.2084C11.4102 22.5122 11.6127 22.816 11.9165 22.9172C12.0178 23.0185 12.2203 23.0185 12.3215 23.0185C12.5241 23.0185 12.6253 23.0185 12.8278 22.9172L16.7769 20.6896C17.8908 20.082 18.4983 18.6644 18.1945 17.348L17.4857 14.5128L18.7008 13.3989C22.0424 10.5637 23.46 6.00705 22.3461 1.85544ZM6.85357 8.63977C6.24602 9.44984 5.63846 10.2599 5.23343 11.07L3.107 10.5637L4.62588 7.8297C4.82839 7.42467 5.23343 7.32341 5.73972 7.42467L7.46112 7.8297L6.85357 8.63977ZM15.6631 18.8669L12.9291 20.3858L12.5241 18.3606C13.4354 17.9556 14.2454 17.348 14.9543 16.7405L15.6631 16.0317L16.0681 17.753C16.2706 18.2593 15.9668 18.7656 15.6631 18.8669ZM16.3719 8.63977C15.5618 8.63977 14.853 7.93096 14.853 7.12089C14.853 6.31082 15.5618 5.60201 16.3719 5.60201C17.1819 5.60201 17.8908 6.31082 17.8908 7.12089C17.8908 7.93096 17.2832 8.63977 16.3719 8.63977Z"
            fill="#071E40"
        />
    </svg>
);

const scrollToTopSvg = (
    <motion.svg
        initial={false}
        animate={{ y: 0, transition: { duration: 1 } }}
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
    >
        <motion.path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"></motion.path>
    </motion.svg>
);
