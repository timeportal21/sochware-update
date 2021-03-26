import React, { useState } from "react";
import "./_worksection.scss";
import fastDamaro from "../../images/Group5.svg";

function WorkSection({ heroColor }) {
    const [workContent, setWorkContent] = useState([
        {
            content:
                "Contact Us using any medium that you are comfortable with (facebook, email, phone)",
            icon: fastDamaro,
        },
        {
            content:
                "Contact Us using any medium that you are comfortable with (facebook, email, phone)",
            icon: fastDamaro,
        },
        {
            content:
                "Contact Us using any medium that you are comfortable with (facebook, email, phone)",
            icon: fastDamaro,
        },
        {
            content:
                "Contact Us using any medium that you are comfortable with (facebook, email, phone)",
            icon: fastDamaro,
        },
    ]);
    return (
        <section className={`working-section ${heroColor}`}>
            <div className="working-title text-center">
                <h1>HOW WE WORK</h1>
            </div>
            <div className="container">
                <div className="work-content">
                    <div className="row">
                        {workContent.map((data, i) => (
                            <div
                                className="col-xs-12 col-xl-3 col-md-6 col-lg-4"
                                key={i}
                            >
                                <div className="group-feature">
                                    <div className="group-image">
                                        <img
                                            src={data.icon}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className={`group-title ${heroColor}`}>
                                        <p>{data.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
