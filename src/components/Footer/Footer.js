import React from "react";
import "./Footer.scss";
import facebookIcon from "../../images/Facebook.svg";
import twitterIcon from "../../images/Twitter.svg";
import instagramIcon from "../../images/Insta.svg";
import mailIcon from "../../images/Mail.svg";
import dribbleIcon from "../../images/Dribbble.svg";
import miniRocketIcon from "../../images/mini-rocket.svg";
import footerImage from "../../images/Footer-Image.svg";
import footerLogo from "../../images/logo.svg";

import { Form, InputGroup } from "react-bootstrap";

function Footer({ logo }) {
    return (
        <section className="footer-section">
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
                            <div className="social-links">
                                <a href="https://www.facebook.com">
                                    <img src={facebookIcon} alt="" />
                                </a>
                                <a href="https://www.facebook.com">
                                    <img src={instagramIcon} alt="" />
                                </a>
                                <a href="https://www.facebook.com">
                                    <img src={mailIcon} alt="" />
                                </a>
                                <a href="https://www.facebook.com">
                                    <img src={twitterIcon} alt="" />
                                </a>
                                <a href="https://www.facebook.com">
                                    <img src={dribbleIcon} alt="" />
                                </a>
                            </div>
                            <div className="feedback-content dark">
                                <p>Got Some Feedback</p>
                                <form action="">
                                    <div className="form-group">
                                        <InputGroup>
                                            <Form.Control
                                                type="text"
                                                required
                                                placeholder="Send Us Your Feedback...."
                                            />
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <img
                                                        src={miniRocketIcon}
                                                        alt=""
                                                    ></img>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                        </InputGroup>
                                    </div>
                                </form>
                            </div>
                            <div className="copyright">
                                <p>
                                    Copyright &copy; Sochware. All Right
                                    Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={footerImage}
                alt=""
                className="img-fluid footer-image w-100"
            />
        </section>
    );
}

export default Footer;
