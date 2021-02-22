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

function SochwareEnhance() {
    return (
        <section className="enhance-section dark">
            <div className="enhance-title">
                <h1>sochware in numbers </h1>
            </div>
            <div className="enhance-content">
                <div className="row">
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={medalIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>3 Awards</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={eventIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>25+ Event</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={clientIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>21 Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={mediaIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>13 Media</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={staffIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>12 Staff</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={loremIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>10 Lorem</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={ipsumIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>30 Ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="group-number">
                            <div className="number-icon">
                                <img src={trainingIcon} alt="" />
                            </div>
                            <div className="number-show">
                                <p>100 + Training</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SochwareEnhance;
