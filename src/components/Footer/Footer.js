import React from "react";
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
import footerLogo from "../../images/sochwarelogo.png";

function Footer({ logo, heroColor }) {
    return (
        <section className={`footer-section ${heroColor}`}>
        <div className="goto-top"></div>
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
                                <a href="https://www.facebook.com">
                                    <img src={dribbleIcon} alt="" />
                                </a>
                            </div>
                            <div className="feedback-content dark text-center">
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
                    <div className="col-12 col-md-3 footer-link text-white text-center">
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
                    <div className="col-12 col-md-3 footer-link text-white text-center ">
                        <h2>Connect With us</h2>
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
                            <li>
                                <Link to="/service">Dribble</Link>
                            </li>
                            {/* <li>
                                <Link to="/career">Dribble</Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 text-center">{qrSvg}</div>
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

const qrSvg = (
    <svg
        width="200"
        height="200"
        viewBox="0 0 252 275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0)">
            <path
                d="M229.282 23.8893H29.2822V223.889H229.282V23.8893Z"
                fill="white"
            />
            <path
                d="M48.2822 35.8893H41.2822V42.8893H48.2822V35.8893Z"
                fill="black"
            />
            <path
                d="M55.2822 35.8893H48.2822V42.8893H55.2822V35.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 35.8893H55.2822V42.8893H62.2822V35.8893Z"
                fill="black"
            />
            <path
                d="M69.2822 35.8893H62.2822V42.8893H69.2822V35.8893Z"
                fill="black"
            />
            <path
                d="M76.2822 35.8893H69.2822V42.8893H76.2822V35.8893Z"
                fill="black"
            />
            <path
                d="M83.2822 35.8893H76.2822V42.8893H83.2822V35.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 35.8893H83.2822V42.8893H90.2822V35.8893Z"
                fill="black"
            />
            <path
                d="M104.282 35.8893H97.2822V42.8893H104.282V35.8893Z"
                fill="black"
            />
            <path
                d="M111.282 35.8893H104.282V42.8893H111.282V35.8893Z"
                fill="black"
            />
            <path
                d="M160.282 35.8893H153.282V42.8893H160.282V35.8893Z"
                fill="black"
            />
            <path
                d="M174.282 35.8893H167.282V42.8893H174.282V35.8893Z"
                fill="black"
            />
            <path
                d="M181.282 35.8893H174.282V42.8893H181.282V35.8893Z"
                fill="black"
            />
            <path
                d="M188.282 35.8893H181.282V42.8893H188.282V35.8893Z"
                fill="black"
            />
            <path
                d="M195.282 35.8893H188.282V42.8893H195.282V35.8893Z"
                fill="black"
            />
            <path
                d="M202.282 35.8893H195.282V42.8893H202.282V35.8893Z"
                fill="black"
            />
            <path
                d="M209.282 35.8893H202.282V42.8893H209.282V35.8893Z"
                fill="black"
            />
            <path
                d="M216.282 35.8893H209.282V42.8893H216.282V35.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 42.8893H41.2822V49.8893H48.2822V42.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 42.8893H83.2822V49.8893H90.2822V42.8893Z"
                fill="black"
            />
            <path
                d="M146.282 42.8893H139.282V49.8893H146.282V42.8893Z"
                fill="black"
            />
            <path
                d="M160.282 42.8893H153.282V49.8893H160.282V42.8893Z"
                fill="black"
            />
            <path
                d="M174.282 42.8893H167.282V49.8893H174.282V42.8893Z"
                fill="black"
            />
            <path
                d="M216.282 42.8893H209.282V49.8893H216.282V42.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 49.8893H41.2822V56.8893H48.2822V49.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 49.8893H55.2822V56.8893H62.2822V49.8893Z"
                fill="black"
            />
            <path
                d="M69.2822 49.8893H62.2822V56.8893H69.2822V49.8893Z"
                fill="black"
            />
            <path
                d="M76.2822 49.8893H69.2822V56.8893H76.2822V49.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 49.8893H83.2822V56.8893H90.2822V49.8893Z"
                fill="black"
            />
            <path
                d="M104.282 49.8893H97.2822V56.8893H104.282V49.8893Z"
                fill="black"
            />
            <path
                d="M125.282 49.8893H118.282V56.8893H125.282V49.8893Z"
                fill="black"
            />
            <path
                d="M132.282 49.8893H125.282V56.8893H132.282V49.8893Z"
                fill="black"
            />
            <path
                d="M139.282 49.8893H132.282V56.8893H139.282V49.8893Z"
                fill="black"
            />
            <path
                d="M146.282 49.8893H139.282V56.8893H146.282V49.8893Z"
                fill="black"
            />
            <path
                d="M153.282 49.8893H146.282V56.8893H153.282V49.8893Z"
                fill="black"
            />
            <path
                d="M174.282 49.8893H167.282V56.8893H174.282V49.8893Z"
                fill="black"
            />
            <path
                d="M188.282 49.8893H181.282V56.8893H188.282V49.8893Z"
                fill="black"
            />
            <path
                d="M195.282 49.8893H188.282V56.8893H195.282V49.8893Z"
                fill="black"
            />
            <path
                d="M202.282 49.8893H195.282V56.8893H202.282V49.8893Z"
                fill="black"
            />
            <path
                d="M216.282 49.8893H209.282V56.8893H216.282V49.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 56.8893H41.2822V63.8893H48.2822V56.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 56.8893H55.2822V63.8893H62.2822V56.8893Z"
                fill="black"
            />
            <path
                d="M69.2822 56.8893H62.2822V63.8893H69.2822V56.8893Z"
                fill="black"
            />
            <path
                d="M76.2822 56.8893H69.2822V63.8893H76.2822V56.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 56.8893H83.2822V63.8893H90.2822V56.8893Z"
                fill="black"
            />
            <path
                d="M104.282 56.8893H97.2822V63.8893H104.282V56.8893Z"
                fill="black"
            />
            <path
                d="M111.282 56.8893H104.282V63.8893H111.282V56.8893Z"
                fill="black"
            />
            <path
                d="M125.282 56.8893H118.282V63.8893H125.282V56.8893Z"
                fill="black"
            />
            <path
                d="M139.282 56.8893H132.282V63.8893H139.282V56.8893Z"
                fill="black"
            />
            <path
                d="M146.282 56.8893H139.282V63.8893H146.282V56.8893Z"
                fill="black"
            />
            <path
                d="M153.282 56.8893H146.282V63.8893H153.282V56.8893Z"
                fill="black"
            />
            <path
                d="M160.282 56.8893H153.282V63.8893H160.282V56.8893Z"
                fill="black"
            />
            <path
                d="M174.282 56.8893H167.282V63.8893H174.282V56.8893Z"
                fill="black"
            />
            <path
                d="M188.282 56.8893H181.282V63.8893H188.282V56.8893Z"
                fill="black"
            />
            <path
                d="M195.282 56.8893H188.282V63.8893H195.282V56.8893Z"
                fill="black"
            />
            <path
                d="M202.282 56.8893H195.282V63.8893H202.282V56.8893Z"
                fill="black"
            />
            <path
                d="M216.282 56.8893H209.282V63.8893H216.282V56.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 63.8893H41.2822V70.8893H48.2822V63.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 63.8893H55.2822V70.8893H62.2822V63.8893Z"
                fill="black"
            />
            <path
                d="M69.2822 63.8893H62.2822V70.8893H69.2822V63.8893Z"
                fill="black"
            />
            <path
                d="M76.2822 63.8893H69.2822V70.8893H76.2822V63.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 63.8893H83.2822V70.8893H90.2822V63.8893Z"
                fill="black"
            />
            <path
                d="M104.282 63.8893H97.2822V70.8893H104.282V63.8893Z"
                fill="black"
            />
            <path
                d="M111.282 63.8893H104.282V70.8893H111.282V63.8893Z"
                fill="black"
            />
            <path
                d="M118.282 63.8893H111.282V70.8893H118.282V63.8893Z"
                fill="black"
            />
            <path
                d="M125.282 63.8893H118.282V70.8893H125.282V63.8893Z"
                fill="black"
            />
            <path
                d="M153.282 63.8893H146.282V70.8893H153.282V63.8893Z"
                fill="black"
            />
            <path
                d="M160.282 63.8893H153.282V70.8893H160.282V63.8893Z"
                fill="black"
            />
            <path
                d="M174.282 63.8893H167.282V70.8893H174.282V63.8893Z"
                fill="black"
            />
            <path
                d="M188.282 63.8893H181.282V70.8893H188.282V63.8893Z"
                fill="black"
            />
            <path
                d="M195.282 63.8893H188.282V70.8893H195.282V63.8893Z"
                fill="black"
            />
            <path
                d="M202.282 63.8893H195.282V70.8893H202.282V63.8893Z"
                fill="black"
            />
            <path
                d="M216.282 63.8893H209.282V70.8893H216.282V63.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 70.8893H41.2822V77.8893H48.2822V70.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 70.8893H83.2822V77.8893H90.2822V70.8893Z"
                fill="black"
            />
            <path
                d="M111.282 70.8893H104.282V77.8893H111.282V70.8893Z"
                fill="black"
            />
            <path
                d="M132.282 70.8893H125.282V77.8893H132.282V70.8893Z"
                fill="black"
            />
            <path
                d="M160.282 70.8893H153.282V77.8893H160.282V70.8893Z"
                fill="black"
            />
            <path
                d="M174.282 70.8893H167.282V77.8893H174.282V70.8893Z"
                fill="black"
            />
            <path
                d="M216.282 70.8893H209.282V77.8893H216.282V70.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 77.8893H41.2822V84.8893H48.2822V77.8893Z"
                fill="black"
            />
            <path
                d="M55.2822 77.8893H48.2822V84.8893H55.2822V77.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 77.8893H55.2822V84.8893H62.2822V77.8893Z"
                fill="black"
            />
            <path
                d="M69.2822 77.8893H62.2822V84.8893H69.2822V77.8893Z"
                fill="black"
            />
            <path
                d="M76.2822 77.8893H69.2822V84.8893H76.2822V77.8893Z"
                fill="black"
            />
            <path
                d="M83.2822 77.8893H76.2822V84.8893H83.2822V77.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 77.8893H83.2822V84.8893H90.2822V77.8893Z"
                fill="black"
            />
            <path
                d="M104.282 77.8893H97.2822V84.8893H104.282V77.8893Z"
                fill="black"
            />
            <path
                d="M118.282 77.8893H111.282V84.8893H118.282V77.8893Z"
                fill="black"
            />
            <path
                d="M132.282 77.8893H125.282V84.8893H132.282V77.8893Z"
                fill="black"
            />
            <path
                d="M146.282 77.8893H139.282V84.8893H146.282V77.8893Z"
                fill="black"
            />
            <path
                d="M160.282 77.8893H153.282V84.8893H160.282V77.8893Z"
                fill="black"
            />
            <path
                d="M174.282 77.8893H167.282V84.8893H174.282V77.8893Z"
                fill="black"
            />
            <path
                d="M181.282 77.8893H174.282V84.8893H181.282V77.8893Z"
                fill="black"
            />
            <path
                d="M188.282 77.8893H181.282V84.8893H188.282V77.8893Z"
                fill="black"
            />
            <path
                d="M195.282 77.8893H188.282V84.8893H195.282V77.8893Z"
                fill="black"
            />
            <path
                d="M202.282 77.8893H195.282V84.8893H202.282V77.8893Z"
                fill="black"
            />
            <path
                d="M209.282 77.8893H202.282V84.8893H209.282V77.8893Z"
                fill="black"
            />
            <path
                d="M216.282 77.8893H209.282V84.8893H216.282V77.8893Z"
                fill="black"
            />
            <path
                d="M111.282 84.8893H104.282V91.8893H111.282V84.8893Z"
                fill="black"
            />
            <path
                d="M125.282 84.8893H118.282V91.8893H125.282V84.8893Z"
                fill="black"
            />
            <path
                d="M146.282 84.8893H139.282V91.8893H146.282V84.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 91.8893H41.2822V98.8893H48.2822V91.8893Z"
                fill="black"
            />
            <path
                d="M55.2822 91.8893H48.2822V98.8893H55.2822V91.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 91.8893H55.2822V98.8893H62.2822V91.8893Z"
                fill="black"
            />
            <path
                d="M69.2822 91.8893H62.2822V98.8893H69.2822V91.8893Z"
                fill="black"
            />
            <path
                d="M90.2822 91.8893H83.2822V98.8893H90.2822V91.8893Z"
                fill="black"
            />
            <path
                d="M104.282 91.8893H97.2822V98.8893H104.282V91.8893Z"
                fill="black"
            />
            <path
                d="M146.282 91.8893H139.282V98.8893H146.282V91.8893Z"
                fill="black"
            />
            <path
                d="M153.282 91.8893H146.282V98.8893H153.282V91.8893Z"
                fill="black"
            />
            <path
                d="M160.282 91.8893H153.282V98.8893H160.282V91.8893Z"
                fill="black"
            />
            <path
                d="M167.282 91.8893H160.282V98.8893H167.282V91.8893Z"
                fill="black"
            />
            <path
                d="M188.282 91.8893H181.282V98.8893H188.282V91.8893Z"
                fill="black"
            />
            <path
                d="M195.282 91.8893H188.282V98.8893H195.282V91.8893Z"
                fill="black"
            />
            <path
                d="M202.282 91.8893H195.282V98.8893H202.282V91.8893Z"
                fill="black"
            />
            <path
                d="M216.282 91.8893H209.282V98.8893H216.282V91.8893Z"
                fill="black"
            />
            <path
                d="M48.2822 98.8893H41.2822V105.889H48.2822V98.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 98.8893H55.2822V105.889H62.2822V98.8893Z"
                fill="black"
            />
            <path
                d="M76.2822 98.8893H69.2822V105.889H76.2822V98.8893Z"
                fill="black"
            />
            <path
                d="M83.2822 98.8893H76.2822V105.889H83.2822V98.8893Z"
                fill="black"
            />
            <path
                d="M97.2822 98.8893H90.2822V105.889H97.2822V98.8893Z"
                fill="black"
            />
            <path
                d="M104.282 98.8893H97.2822V105.889H104.282V98.8893Z"
                fill="black"
            />
            <path
                d="M111.282 98.8893H104.282V105.889H111.282V98.8893Z"
                fill="black"
            />
            <path
                d="M160.282 98.8893H153.282V105.889H160.282V98.8893Z"
                fill="black"
            />
            <path
                d="M167.282 98.8893H160.282V105.889H167.282V98.8893Z"
                fill="black"
            />
            <path
                d="M181.282 98.8893H174.282V105.889H181.282V98.8893Z"
                fill="black"
            />
            <path
                d="M209.282 98.8893H202.282V105.889H209.282V98.8893Z"
                fill="black"
            />
            <path
                d="M62.2822 105.889H55.2822V112.889H62.2822V105.889Z"
                fill="black"
            />
            <path
                d="M76.2822 105.889H69.2822V112.889H76.2822V105.889Z"
                fill="black"
            />
            <path
                d="M83.2822 105.889H76.2822V112.889H83.2822V105.889Z"
                fill="black"
            />
            <path
                d="M90.2822 105.889H83.2822V112.889H90.2822V105.889Z"
                fill="black"
            />
            <path
                d="M97.2822 105.889H90.2822V112.889H97.2822V105.889Z"
                fill="black"
            />
            <path
                d="M104.282 105.889H97.2822V112.889H104.282V105.889Z"
                fill="black"
            />
            <path
                d="M160.282 105.889H153.282V112.889H160.282V105.889Z"
                fill="black"
            />
            <path
                d="M181.282 105.889H174.282V112.889H181.282V105.889Z"
                fill="black"
            />
            <path
                d="M62.2822 112.889H55.2822V119.889H62.2822V112.889Z"
                fill="black"
            />
            <path
                d="M125.282 112.889H118.282V119.889H125.282V112.889Z"
                fill="black"
            />
            <path
                d="M132.282 112.889H125.282V119.889H132.282V112.889Z"
                fill="black"
            />
            <path
                d="M139.282 112.889H132.282V119.889H139.282V112.889Z"
                fill="black"
            />
            <path
                d="M146.282 112.889H139.282V119.889H146.282V112.889Z"
                fill="black"
            />
            <path
                d="M153.282 112.889H146.282V119.889H153.282V112.889Z"
                fill="black"
            />
            <path
                d="M160.282 112.889H153.282V119.889H160.282V112.889Z"
                fill="black"
            />
            <path
                d="M167.282 112.889H160.282V119.889H167.282V112.889Z"
                fill="black"
            />
            <path
                d="M174.282 112.889H167.282V119.889H174.282V112.889Z"
                fill="black"
            />
            <path
                d="M195.282 112.889H188.282V119.889H195.282V112.889Z"
                fill="black"
            />
            <path
                d="M202.282 112.889H195.282V119.889H202.282V112.889Z"
                fill="black"
            />
            <path
                d="M48.2822 119.889H41.2822V126.889H48.2822V119.889Z"
                fill="black"
            />
            <path
                d="M55.2822 119.889H48.2822V126.889H55.2822V119.889Z"
                fill="black"
            />
            <path
                d="M62.2822 119.889H55.2822V126.889H62.2822V119.889Z"
                fill="black"
            />
            <path
                d="M76.2822 119.889H69.2822V126.889H76.2822V119.889Z"
                fill="black"
            />
            <path
                d="M83.2822 119.889H76.2822V126.889H83.2822V119.889Z"
                fill="black"
            />
            <path
                d="M90.2822 119.889H83.2822V126.889H90.2822V119.889Z"
                fill="black"
            />
            <path
                d="M104.282 119.889H97.2822V126.889H104.282V119.889Z"
                fill="black"
            />
            <path
                d="M111.282 119.889H104.282V126.889H111.282V119.889Z"
                fill="black"
            />
            <path
                d="M125.282 119.889H118.282V126.889H125.282V119.889Z"
                fill="black"
            />
            <path
                d="M139.282 119.889H132.282V126.889H139.282V119.889Z"
                fill="black"
            />
            <path
                d="M153.282 119.889H146.282V126.889H153.282V119.889Z"
                fill="black"
            />
            <path
                d="M167.282 119.889H160.282V126.889H167.282V119.889Z"
                fill="black"
            />
            <path
                d="M174.282 119.889H167.282V126.889H174.282V119.889Z"
                fill="black"
            />
            <path
                d="M181.282 119.889H174.282V126.889H181.282V119.889Z"
                fill="black"
            />
            <path
                d="M188.282 119.889H181.282V126.889H188.282V119.889Z"
                fill="black"
            />
            <path
                d="M202.282 119.889H195.282V126.889H202.282V119.889Z"
                fill="black"
            />
            <path
                d="M209.282 119.889H202.282V126.889H209.282V119.889Z"
                fill="black"
            />
            <path
                d="M216.282 119.889H209.282V126.889H216.282V119.889Z"
                fill="black"
            />
            <path
                d="M55.2822 126.889H48.2822V133.889H55.2822V126.889Z"
                fill="black"
            />
            <path
                d="M83.2822 126.889H76.2822V133.889H83.2822V126.889Z"
                fill="black"
            />
            <path
                d="M118.282 126.889H111.282V133.889H118.282V126.889Z"
                fill="black"
            />
            <path
                d="M125.282 126.889H118.282V133.889H125.282V126.889Z"
                fill="black"
            />
            <path
                d="M139.282 126.889H132.282V133.889H139.282V126.889Z"
                fill="black"
            />
            <path
                d="M146.282 126.889H139.282V133.889H146.282V126.889Z"
                fill="black"
            />
            <path
                d="M153.282 126.889H146.282V133.889H153.282V126.889Z"
                fill="black"
            />
            <path
                d="M160.282 126.889H153.282V133.889H160.282V126.889Z"
                fill="black"
            />
            <path
                d="M174.282 126.889H167.282V133.889H174.282V126.889Z"
                fill="black"
            />
            <path
                d="M181.282 126.889H174.282V133.889H181.282V126.889Z"
                fill="black"
            />
            <path
                d="M188.282 126.889H181.282V133.889H188.282V126.889Z"
                fill="black"
            />
            <path
                d="M216.282 126.889H209.282V133.889H216.282V126.889Z"
                fill="black"
            />
            <path
                d="M55.2822 133.889H48.2822V140.889H55.2822V133.889Z"
                fill="black"
            />
            <path
                d="M62.2822 133.889H55.2822V140.889H62.2822V133.889Z"
                fill="black"
            />
            <path
                d="M76.2822 133.889H69.2822V140.889H76.2822V133.889Z"
                fill="black"
            />
            <path
                d="M83.2822 133.889H76.2822V140.889H83.2822V133.889Z"
                fill="black"
            />
            <path
                d="M90.2822 133.889H83.2822V140.889H90.2822V133.889Z"
                fill="black"
            />
            <path
                d="M97.2822 133.889H90.2822V140.889H97.2822V133.889Z"
                fill="black"
            />
            <path
                d="M132.282 133.889H125.282V140.889H132.282V133.889Z"
                fill="black"
            />
            <path
                d="M146.282 133.889H139.282V140.889H146.282V133.889Z"
                fill="black"
            />
            <path
                d="M167.282 133.889H160.282V140.889H167.282V133.889Z"
                fill="black"
            />
            <path
                d="M188.282 133.889H181.282V140.889H188.282V133.889Z"
                fill="black"
            />
            <path
                d="M202.282 133.889H195.282V140.889H202.282V133.889Z"
                fill="black"
            />
            <path
                d="M209.282 133.889H202.282V140.889H209.282V133.889Z"
                fill="black"
            />
            <path
                d="M48.2822 140.889H41.2822V147.889H48.2822V140.889Z"
                fill="black"
            />
            <path
                d="M83.2822 140.889H76.2822V147.889H83.2822V140.889Z"
                fill="black"
            />
            <path
                d="M104.282 140.889H97.2822V147.889H104.282V140.889Z"
                fill="black"
            />
            <path
                d="M111.282 140.889H104.282V147.889H111.282V140.889Z"
                fill="black"
            />
            <path
                d="M132.282 140.889H125.282V147.889H132.282V140.889Z"
                fill="black"
            />
            <path
                d="M160.282 140.889H153.282V147.889H160.282V140.889Z"
                fill="black"
            />
            <path
                d="M167.282 140.889H160.282V147.889H167.282V140.889Z"
                fill="black"
            />
            <path
                d="M181.282 140.889H174.282V147.889H181.282V140.889Z"
                fill="black"
            />
            <path
                d="M188.282 140.889H181.282V147.889H188.282V140.889Z"
                fill="black"
            />
            <path
                d="M216.282 140.889H209.282V147.889H216.282V140.889Z"
                fill="black"
            />
            <path
                d="M62.2822 147.889H55.2822V154.889H62.2822V147.889Z"
                fill="black"
            />
            <path
                d="M90.2822 147.889H83.2822V154.889H90.2822V147.889Z"
                fill="black"
            />
            <path
                d="M111.282 147.889H104.282V154.889H111.282V147.889Z"
                fill="black"
            />
            <path
                d="M125.282 147.889H118.282V154.889H125.282V147.889Z"
                fill="black"
            />
            <path
                d="M139.282 147.889H132.282V154.889H139.282V147.889Z"
                fill="black"
            />
            <path
                d="M153.282 147.889H146.282V154.889H153.282V147.889Z"
                fill="black"
            />
            <path
                d="M160.282 147.889H153.282V154.889H160.282V147.889Z"
                fill="black"
            />
            <path
                d="M167.282 147.889H160.282V154.889H167.282V147.889Z"
                fill="black"
            />
            <path
                d="M174.282 147.889H167.282V154.889H174.282V147.889Z"
                fill="black"
            />
            <path
                d="M181.282 147.889H174.282V154.889H181.282V147.889Z"
                fill="black"
            />
            <path
                d="M188.282 147.889H181.282V154.889H188.282V147.889Z"
                fill="black"
            />
            <path
                d="M195.282 147.889H188.282V154.889H195.282V147.889Z"
                fill="black"
            />
            <path
                d="M202.282 147.889H195.282V154.889H202.282V147.889Z"
                fill="black"
            />
            <path
                d="M209.282 147.889H202.282V154.889H209.282V147.889Z"
                fill="black"
            />
            <path
                d="M216.282 147.889H209.282V154.889H216.282V147.889Z"
                fill="black"
            />
            <path
                d="M104.282 154.889H97.2822V161.889H104.282V154.889Z"
                fill="black"
            />
            <path
                d="M111.282 154.889H104.282V161.889H111.282V154.889Z"
                fill="black"
            />
            <path
                d="M118.282 154.889H111.282V161.889H118.282V154.889Z"
                fill="black"
            />
            <path
                d="M132.282 154.889H125.282V161.889H132.282V154.889Z"
                fill="black"
            />
            <path
                d="M139.282 154.889H132.282V161.889H139.282V154.889Z"
                fill="black"
            />
            <path
                d="M160.282 154.889H153.282V161.889H160.282V154.889Z"
                fill="black"
            />
            <path
                d="M188.282 154.889H181.282V161.889H188.282V154.889Z"
                fill="black"
            />
            <path
                d="M202.282 154.889H195.282V161.889H202.282V154.889Z"
                fill="black"
            />
            <path
                d="M216.282 154.889H209.282V161.889H216.282V154.889Z"
                fill="black"
            />
            <path
                d="M48.2822 161.889H41.2822V168.889H48.2822V161.889Z"
                fill="black"
            />
            <path
                d="M55.2822 161.889H48.2822V168.889H55.2822V161.889Z"
                fill="black"
            />
            <path
                d="M62.2822 161.889H55.2822V168.889H62.2822V161.889Z"
                fill="black"
            />
            <path
                d="M69.2822 161.889H62.2822V168.889H69.2822V161.889Z"
                fill="black"
            />
            <path
                d="M76.2822 161.889H69.2822V168.889H76.2822V161.889Z"
                fill="black"
            />
            <path
                d="M83.2822 161.889H76.2822V168.889H83.2822V161.889Z"
                fill="black"
            />
            <path
                d="M90.2822 161.889H83.2822V168.889H90.2822V161.889Z"
                fill="black"
            />
            <path
                d="M118.282 161.889H111.282V168.889H118.282V161.889Z"
                fill="black"
            />
            <path
                d="M125.282 161.889H118.282V168.889H125.282V161.889Z"
                fill="black"
            />
            <path
                d="M132.282 161.889H125.282V168.889H132.282V161.889Z"
                fill="black"
            />
            <path
                d="M139.282 161.889H132.282V168.889H139.282V161.889Z"
                fill="black"
            />
            <path
                d="M160.282 161.889H153.282V168.889H160.282V161.889Z"
                fill="black"
            />
            <path
                d="M174.282 161.889H167.282V168.889H174.282V161.889Z"
                fill="black"
            />
            <path
                d="M188.282 161.889H181.282V168.889H188.282V161.889Z"
                fill="black"
            />
            <path
                d="M202.282 161.889H195.282V168.889H202.282V161.889Z"
                fill="black"
            />
            <path
                d="M209.282 161.889H202.282V168.889H209.282V161.889Z"
                fill="black"
            />
            <path
                d="M216.282 161.889H209.282V168.889H216.282V161.889Z"
                fill="black"
            />
            <path
                d="M48.2822 168.889H41.2822V175.889H48.2822V168.889Z"
                fill="black"
            />
            <path
                d="M90.2822 168.889H83.2822V175.889H90.2822V168.889Z"
                fill="black"
            />
            <path
                d="M111.282 168.889H104.282V175.889H111.282V168.889Z"
                fill="black"
            />
            <path
                d="M118.282 168.889H111.282V175.889H118.282V168.889Z"
                fill="black"
            />
            <path
                d="M132.282 168.889H125.282V175.889H132.282V168.889Z"
                fill="black"
            />
            <path
                d="M153.282 168.889H146.282V175.889H153.282V168.889Z"
                fill="black"
            />
            <path
                d="M160.282 168.889H153.282V175.889H160.282V168.889Z"
                fill="black"
            />
            <path
                d="M188.282 168.889H181.282V175.889H188.282V168.889Z"
                fill="black"
            />
            <path
                d="M209.282 168.889H202.282V175.889H209.282V168.889Z"
                fill="black"
            />
            <path
                d="M48.2822 175.889H41.2822V182.889H48.2822V175.889Z"
                fill="black"
            />
            <path
                d="M62.2822 175.889H55.2822V182.889H62.2822V175.889Z"
                fill="black"
            />
            <path
                d="M69.2822 175.889H62.2822V182.889H69.2822V175.889Z"
                fill="black"
            />
            <path
                d="M76.2822 175.889H69.2822V182.889H76.2822V175.889Z"
                fill="black"
            />
            <path
                d="M90.2822 175.889H83.2822V182.889H90.2822V175.889Z"
                fill="black"
            />
            <path
                d="M118.282 175.889H111.282V182.889H118.282V175.889Z"
                fill="black"
            />
            <path
                d="M125.282 175.889H118.282V182.889H125.282V175.889Z"
                fill="black"
            />
            <path
                d="M146.282 175.889H139.282V182.889H146.282V175.889Z"
                fill="black"
            />
            <path
                d="M160.282 175.889H153.282V182.889H160.282V175.889Z"
                fill="black"
            />
            <path
                d="M167.282 175.889H160.282V182.889H167.282V175.889Z"
                fill="black"
            />
            <path
                d="M174.282 175.889H167.282V182.889H174.282V175.889Z"
                fill="black"
            />
            <path
                d="M181.282 175.889H174.282V182.889H181.282V175.889Z"
                fill="black"
            />
            <path
                d="M188.282 175.889H181.282V182.889H188.282V175.889Z"
                fill="black"
            />
            <path
                d="M195.282 175.889H188.282V182.889H195.282V175.889Z"
                fill="black"
            />
            <path
                d="M216.282 175.889H209.282V182.889H216.282V175.889Z"
                fill="black"
            />
            <path
                d="M48.2822 182.889H41.2822V189.889H48.2822V182.889Z"
                fill="black"
            />
            <path
                d="M62.2822 182.889H55.2822V189.889H62.2822V182.889Z"
                fill="black"
            />
            <path
                d="M69.2822 182.889H62.2822V189.889H69.2822V182.889Z"
                fill="black"
            />
            <path
                d="M76.2822 182.889H69.2822V189.889H76.2822V182.889Z"
                fill="black"
            />
            <path
                d="M90.2822 182.889H83.2822V189.889H90.2822V182.889Z"
                fill="black"
            />
            <path
                d="M104.282 182.889H97.2822V189.889H104.282V182.889Z"
                fill="black"
            />
            <path
                d="M111.282 182.889H104.282V189.889H111.282V182.889Z"
                fill="black"
            />
            <path
                d="M118.282 182.889H111.282V189.889H118.282V182.889Z"
                fill="black"
            />
            <path
                d="M132.282 182.889H125.282V189.889H132.282V182.889Z"
                fill="black"
            />
            <path
                d="M139.282 182.889H132.282V189.889H139.282V182.889Z"
                fill="black"
            />
            <path
                d="M160.282 182.889H153.282V189.889H160.282V182.889Z"
                fill="black"
            />
            <path
                d="M174.282 182.889H167.282V189.889H174.282V182.889Z"
                fill="black"
            />
            <path
                d="M188.282 182.889H181.282V189.889H188.282V182.889Z"
                fill="black"
            />
            <path
                d="M195.282 182.889H188.282V189.889H195.282V182.889Z"
                fill="black"
            />
            <path
                d="M202.282 182.889H195.282V189.889H202.282V182.889Z"
                fill="black"
            />
            <path
                d="M209.282 182.889H202.282V189.889H209.282V182.889Z"
                fill="black"
            />
            <path
                d="M216.282 182.889H209.282V189.889H216.282V182.889Z"
                fill="black"
            />
            <path
                d="M48.2822 189.889H41.2822V196.889H48.2822V189.889Z"
                fill="black"
            />
            <path
                d="M62.2822 189.889H55.2822V196.889H62.2822V189.889Z"
                fill="black"
            />
            <path
                d="M69.2822 189.889H62.2822V196.889H69.2822V189.889Z"
                fill="black"
            />
            <path
                d="M76.2822 189.889H69.2822V196.889H76.2822V189.889Z"
                fill="black"
            />
            <path
                d="M90.2822 189.889H83.2822V196.889H90.2822V189.889Z"
                fill="black"
            />
            <path
                d="M104.282 189.889H97.2822V196.889H104.282V189.889Z"
                fill="black"
            />
            <path
                d="M125.282 189.889H118.282V196.889H125.282V189.889Z"
                fill="black"
            />
            <path
                d="M132.282 189.889H125.282V196.889H132.282V189.889Z"
                fill="black"
            />
            <path
                d="M139.282 189.889H132.282V196.889H139.282V189.889Z"
                fill="black"
            />
            <path
                d="M167.282 189.889H160.282V196.889H167.282V189.889Z"
                fill="black"
            />
            <path
                d="M174.282 189.889H167.282V196.889H174.282V189.889Z"
                fill="black"
            />
            <path
                d="M188.282 189.889H181.282V196.889H188.282V189.889Z"
                fill="black"
            />
            <path
                d="M202.282 189.889H195.282V196.889H202.282V189.889Z"
                fill="black"
            />
            <path
                d="M209.282 189.889H202.282V196.889H209.282V189.889Z"
                fill="black"
            />
            <path
                d="M48.2822 196.889H41.2822V203.889H48.2822V196.889Z"
                fill="black"
            />
            <path
                d="M90.2822 196.889H83.2822V203.889H90.2822V196.889Z"
                fill="black"
            />
            <path
                d="M104.282 196.889H97.2822V203.889H104.282V196.889Z"
                fill="black"
            />
            <path
                d="M118.282 196.889H111.282V203.889H118.282V196.889Z"
                fill="black"
            />
            <path
                d="M132.282 196.889H125.282V203.889H132.282V196.889Z"
                fill="black"
            />
            <path
                d="M139.282 196.889H132.282V203.889H139.282V196.889Z"
                fill="black"
            />
            <path
                d="M146.282 196.889H139.282V203.889H146.282V196.889Z"
                fill="black"
            />
            <path
                d="M153.282 196.889H146.282V203.889H153.282V196.889Z"
                fill="black"
            />
            <path
                d="M167.282 196.889H160.282V203.889H167.282V196.889Z"
                fill="black"
            />
            <path
                d="M174.282 196.889H167.282V203.889H174.282V196.889Z"
                fill="black"
            />
            <path
                d="M188.282 196.889H181.282V203.889H188.282V196.889Z"
                fill="black"
            />
            <path
                d="M202.282 196.889H195.282V203.889H202.282V196.889Z"
                fill="black"
            />
            <path
                d="M48.2822 203.889H41.2822V210.889H48.2822V203.889Z"
                fill="black"
            />
            <path
                d="M55.2822 203.889H48.2822V210.889H55.2822V203.889Z"
                fill="black"
            />
            <path
                d="M62.2822 203.889H55.2822V210.889H62.2822V203.889Z"
                fill="black"
            />
            <path
                d="M69.2822 203.889H62.2822V210.889H69.2822V203.889Z"
                fill="black"
            />
            <path
                d="M76.2822 203.889H69.2822V210.889H76.2822V203.889Z"
                fill="black"
            />
            <path
                d="M83.2822 203.889H76.2822V210.889H83.2822V203.889Z"
                fill="black"
            />
            <path
                d="M90.2822 203.889H83.2822V210.889H90.2822V203.889Z"
                fill="black"
            />
            <path
                d="M104.282 203.889H97.2822V210.889H104.282V203.889Z"
                fill="black"
            />
            <path
                d="M118.282 203.889H111.282V210.889H118.282V203.889Z"
                fill="black"
            />
            <path
                d="M125.282 203.889H118.282V210.889H125.282V203.889Z"
                fill="black"
            />
            <path
                d="M132.282 203.889H125.282V210.889H132.282V203.889Z"
                fill="black"
            />
            <path
                d="M139.282 203.889H132.282V210.889H139.282V203.889Z"
                fill="black"
            />
            <path
                d="M146.282 203.889H139.282V210.889H146.282V203.889Z"
                fill="black"
            />
            <path
                d="M181.282 203.889H174.282V210.889H181.282V203.889Z"
                fill="black"
            />
            <path
                d="M188.282 203.889H181.282V210.889H188.282V203.889Z"
                fill="black"
            />
            <path
                d="M195.282 203.889H188.282V210.889H195.282V203.889Z"
                fill="black"
            />
            <path
                d="M202.282 203.889H195.282V210.889H202.282V203.889Z"
                fill="black"
            />
            <path
                d="M209.282 203.889H202.282V210.889H209.282V203.889Z"
                fill="black"
            />
            <path
                d="M216.282 203.889H209.282V210.889H216.282V203.889Z"
                fill="black"
            />
        </g>

        <motion.path d="M89.5 2H2V75.5" stroke="#FFC000" strokeWidth="4" />
        <path
            d="M162 272.5L249.5 272.5L249.5 199"
            stroke="#FFC000"
            strokeWidth="4"
        />
        <path
            d="M33.9565 247.763C36.9459 247.763 38.3957 246.268 38.3957 244.519C38.3957 240.678 32.3123 242.008 32.3123 240.08C32.3123 239.422 32.8654 238.884 34.3003 238.884C35.227 238.884 36.2284 239.153 37.2 239.706L37.9473 237.868C36.9758 237.255 35.6305 236.941 34.3152 236.941C31.3408 236.941 29.9058 238.421 29.9058 240.2C29.9058 244.086 35.9893 242.741 35.9893 244.699C35.9893 245.341 35.4063 245.82 33.9714 245.82C32.7159 245.82 31.4005 245.371 30.5187 244.728L29.6966 246.552C30.6233 247.269 32.2974 247.763 33.9565 247.763ZM43.7721 247.703C45.4611 247.703 46.7914 246.956 47.3743 245.67L45.5657 244.684C45.1323 245.461 44.4896 245.79 43.7571 245.79C42.5763 245.79 41.6496 244.968 41.6496 243.563C41.6496 242.158 42.5763 241.336 43.7571 241.336C44.4896 241.336 45.1323 241.679 45.5657 242.442L47.3743 241.47C46.7914 240.155 45.4611 239.422 43.7721 239.422C41.1564 239.422 39.288 241.141 39.288 243.563C39.288 245.984 41.1564 247.703 43.7721 247.703ZM51.9604 239.422C50.6749 239.422 49.3745 239.766 48.4927 240.394L49.3297 242.023C49.9126 241.56 50.7945 241.276 51.6465 241.276C52.902 241.276 53.4999 241.859 53.4999 242.86H51.6465C49.1952 242.86 48.1937 243.847 48.1937 245.267C48.1937 246.657 49.3147 247.703 51.1981 247.703C52.3789 247.703 53.2159 247.314 53.6494 246.582V247.583H55.8316V242.995C55.8316 240.558 54.4117 239.422 51.9604 239.422ZM51.781 246.134C50.9589 246.134 50.4657 245.745 50.4657 245.162C50.4657 244.624 50.8094 244.22 51.9006 244.22H53.4999V245.042C53.2309 245.775 52.5582 246.134 51.781 246.134ZM62.8296 239.422C61.7385 239.422 60.7968 239.796 60.1691 240.484V239.542H57.942V247.583H60.2737V243.607C60.2737 242.128 61.0808 241.44 62.2018 241.44C63.2332 241.44 63.8311 242.038 63.8311 243.338V247.583H66.1628V242.98C66.1628 240.528 64.7279 239.422 62.8296 239.422ZM77.0683 245.551C76.8142 245.745 76.4704 245.85 76.1266 245.85C75.4988 245.85 75.1251 245.476 75.1251 244.788V241.515H77.128V239.721H75.1251V237.763H72.7934V239.721H71.5528V241.515H72.7934V244.818C72.7934 246.731 73.8995 247.703 75.7978 247.703C76.5152 247.703 77.2177 247.539 77.696 247.195L77.0683 245.551ZM82.5832 247.703C85.1392 247.703 86.9926 245.984 86.9926 243.563C86.9926 241.141 85.1392 239.422 82.5832 239.422C80.0273 239.422 78.1589 241.141 78.1589 243.563C78.1589 245.984 80.0273 247.703 82.5832 247.703ZM82.5832 245.79C81.4174 245.79 80.5205 244.953 80.5205 243.563C80.5205 242.173 81.4174 241.336 82.5832 241.336C83.7491 241.336 84.631 242.173 84.631 243.563C84.631 244.953 83.7491 245.79 82.5832 245.79ZM96.6704 247.703C98.3594 247.703 99.6897 246.956 100.273 245.67L98.464 244.684C98.0306 245.461 97.3879 245.79 96.6555 245.79C95.4746 245.79 94.5479 244.968 94.5479 243.563C94.5479 242.158 95.4746 241.336 96.6555 241.336C97.3879 241.336 98.0306 241.679 98.464 242.442L100.273 241.47C99.6897 240.155 98.3594 239.422 96.6704 239.422C94.0547 239.422 92.1863 241.141 92.1863 243.563C92.1863 245.984 94.0547 247.703 96.6704 247.703ZM105.339 247.703C107.895 247.703 109.749 245.984 109.749 243.563C109.749 241.141 107.895 239.422 105.339 239.422C102.783 239.422 100.915 241.141 100.915 243.563C100.915 245.984 102.783 247.703 105.339 247.703ZM105.339 245.79C104.174 245.79 103.277 244.953 103.277 243.563C103.277 242.173 104.174 241.336 105.339 241.336C106.505 241.336 107.387 242.173 107.387 243.563C107.387 244.953 106.505 245.79 105.339 245.79ZM116.06 239.422C114.984 239.422 114.117 239.766 113.534 240.469V239.542H111.307V250.483H113.639V246.731C114.237 247.389 115.059 247.703 116.06 247.703C118.317 247.703 120.066 246.089 120.066 243.563C120.066 241.037 118.317 239.422 116.06 239.422ZM115.657 245.79C114.491 245.79 113.609 244.953 113.609 243.563C113.609 242.173 114.491 241.336 115.657 241.336C116.823 241.336 117.705 242.173 117.705 243.563C117.705 244.953 116.823 245.79 115.657 245.79ZM127.148 239.542L124.876 244.998L122.619 239.542H120.212L123.695 247.643L123.665 247.718C123.351 248.435 122.993 248.719 122.35 248.719C121.887 248.719 121.393 248.525 121.035 248.211L120.183 249.87C120.706 250.334 121.603 250.603 122.425 250.603C123.874 250.603 124.981 250.02 125.758 248.077L129.39 239.542H127.148ZM138.461 247.703C140.15 247.703 141.48 246.956 142.063 245.67L140.254 244.684C139.821 245.461 139.178 245.79 138.446 245.79C137.265 245.79 136.338 244.968 136.338 243.563C136.338 242.158 137.265 241.336 138.446 241.336C139.178 241.336 139.821 241.679 140.254 242.442L142.063 241.47C141.48 240.155 140.15 239.422 138.461 239.422C135.845 239.422 133.977 241.141 133.977 243.563C133.977 245.984 135.845 247.703 138.461 247.703ZM147.13 247.703C149.686 247.703 151.539 245.984 151.539 243.563C151.539 241.141 149.686 239.422 147.13 239.422C144.574 239.422 142.705 241.141 142.705 243.563C142.705 245.984 144.574 247.703 147.13 247.703ZM147.13 245.79C145.964 245.79 145.067 244.953 145.067 243.563C145.067 242.173 145.964 241.336 147.13 241.336C148.296 241.336 149.177 242.173 149.177 243.563C149.177 244.953 148.296 245.79 147.13 245.79ZM157.985 239.422C156.894 239.422 155.952 239.796 155.325 240.484V239.542H153.098V247.583H155.429V243.607C155.429 242.128 156.236 241.44 157.357 241.44C158.389 241.44 158.987 242.038 158.987 243.338V247.583H161.318V242.98C161.318 240.528 159.884 239.422 157.985 239.422ZM167.991 245.551C167.737 245.745 167.393 245.85 167.049 245.85C166.421 245.85 166.048 245.476 166.048 244.788V241.515H168.051V239.721H166.048V237.763H163.716V239.721H162.475V241.515H163.716V244.818C163.716 246.731 164.822 247.703 166.72 247.703C167.438 247.703 168.14 247.539 168.619 247.195L167.991 245.551ZM173.171 239.422C171.886 239.422 170.585 239.766 169.703 240.394L170.54 242.023C171.123 241.56 172.005 241.276 172.857 241.276C174.113 241.276 174.711 241.859 174.711 242.86H172.857C170.406 242.86 169.404 243.847 169.404 245.267C169.404 246.657 170.525 247.703 172.409 247.703C173.59 247.703 174.427 247.314 174.86 246.582V247.583H177.042V242.995C177.042 240.558 175.622 239.422 173.171 239.422ZM172.992 246.134C172.17 246.134 171.676 245.745 171.676 245.162C171.676 244.624 172.02 244.22 173.111 244.22H174.711V245.042C174.442 245.775 173.769 246.134 172.992 246.134ZM183.126 247.703C184.815 247.703 186.146 246.956 186.729 245.67L184.92 244.684C184.487 245.461 183.844 245.79 183.111 245.79C181.931 245.79 181.004 244.968 181.004 243.563C181.004 242.158 181.931 241.336 183.111 241.336C183.844 241.336 184.487 241.679 184.92 242.442L186.729 241.47C186.146 240.155 184.815 239.422 183.126 239.422C180.511 239.422 178.642 241.141 178.642 243.563C178.642 245.984 180.511 247.703 183.126 247.703ZM192.747 245.551C192.493 245.745 192.149 245.85 191.805 245.85C191.177 245.85 190.804 245.476 190.804 244.788V241.515H192.807V239.721H190.804V237.763H188.472V239.721H187.231V241.515H188.472V244.818C188.472 246.731 189.578 247.703 191.476 247.703C192.194 247.703 192.896 247.539 193.375 247.195L192.747 245.551ZM200.082 238.421C200.949 238.421 201.532 237.853 201.532 237.076C201.532 236.358 200.949 235.82 200.082 235.82C199.215 235.82 198.633 236.388 198.633 237.12C198.633 237.853 199.215 238.421 200.082 238.421ZM198.917 247.583H201.248V239.542H198.917V247.583ZM208.3 239.422C207.209 239.422 206.267 239.796 205.639 240.484V239.542H203.412V247.583H205.744V243.607C205.744 242.128 206.551 241.44 207.672 241.44C208.704 241.44 209.301 242.038 209.301 243.338V247.583H211.633V242.98C211.633 240.528 210.198 239.422 208.3 239.422ZM216.303 239.377C216.303 238.585 216.676 238.212 217.364 238.212C217.723 238.212 218.051 238.316 218.306 238.496L218.918 236.807C218.485 236.508 217.797 236.373 217.14 236.373C215.137 236.373 214.031 237.554 214.031 239.363V239.721H212.79V241.515H214.031V247.583H216.362V241.515H218.365V239.721H216.303V239.377ZM223.251 247.703C225.807 247.703 227.661 245.984 227.661 243.563C227.661 241.141 225.807 239.422 223.251 239.422C220.695 239.422 218.827 241.141 218.827 243.563C218.827 245.984 220.695 247.703 223.251 247.703ZM223.251 245.79C222.085 245.79 221.189 244.953 221.189 243.563C221.189 242.173 222.085 241.336 223.251 241.336C224.417 241.336 225.299 242.173 225.299 243.563C225.299 244.953 224.417 245.79 223.251 245.79Z"
            fill="white"
        />
        <defs>
            <clipPath id="clip0">
                <rect
                    width="200"
                    height="200"
                    fill="white"
                    transform="translate(29.2822 23.8893)"
                />
            </clipPath>
        </defs>
    </svg>
);
