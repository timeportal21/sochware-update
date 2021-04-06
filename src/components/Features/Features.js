import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Features.scss";

function Features({ heroColor, customButton, borderButton }) {
    const [featureContent, setFeatureContent] = useState([
        {
            title: "Agile",
            image: agileSvg,
            detail:
                "We work with agility to make sure the development process is flexible to fit the adaptive environment.",
        },
        {
            title: "Efficient",
            image: efficientSvg,
            detail:
                "We make sure to develiver what we have promised for with no compromise to  efficiency.",
        },
        {
            title: "Professional",
            image: professionalSvg,
            detail:
                "We together make team of experts with experience over 7 years in the field to cater you with professional service.",
        },
        {
            title: "Empirical",
            image: empiricalSvg,
            detail:
                "Holding experience of working together with 25+ clients, we assure you experience based service.",
        },
    ]);

    return (
        <section className="our-feature">
            <div className={`feature-title ${heroColor}`}>
                <h1>OUR FEATURES</h1>
                <div className="feature-button">
                    <Button
                        className={`custom-button custom-btn-sm mr-2 ${customButton} `}
                        size="sm"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
            <div className="container">
                <div className="feature-content">
                    <div className="row">
                        {featureContent.map((data, i) => (
                            <div
                                className="col-12 col-xl-3 col-md-6 col-lg-4"
                                key={i}
                            >
                                <div className={`group-feature ${heroColor}`}>
                                    <div className="group-image">
                                        {data.image}
                                        {/* <img
                                            src={data.image}
                                            alt=""
                                            className="img-fluid"
                                        /> */}
                                    </div>
                                    <div className={`group-title`}>
                                        <h2>{data.title}</h2>
                                        <p>{data.detail}</p>
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

export default Features;

const parentVariants = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
        },
    },
};
const childVariants = {
    initial: {
        fill: "rgba(0,0,0,0)",
        opacity: 0,
        pathLength: 0,
    },
    final: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
        },
    },
};
const signVariants = {
    initial: {
        fill: "rgba(255, 192, 0,0)",
        pathLength: 0,
    },
    final: {
        fill: "rgba(255, 192, 0,1)",
        pathLength: [0, 1, 0],
        transition: {
            duration: 1.5,
            fill: {
                delay: 1.6,
            },
        },
    },
};

const agileSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="67"
        height="67"
        viewBox="0 0 67 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            d="M39.5504 33.8896L47.3143 26.1257L40.5687 19.3801L32.8048 27.1439L39.5504 33.8896ZM42.8278 16.4209L50.2735 23.8666C51.5144 25.0439 51.5144 27.1121 50.2735 28.3531L13.1407 65.4859C11.8997 66.7268 9.83149 66.7268 8.65419 65.4859L1.20854 58.0402C-0.0324033 56.8629 -0.0324033 54.7947 1.20854 53.5537L38.3413 16.4209C39.5823 15.18 41.6505 15.18 42.8278 16.4209Z"
            fill="#071E40"
        />
        <motion.path
            variants={signVariants}
            d="M14.6451 14.6317L21.0531 11.0432L27.4612 14.6317C27.9015 14.8783 28.3883 14.3915 28.1417 13.9512L24.5532 7.54313L28.1417 1.13509C28.3883 0.69479 27.9015 0.20797 27.4612 0.45454L21.0531 4.04304L14.6451 0.454539C14.2048 0.207969 13.718 0.69479 13.9645 1.13509L17.5531 7.54313L13.9645 13.9512C13.718 14.3915 14.2048 14.8783 14.6451 14.6317Z"
            stroke="#FFC000"
        />
        <motion.path
            variants={signVariants}
            d="M52.7429 14.6317L59.1509 11.0432L65.559 14.6317C65.9993 14.8783 66.4861 14.3915 66.2395 13.9512L62.651 7.54313L66.2395 1.13509C66.4861 0.69479 65.9993 0.20797 65.559 0.45454L59.1509 4.04304L52.7429 0.454539C52.3026 0.207969 51.8158 0.69479 52.0623 1.13509L55.6508 7.54313L52.0623 13.9512C51.8158 14.3915 52.3026 14.8783 52.7429 14.6317Z"
            stroke="#FFC000"
        />
        <motion.path
            variants={signVariants}
            d="M52.7429 52.6986L59.1509 49.1101L65.559 52.6986C65.9993 52.9452 66.4861 52.4584 66.2395 52.0181L62.651 45.61L66.2395 39.202C66.4861 38.7617 65.9993 38.2749 65.559 38.5214L59.1509 42.1099L52.7429 38.5214C52.3026 38.2749 51.8158 38.7617 52.0623 39.202L55.6508 45.61L52.0623 52.0181C51.8158 52.4584 52.3026 52.9452 52.7429 52.6986Z"
            stroke="#FFC000"
        />
    </motion.svg>
);

const efficientSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="50"
        height="71"
        viewBox="0 0 50 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M6.87917 68.381V62.3569V57.3359C6.8886 55.6117 7.19385 53.902 7.78163 52.2811C7.81416 52.1936 7.84856 52.1125 7.88862 52.029C8.37638 50.6986 9.0501 49.444 9.88972 48.3026L14.1092 42.6786C15.2781 41.1115 15.9113 39.2097 15.9153 37.2546V35.178V34.2131C15.9083 31.8183 14.9577 29.5229 13.2695 27.8244L11.2899 25.8448C8.98985 23.5323 7.51235 20.5289 7.08416 17.2955C7.08248 17.2536 7.06007 17.2186 7.06007 17.1764L7.06856 17.1349C6.96384 16.4936 6.90059 15.8461 6.8792 15.1967V8.14028V2.11621M6.87917 68.381H43.0236M6.87917 68.381H2.2229M43.0236 68.381V62.3569V57.3359C43.0142 55.6122 42.709 53.9029 42.1213 52.2825C42.0884 52.194 42.0538 52.1121 42.0132 52.0278C41.5254 50.6978 40.8514 49.4436 40.0116 48.3027L35.795 42.6787C34.6251 41.112 33.9912 39.21 33.9875 37.2547V35.178V34.2131C33.9944 31.8183 34.945 29.5227 36.6333 27.8243L38.6129 25.8447C40.9129 23.5322 42.3904 20.5287 42.8186 17.2954C42.8202 17.2535 42.8427 17.2185 42.8427 17.1762L42.8343 17.1349C42.939 16.4936 43.0022 15.8461 43.0236 15.1967V8.14028V2.11621M43.0236 68.381H47.6828M6.8792 2.11621H43.0236M6.8792 2.11621H2.2229M43.0236 2.11621H47.6828"
            stroke="#071E40"
            strokeWidth="3.5"
            strokeLinecap="round"
        />

        <motion.path
            variants={childVariants}
            d="M33.0016 35.2524H16.9043"
            stroke="#FFC000"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M40.4025 21.6064H9.50317"
            stroke="#FFC000"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M40.4025 50.2085H9.50317"
            stroke="#FFC000"
            strokeWidth="3.5"
            strokeLinecap="round"
        />
    </motion.svg>
);

const professionalSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="63"
        height="64"
        viewBox="0 0 63 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M46.466 14.1543H58.363C60.1475 14.1543 61.3372 15.344 61.3372 17.1286V29.0255C61.3372 34.0818 57.4707 37.9483 52.4145 37.9483H10.775C5.71882 37.9483 1.85229 34.0818 1.85229 29.0255V17.1286C1.85229 15.344 3.04199 14.1543 4.82654 14.1543H16.7235M46.466 14.1543V11.1801C46.466 6.12384 42.5995 2.25732 37.5433 2.25732H25.6463C20.59 2.25732 16.7235 6.12384 16.7235 11.1801V14.1543M46.466 14.1543H40.5175H22.672H16.7235M46.466 42.4097H52.4145C54.4965 42.4097 56.5784 41.8148 58.363 40.9225V52.8195C58.363 57.8757 54.4965 61.7423 49.4402 61.7423H13.7493C8.69306 61.7423 4.82654 57.8757 4.82654 52.8195V40.9225C6.61109 41.8148 8.69306 42.4097 10.775 42.4097H16.7235H19.6978H22.672H40.5175H43.4917H46.466Z"
            stroke="#071E40"
            strokeWidth="3"
        />
        <motion.path
            variants={childVariants}
            d="M43.5659 43.0669V48.9177"
            stroke="#FFC000"
            strokeWidth="4"
        />
        <motion.path
            variants={childVariants}
            d="M42.5078 31.9995H51.1538"
            stroke="#FFC000"
            strokeWidth="3"
        />
        <motion.path
            variants={childVariants}
            d="M19.7284 43.0669V48.9177"
            stroke="#FFC000"
            strokeWidth="3"
        />
    </motion.svg>
);

const empiricalSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="51"
        height="50"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M16.2682 1.94336H9.35115C7.51663 1.94336 5.75725 2.67212 4.46005 3.96932C3.16284 5.26653 2.43408 7.02591 2.43408 8.86043V41.1401C2.43408 42.9746 3.16284 44.734 4.46005 46.0312C5.75725 47.3284 7.51663 48.0572 9.35115 48.0572H41.6308C43.4653 48.0572 45.2247 47.3284 46.5219 46.0312C47.8191 44.734 48.5479 42.9746 48.5479 41.1401V8.86043C48.5479 7.02591 47.8191 5.26653 46.5219 3.96932C45.2247 2.67212 43.4653 1.94336 41.6308 1.94336H34.7137M16.2682 1.94336V6.55474V18.0832C16.2707 18.4856 16.3783 18.8803 16.5806 19.2282C16.7828 19.576 17.0726 19.8649 17.4211 20.0661C17.7716 20.2685 18.1692 20.375 18.5739 20.375C18.9786 20.375 19.3763 20.2685 19.7268 20.0661L25.491 16.8612L31.2783 20.0891C31.6229 20.2844 32.012 20.3877 32.4081 20.3889C33.0196 20.3889 33.606 20.146 34.0384 19.7136C34.4708 19.2812 34.7137 18.6947 34.7137 18.0832V6.55474V1.94336M16.2682 1.94336H34.7137"
            stroke="#071E40"
            strokeWidth="3"
        />
        <motion.path
            variants={signVariants}
            d="M15.7438 34.6954H12.0971C11.6135 34.6954 11.1498 34.4946 10.8078 34.1372C10.4659 33.7798 10.2738 33.2951 10.2738 32.7896C10.2738 32.2841 10.4659 31.7994 10.8078 31.442C11.1498 31.0846 11.6135 30.8838 12.0971 30.8838H15.7438C16.2274 30.8838 16.6912 31.0846 17.0331 31.442C17.375 31.7994 17.5672 32.2841 17.5672 32.7896C17.5672 33.2951 17.375 33.7798 17.0331 34.1372C16.6912 34.4946 16.2274 34.6954 15.7438 34.6954Z"
            stroke="#FFC000"
        />
        <motion.path
            variants={signVariants}
            d="M12.1796 37.2642H23.6145C24.1199 37.2642 24.6047 37.4649 24.9621 37.8224C25.3195 38.1798 25.5203 38.6645 25.5203 39.17C25.5203 39.6754 25.3195 40.1602 24.9621 40.5176C24.6047 40.875 24.1199 41.0758 23.6145 41.0758H12.1796C11.6741 41.0758 11.1894 40.875 10.832 40.5176C10.4746 40.1602 10.2738 39.6754 10.2738 39.17C10.2738 38.6645 10.4746 38.1798 10.832 37.8224C11.1894 37.4649 11.6741 37.2642 12.1796 37.2642Z"
            stroke="#FFC000"
        />
    </motion.svg>
);
