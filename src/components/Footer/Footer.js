import React from "react";
import "./_footer.scss";
import facebookIcon from "../../images/Facebook.svg";
import twitterIcon from "../../images/Twitter.svg";
import instagramIcon from "../../images/Insta.svg";
import mailIcon from "../../images/Mail.svg";
import dribbleIcon from "../../images/Dribbble.svg";
import miniRocketIcon from "../../images/mini-rocket.svg";
import footerImage from "../../images/Footer-Image.svg";

import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer({ logo, heroColor }) {
    return (
        <section className={`footer-section ${heroColor}`}>
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-4">
                        <div className="footer-content">
                            <div className="footer-logo">
                                <img src={logo} alt="" className="img-fluid" />
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
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <h2>Website</h2>
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
                    <div className="col-12 col-md-3">
                        <h2>Website</h2>
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
                </div>
            </div>
            <div className="copyright text-center">
                <p>Copyright &copy; Sochware. All Right Reserved</p>
            </div>
        </section>
    );
}

export default Footer;

// const qrSvg = 
