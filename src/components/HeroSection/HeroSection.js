import React from "react";
import "./HeroSection.scss";
import heroImage from "../../images/Hero-Image.png";
import { Button } from "react-bootstrap";
import { IoChevronForwardSharp } from "react-icons/io5";

function HeroSection({ heroColor }) {
    return (
        // <div className="hero-section pt-5">
        //     <div className="container">
        //         <div className="row justify-content-between">
        //             <div className="col-md-4">
        //                 <h1 className="h1">
        //                     The solution to your tech problems is just a contact
        //                     away
        //                 </h1>
        //                 <p>
        //                     We’re here to provide you with the best there is to
        //                     offer.
        //                 </p>
        //                 <button>Read more</button>
        //             </div>
        //             <div className="col-md-4">
        //                 <div className="hero-image">
        //                     <img src={heroImage} alt="" className='img-fluid' />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className={`hero-info ${heroColor} ml-0`}>
                            <h1 className="h1">
                                The solution to your tech problems is just a
                                contact away
                            </h1>
                            <p>
                                We’re here to provide you with the best there is
                                to offer.
                            </p>
                            <Button className="custom-button" size="sm">
                                Learn More <IoChevronForwardSharp />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
                <img src={heroImage} alt="hero_image" className="img-fluid hero-image" />
            {/* <div className="hero-img">
            </div> */}
        </section>
    );
}

export default HeroSection;
