import React from "react";
import "./HeroSection.scss";
import heroImage from "../../images/Hero-Image.png";
import heroImage1 from "../../images/heroImage1.png";
import { IoChevronForwardSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function HeroSection({ heroColor, customButton }) {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className={`hero-info ${heroColor} ml-0`}>
                            <h1 className="h1">
                                Experience based solution to your tech problems
                                is just a contact away
                            </h1>
                            <p>
                                Team of experts with versatile background at
                                your service
                            </p>
                            <NavLink
                                to="/contact"
                                className={`custom-button custom-btn-lg ${customButton}`}
                            >
                                Learn More <IoChevronForwardSharp />
                            </NavLink>
                            {/* <Button
                                className={`custom-button custom-btn-lg ${customButton}`}
                                size="sm"
                            >
                                Learn More <IoChevronForwardSharp />
                            </Button> */}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={heroImage}
                alt="hero_image"
                className="img-fluid hero-image"
            />
            {/* <div className="hero-image">
                <img
                    src={heroImage}
                    alt="hero_image"
                    className="img-fluid hero-image1"
                />
                <img
                    src={heroImage1}
                    alt=""
                    className="img-fluid hero-image2"
                />
            </div> */}
            {/* <div className="hero-img">
            </div> */}
        </section>
    );
}

export default HeroSection;
