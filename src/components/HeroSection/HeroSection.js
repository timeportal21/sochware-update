import React from "react";
import "./HeroSection.scss";
import heroImage from "../../images/Hero-Image.png";
import { Button } from "react-bootstrap";
import { IoChevronForwardSharp } from "react-icons/io5";

function HeroSection({ heroColor }) {
    return (
        <section className="hero-section">
            <div className="d-flex justify-content-between">
                <div className={`hero-info ${heroColor}`}>
                    <h1 className="h1">
                        The solution to your tech problems is just a contact
                        away
                    </h1>
                    <p>
                        We’re here to provide you with the best there is to
                        offer.
                    </p>
                    <Button className="custom-button">
                        Learn More <IoChevronForwardSharp />
                    </Button>
                </div>
                <div className="hero-img">
                    <img
                        src={heroImage}
                        alt="hero_image"
                        className="img-fluid"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
