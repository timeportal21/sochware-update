import React, { useState } from "react";
import "./_worksection.scss";
import { motion } from "framer-motion";

function WorkSection({ heroColor }) {
    const [workContent, setWorkContent] = useState([
        {
            content:
                "Your requirement is our priority. We initially design the system, focused on usability and user experience based upon your need.",
            icon: designSvg,
        },
        {
            content:
                "System development with suitable technology, based upon your need falls under our responsibility. We choose best platform for your business.",
            icon: developSvg,
        },
        {
            content:
                "Quality of technolgoy we build always been one of our key advocacy. We assure you well engineered, secure, quality tested system.",
            icon: qualitySvg,
        },
        {
            content:
                "We believe, Support is the key to any business need and we will always be there to hold your technical back, even after completion of project.",
            icon: coffeeSvg,
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
                                className="col-xs-12 col-xl-3 col-md-6 col-lg-4 work-card"
                                key={i}
                            >
                                <div className="group-feature">
                                    <div className="group-image">
                                        {data.icon}
                                    </div>
                                    <div className={`work-title ${heroColor}`}>
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

const parentVariants = {
    initial: {
        // x: 1000,
        opacity: 0,
    },
    final: {
        // x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
            // delay: 0.2,
            // duration: 0.6,
            // when: "afterChild    ren"
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
        // x: 0,
        opacity: 1,
        // fill: "#2ACAE0",
        pathLength: 1,
        transition: {
            // duration: 20,
            // pathLength: {
            //     // delay: 1,
            //     duration: 1,
            // },
            duration: 1,
            // fill: {
            //     delay: 1.7,
            // },
        },
    },
};

const fillVariants = {
    initial: {
        fill: "rgba(7, 30, 64,0)",
        opacity: 0,
        pathLength: 0,
    },
    final: {
        // x: 0,
        opacity: 1,
        fill: "rgba(7, 30, 64,1)",
        pathLength: 1,
        transition: {
            // duration: 20,
            // pathLength: {
            //     // delay: 1,
            //     duration: 1,
            // },
            duration: 1,
            // fill: {
            //     delay: 1.7,
            // },
        },
    },
};

const signVariants = {
    initial: {
        fill: "rgba(255, 192, 0,0)",
        pathLength: 0,
    },
    final: {
        // x: 0,
        // opacity: 1,
        fill: "rgba(255, 192, 0,1)",
        pathLength: [0,1,0],
        transition: {
            // duration: 20,
            // pathLength: {
            //     duration: 1,
            // },
            duration: 1.5,
            fill: {
                delay: 1.6,
            },
        },
    },
};

const developSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="64"
        height="62"
    >
        <motion.path
            variants={childVariants}
            d="M14.872 5.30225L3.22887 16.9454C2.95604 17.216 2.7395 17.5379 2.59172 17.8926C2.44394 18.2474 2.36786 18.6278 2.36786 19.0121C2.36786 19.3963 2.44394 19.7768 2.59172 20.1315C2.7395 20.4862 2.95604 20.8081 3.22887 21.0787L14.872 32.7219"
            stroke="#071E40"
            strokeWidth="3"
            strokeLinecap="round"
            // strokeLinejoin="bevel"
        />
        <motion.path
            variants={childVariants}
            d="M42.6523 5.30176L54.2916 16.9449C54.5643 17.2155 54.7808 17.5374 54.9285 17.8922C55.0762 18.2469 55.1523 18.6273 55.1523 19.0116C55.1523 19.3958 55.0762 19.7763 54.9285 20.131C54.7808 20.4857 54.5643 20.8076 54.2916 21.0782L42.6523 32.7214"
            stroke="#071E40"
            strokeWidth="3"
            strokeLinecap="round"
            // strokeLinejoin="bevel"
        />
        <motion.path
            variants={childVariants}
            d="M32.9845 2.18652L24.5399 33.7024"
            stroke="#FFC000"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </motion.svg>
);

const designSvg = (
    <motion.svg
        initial="initial"
        animate="final"
        variants={parentVariants}
        width="48"
        height="62"
        viewBox="0 0 48 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M25.6687 39.0421H23.3159C21.8962 39.0421 20.5347 39.6061 19.5308 40.6099C18.5269 41.6138 17.963 42.9753 17.963 44.395V55.1008C17.963 56.5204 18.5269 57.882 19.5308 58.8858C20.5347 59.8897 21.8962 60.4537 23.3159 60.4537H28.6687C30.0884 60.4537 31.4499 59.8897 32.4538 58.8858C33.4577 57.882 34.0216 56.5204 34.0216 55.1008V44.395C34.0216 42.9753 33.4577 41.6138 32.4538 40.6099C31.4499 39.6061 30.0884 39.0421 28.6687 39.0421H25.6687ZM25.6687 39.0421V36.3657C25.6687 34.2361 24.8228 32.1939 23.317 30.6881C21.8112 29.1823 19.7689 28.3363 17.6394 28.3363H4.58074C3.8709 28.3363 3.19014 28.0543 2.68821 27.5524C2.18628 27.0505 1.9043 26.3697 1.9043 25.6599V15.6305C1.9043 14.9207 2.18628 14.2399 2.68821 13.738C3.19014 13.2361 3.8709 12.9541 4.58074 12.9541H7.96321"
            stroke="#071E40"
            strokeWidth="3"
            strokeLinecap="round"
        />
        <motion.path
            variants={signVariants}
            d="M16.1564 2.24829H37.568C39.6975 2.24829 41.7398 3.09424 43.2456 4.60003C44.7514 6.10582 45.5973 8.14811 45.5973 10.2776V15.6305C45.5973 17.76 44.7514 19.8023 43.2456 21.3081C41.7398 22.8139 39.6975 23.6598 37.568 23.6598H16.1564C14.0269 23.6598 11.9846 22.8139 10.4788 21.3081C8.97302 19.8023 8.12708 17.76 8.12708 15.6305V13.6305V10.2776C8.12708 8.14811 8.97302 6.10582 10.4788 4.60003C11.9846 3.09424 14.0269 2.24829 16.1564 2.24829Z"
            stroke="#FFC820"
            strokeWidth="3"
        />
    </motion.svg>
);

const qualitySvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="64"
        height="62"
    >
        <motion.path
            variants={childVariants}
            d="M16.2683 1.94336H9.35118C7.51666 1.94336 5.75728 2.67212 4.46008 3.96932C3.16287 5.26653 2.43411 7.02591 2.43411 8.86043V41.1401C2.43411 42.9746 3.16287 44.734 4.46008 46.0312C5.75728 47.3284 7.51666 48.0572 9.35118 48.0572H41.6309C43.4654 48.0572 45.2248 47.3284 46.522 46.0312C47.8192 44.734 48.5479 42.9746 48.5479 41.1401V8.86043C48.5479 7.02591 47.8192 5.26653 46.522 3.96932C45.2248 2.67212 43.4654 1.94336 41.6309 1.94336H34.7138M16.2683 1.94336V6.55474V18.0832C16.2707 18.4856 16.3784 18.8803 16.5806 19.2282C16.7829 19.576 17.0726 19.8649 17.4211 20.0661C17.7716 20.2685 18.1692 20.375 18.5739 20.375C18.9787 20.375 19.3763 20.2685 19.7268 20.0661L25.491 16.8612L31.2783 20.0891C31.6229 20.2844 32.012 20.3877 32.4081 20.3889C33.0196 20.3889 33.6061 20.146 34.0385 19.7136C34.4709 19.2812 34.7138 18.6947 34.7138 18.0832V6.55474V1.94336M16.2683 1.94336H34.7138"
            stroke="#071E40"
            strokeWidth="3"
        />
        <motion.path
            variants={signVariants}
            d="M15.7438 34.6949H12.0971C11.6136 34.6949 11.1498 34.4941 10.8078 34.1367C10.4659 33.7793 10.2738 33.2946 10.2738 32.7891C10.2738 32.2837 10.4659 31.7989 10.8078 31.4415C11.1498 31.0841 11.6136 30.8833 12.0971 30.8833H15.7438C16.2274 30.8833 16.6912 31.0841 17.0331 31.4415C17.3751 31.7989 17.5672 32.2837 17.5672 32.7891C17.5672 33.2946 17.3751 33.7793 17.0331 34.1367C16.6912 34.4941 16.2274 34.6949 15.7438 34.6949Z"
            stroke="#FFC000"
        />
        <motion.path
            variants={signVariants}
            d="M12.1796 37.9814H23.6145C24.1199 37.9814 24.6047 38.1822 24.9621 38.5396C25.3195 38.897 25.5203 39.3818 25.5203 39.8873C25.5203 40.3927 25.3195 40.8775 24.9621 41.2349C24.6047 41.5923 24.1199 41.7931 23.6145 41.7931H12.1796C11.6742 41.7931 11.1894 41.5923 10.832 41.2349C10.4746 40.8775 10.2738 40.3927 10.2738 39.8873C10.2738 39.3818 10.4746 38.897 10.832 38.5396C11.1894 38.1822 11.6742 37.9814 12.1796 37.9814Z"
            stroke="#FFC000"
        />
    </motion.svg>
);

const coffeeSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="60"
        height="62"
        viewBox="0 0 60 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* <motion.g
            variants={parentVariants}
            width="60"
            height="56"
            viewBox="0 0 60 56"
        > */}
        <motion.path
            variants={fillVariants}
            d="M2.94058 50.5488H45.6274C46.2564 50.5488 46.8596 50.8072 47.3043 51.2671C47.7491 51.727 47.9989 52.3508 47.9989 53.0012C47.9989 53.6516 47.7491 54.2753 47.3043 54.7352C46.8596 55.1951 46.2564 55.4535 45.6274 55.4535H2.94058C2.31163 55.4535 1.70843 55.1951 1.26369 54.7352C0.818945 54.2753 0.569092 53.6516 0.569092 53.0012C0.569092 52.3508 0.818945 51.727 1.26369 51.2671C1.70843 50.8072 2.31163 50.5488 2.94058 50.5488Z"
            stroke="#071E40"
            // strokeWidth="3"
        />
        <motion.path
            variants={childVariants}
            d="M45.761 26.4784V29.544C45.761 33.6092 44.1461 37.508 41.2716 40.3825C38.397 43.2571 34.4983 44.872 30.433 44.872H18.1706C14.1054 44.872 10.2067 43.2571 7.33212 40.3825C4.45756 37.508 2.84265 33.6092 2.84265 29.544V5.01921C2.84265 4.20616 3.16563 3.42642 3.74055 2.85151C4.31546 2.27659 5.0952 1.95361 5.90825 1.95361H42.6954C43.5085 1.95361 44.2882 2.27659 44.8631 2.85151C45.4381 3.42642 45.761 4.20616 45.761 5.01921V8.08481M45.761 26.4784H48.8266C51.2658 26.4784 53.605 25.5095 55.3298 23.7847C57.0545 22.06 58.0234 19.7208 58.0234 17.2816C58.0234 14.8425 57.0545 12.5032 55.3298 10.7785C53.605 9.05376 51.2658 8.08481 48.8266 8.08481H45.761M45.761 26.4784V20.3472V14.216V8.08481"
            stroke="#071E40"
            strokeWidth="2.5"
        />
        <motion.path
            variants={signVariants}
            d="M31.6696 23.9008L31.6612 23.9091L31.6528 23.9175L25.412 30.2104C25.4113 30.2111 25.4106 30.2118 25.4099 30.2125C25.1058 30.5151 24.6942 30.685 24.2652 30.685C23.8361 30.685 23.4245 30.5151 23.1205 30.2125C23.1197 30.2118 23.119 30.2111 23.1183 30.2104L16.8775 23.9175L16.8775 23.9175L16.8693 23.9094C15.9672 23.0136 15.4381 21.8092 15.3884 20.5389C15.3387 19.2685 15.7722 18.0265 16.6015 17.063C17.4309 16.0994 18.5946 15.4859 19.8582 15.346C21.1218 15.2061 22.3915 15.5501 23.4116 16.3089L24.3034 16.9722L25.1976 16.3121C26.1662 15.5971 27.3585 15.2519 28.5593 15.3387C29.7572 15.4254 30.8849 15.9362 31.7398 16.7795C32.2023 17.2495 32.5679 17.806 32.8155 18.4172C33.0643 19.0311 33.1893 19.6881 33.1833 20.3504C33.1774 21.0128 33.0406 21.6674 32.7808 22.2767C32.521 22.886 32.1434 23.4379 31.6696 23.9008Z"
            stroke="#FFC820"
            strokeWidth="3"
        />
        {/* </motion.g> */}
    </motion.svg>
);
