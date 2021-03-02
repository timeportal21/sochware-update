import React, { useState } from "react";
import "./SochwareEnhance.scss";
import medalIcon from "../../images/award.svg";
import eventIcon from "../../images/events.svg";
import clientIcon from "../../images/clients.svg";
import mediaIcon from "../../images/media.svg";
import staffIcon from "../../images/staff.svg";
import loremIcon from "../../images/lorem_orange.svg";
import ipsumIcon from "../../images/Ipsum.svg";
import trainingIcon from "../../images/training.svg";
import AnimatedNumber from "react-animated-number";

function SochwareEnhance({ heroColor }) {
    const [numberCount, setNumberCount] = useState([
        { title: "Awards", icon: medalIcon, number: 50 },
        { title: "Event", icon: eventIcon, number: 25 },
        { title: "Client", icon: clientIcon, number: 21 },
        { title: "Media", icon: medalIcon, number: 13 },
        { title: "Staff", icon: staffIcon, number: 12 },
        { title: "Awards", icon: loremIcon, number: 12 },
        { title: "Awards", icon: ipsumIcon, number: 12 },
        { title: "Trainees", icon: trainingIcon, number: 100 },
    ]);
    return (
        <section className="enhance-section">
            <div className={`enhance-title ${heroColor}`}>
                <h1>sochware in numbers </h1>
            </div>
            <div className="enhance-content">
                <div className="row">
                    {numberCount.map((data, i) => (
                        <div
                            className="col-12 col-xl-3 col-md-6 col-lg-4"
                            key={i}
                        >
                            <div className="group-number">
                                <div className="number-icon">
                                    <img src={data.icon} alt="" />
                                </div>
                                <div className={`number-show ${heroColor}`}>
                                    <p>
                                        <AnimatedNumber
                                            value={50}
                                            duration={2000}
                                            stepPrecision={0}
                                        />{" "}
                                        + {data.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SochwareEnhance;
