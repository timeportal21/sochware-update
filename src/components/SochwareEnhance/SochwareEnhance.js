import React from "react";
import "./SochwareEnhance.scss";
import medalIcon from "../../images/award.svg";
import eventIcon from "../../images/events.svg";
import clientIcon from "../../images/clients.svg";
import mediaIcon from "../../images/media.svg";
import staffIcon from "../../images/staff.svg";
import loremIcon from "../../images/lorem_orange.svg";
import ipsumIcon from "../../images/Ipsum.svg";
import trainingIcon from "../../images/training.svg";

function SochwareEnhance({ heroColor }) {
    return (
        <section className="enhance-section">
            <div className="enhance-title">
                <h1>sochware in numbers </h1>
            </div>
            <div className="enhance-content">
                <div className="row">
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={medalIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>3 Awards</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={eventIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>25+ Event</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={clientIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>21 Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={mediaIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>13 Media</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={staffIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>12 Staff</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={staffIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>12 Staff</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={staffIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>12 Staff</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-md-6 col-lg-4">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={staffIcon} alt="" />
                            </div>
                            <div className={`number-show ${heroColor}`}>
                                <p>12 Staff</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SochwareEnhance;
