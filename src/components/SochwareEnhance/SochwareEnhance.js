import React, { useState } from "react";
import "./SochwareEnhance.scss";
import AnimatedNumber from "react-animated-number";
import { motion } from "framer-motion";

function SochwareEnhance({ heroColor }) {
    const [numberCount, setNumberCount] = useState([
        { title: "Awards", icon: awards, number: 3 },
        { title: "Event", icon: events, number: 25 },
        { title: "Client", icon: clientSvg, number: 25 },
        { title: "Media", icon: mediaSvg, number: 23 },
        { title: "Staff", icon: staffSvg, number: 18 },
        { title: "Awards", icon: collaboratorsSvg, number: 10 },
        { title: "Awards", icon: JESvg, number: 6 },
        { title: "Trainees", icon: trainerSvg, number: 5000 },
    ]);
    return (
        <section className={`enhance-section ${heroColor}`}>
            <div className={`enhance-title`}>
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
                                <div className="number-icon">{data.icon}</div>
                                <div className={`number-show`}>
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

const parentVariants = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            // staggerChildren: 1
        },
    },
};
const childVariants = {
    initial: {
        fill: "rgba(0,0,0,0)",
        pathLength: 0,
    },
    final: {
        pathLength: 1,
        transition: {
            pathLength: {
                delay: 1,
                duration: 0.7,
            },
            fill: {
                delay: 1.7,
            },
        },
    },
};
const childVariants2 = {
    initial: {
        fill: "rgba(0,0,0,0)",
        pathLength: 0,
    },
    final: {
        pathLength: 1,
        transition: {
            pathLength: {
                delay: 1,
                duration: 0.7,
            },
            fill: {
                delay: 1.7,
            },
        },
    },
};

const awards = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="42"
        height="70"
        viewBox="0 0 42 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M6.41345 33.8999V64.6683C6.41494 65.1758 6.54204 65.6744 6.78268 66.1169C7.02331 66.5593 7.3695 66.9309 7.78837 67.1964C8.20723 67.4619 8.68487 67.6123 9.17591 67.6336C9.66695 67.6548 10.1551 67.5461 10.594 67.3177L20.3283 62.3065C20.6426 62.1447 21.0157 62.1447 21.3299 62.3065L31.0643 67.3177C31.4659 67.5302 31.9103 67.6424 32.3617 67.6452C32.9015 67.647 33.4309 67.4923 33.8897 67.1987C34.3052 66.9305 34.6477 66.5575 34.8848 66.1148C35.1219 65.672 35.2458 65.1742 35.2448 64.6683V34.4011"
            stroke="#000"
            stroke-width="3.28254"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M20.829 50.1166V41.3298"
            stroke="#000"
            stroke-width="4.37672"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M15.886 21.7514L15.2982 22.5604L15.886 21.7514L10.1963 17.6177L17.2291 17.6177C17.879 17.6177 18.4549 17.1992 18.6557 16.5812L17.7046 16.2722L18.6557 16.5812L20.8289 9.89262L23.0022 16.5812C23.203 17.1992 23.7789 17.6177 24.4288 17.6177L31.4616 17.6177L25.7719 21.7514L26.3271 22.5155L25.7719 21.7514C25.2462 22.1334 25.0262 22.8104 25.227 23.4285L27.4003 30.1171L21.7106 25.9833C21.1849 25.6013 20.473 25.6013 19.9473 25.9833L14.2576 30.1171L16.4309 23.4285L15.4798 23.1195L16.4309 23.4285C16.6317 22.8104 16.4117 22.1334 15.886 21.7514Z"
            stroke="#FFC820"
            stroke-width="2"
        />
        <motion.circle
            variants={childVariants}
            cx="20.8293"
            cy="21.0725"
            r="19.0725"
            stroke="black"
            fill="#FFC820"
            stroke-width="3.28254"
        />
    </motion.svg>
);

const events = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="58"
        height="70"
    >
        <motion.path
            variants={childVariants}
            d="M46.2828 9.63965H49.1728C51.134 9.63965 52.9812 10.3237 54.3152 11.4921C55.6428 12.6548 56.3428 14.1859 56.3428 15.7328V51.1678C56.3428 52.7147 55.6428 54.2458 54.3152 55.4085C52.9812 56.5769 51.134 57.261 49.1728 57.261H8.71285C6.75174 57.261 4.90452 56.5769 3.5705 55.4085C2.24284 54.2458 1.54285 52.7147 1.54285 51.1678V15.7328C1.54285 14.1859 2.24284 12.6548 3.5705 11.4921C4.90452 10.3237 6.75174 9.63965 8.71285 9.63965H11.6028H17.3828H40.5028H46.2828Z"
            stroke="black"
            stroke-width="3"
        />
        <motion.path
            variants={childVariants}
            d="M30.5485 49.373C30.0732 49.6905 29.5145 49.86 28.9429 49.86C28.1764 49.86 27.4413 49.5555 26.8994 49.0136C26.3574 48.4716 26.0529 47.7365 26.0529 46.97C26.0529 46.3984 26.2224 45.8397 26.54 45.3644C26.8575 44.8892 27.3089 44.5188 27.8369 44.3C28.365 44.0813 28.9461 44.024 29.5067 44.1356C30.0673 44.2471 30.5823 44.5223 30.9864 44.9265C31.3906 45.3307 31.6659 45.8456 31.7774 46.4062C31.8889 46.9668 31.8317 47.5479 31.6129 48.076C31.3942 48.6041 31.0238 49.0554 30.5485 49.373Z"
            fill="black"
            stroke="black"
        />
        <motion.path
            variants={childVariants}
            d="M30.5485 37.813C30.0732 38.1305 29.5145 38.3 28.9429 38.3C28.1764 38.3 27.4413 37.9955 26.8994 37.4536C26.3574 36.9116 26.0529 36.1765 26.0529 35.41C26.0529 34.8384 26.2224 34.2797 26.54 33.8044C26.8575 33.3292 27.3089 32.9587 27.8369 32.74C28.365 32.5213 28.9461 32.464 29.5067 32.5756C30.0673 32.6871 30.5823 32.9623 30.9864 33.3665C31.3906 33.7707 31.6659 34.2856 31.7774 34.8462C31.8889 35.4068 31.8317 35.9879 31.6129 36.516C31.3942 37.0441 31.0238 37.4954 30.5485 37.813Z"
            fill="black"
            stroke="black"
        />
        <motion.path
            variants={childVariants}
            d="M16.0985 37.813C15.6232 38.1305 15.0645 38.3 14.4929 38.3C13.7264 38.3 12.9913 37.9955 12.4494 37.4536C11.9074 36.9116 11.6029 36.1765 11.6029 35.41C11.6029 34.8384 11.7724 34.2797 12.09 33.8044C12.4075 33.3292 12.8589 32.9587 13.387 32.74C13.915 32.5213 14.4961 32.464 15.0567 32.5756C15.6173 32.6871 16.1323 32.9623 16.5364 33.3665C16.9406 33.7707 17.2159 34.2856 17.3274 34.8462C17.4389 35.4068 17.3817 35.9879 17.1629 36.516C16.9442 37.0441 16.5738 37.4954 16.0985 37.813Z"
            fill="black"
            stroke="black"
        />
        <motion.path
            variants={childVariants}
            d="M16.0985 49.373C15.6232 49.6905 15.0645 49.86 14.4929 49.86C13.7264 49.86 12.9913 49.5555 12.4494 49.0136C11.9074 48.4716 11.6029 47.7365 11.6029 46.97C11.6029 46.3984 11.7724 45.8397 12.09 45.3644C12.4075 44.8892 12.8589 44.5188 13.387 44.3C13.915 44.0813 14.4961 44.024 15.0567 44.1356C15.6173 44.2471 16.1323 44.5223 16.5364 44.9265C16.9406 45.3307 17.2159 45.8456 17.3274 46.4062C17.4389 46.9668 17.3817 47.5479 17.1629 48.076C16.9442 48.6041 16.5738 49.0554 16.0985 49.373Z"
            stroke="black"
            fill="black"
        />
        <motion.path
            variants={childVariants}
            d="M44.0084 49.373C43.5332 49.6905 42.9744 49.86 42.4028 49.86C41.6363 49.86 40.9013 49.5555 40.3593 49.0136C39.8173 48.4716 39.5128 47.7365 39.5128 46.97C39.5128 46.3984 39.6823 45.8397 39.9999 45.3644C40.3174 44.8892 40.7688 44.5188 41.2969 44.3C41.8249 44.0813 42.406 44.024 42.9666 44.1356C43.5272 44.2471 44.0422 44.5223 44.4464 44.9265C44.8505 45.3307 45.1258 45.8456 45.2373 46.4062C45.3488 46.9668 45.2916 47.5479 45.0728 48.076C44.8541 48.6041 44.4837 49.0554 44.0084 49.373Z"
            fill="#FFC000"
            stroke="#FFC000"
        />
        <motion.path
            variants={childVariants}
            d="M44.0084 37.813C43.5332 38.1305 42.9744 38.3 42.4028 38.3C41.6363 38.3 40.9013 37.9955 40.3593 37.4536C39.8173 36.9116 39.5128 36.1765 39.5128 35.41C39.5128 34.8384 39.6823 34.2797 39.9999 33.8044C40.3174 33.3292 40.7688 32.9587 41.2969 32.74C41.8249 32.5213 42.406 32.464 42.9666 32.5756C43.5272 32.6871 44.0422 32.9623 44.4464 33.3665C44.8505 33.7707 45.1258 34.2856 45.2373 34.8462C45.3488 35.4068 45.2916 35.9879 45.0728 36.516C44.8541 37.0441 44.4837 37.4954 44.0084 37.813Z"
            fill="#FFC000"
            stroke="#FFC000"
        />
        <motion.path
            variants={childVariants}
            d="M15.4829 3.23926L15.4829 15.628"
            stroke="#FFC000"
            stroke-width="5"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M42.4028 3.23926L42.4028 15.6281"
            stroke="#FFC000"
            stroke-width="5"
            stroke-linecap="round"
        />
    </motion.svg>
);

const clientSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="61"
        height="70"
        viewBox="0 0 61 61"
    >
        <motion.path
            variants={childVariants}
            d="M20.037 40.5742C22.8486 43.2846 26.3947 44.7693 30.0571 44.7693C33.7195 44.7693 37.2657 43.2846 40.0772 40.5742"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M24.2264 24.6412C22.6378 22.915 20.5314 21.9526 18.3414 21.9526C16.1515 21.9526 14.0451 22.915 12.4565 24.6412M47.6577 24.6412C46.0691 22.915 43.9626 21.9526 41.7727 21.9526C39.5828 21.9526 37.4764 22.915 35.8878 24.6412"
            stroke="#FFC000"
            stroke-width="3"
            stroke-linecap="round"
        />
        <motion.circle
            variants={childVariants}
            cx="30.0571"
            cy="30.1498"
            r="28.4955"
            stroke="black"
            stroke-width="3"
        />
    </motion.svg>
);

const mediaSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="61"
        height="70"
        viewBox="0 0 61 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M53.6025 46.9341V4.29096M58.7815 2.35986H1.5603M6.73926 3.29096V45.9341M1.5603 46.8652H26.9919H33.3499H58.7815"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M30.2211 65.939L30.2211 53.0672M30.2211 46.8652V53.0672M30.2211 53.0672L11.7584 64.7338M30.2211 53.0672L48.5834 64.7338"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants2}
            d="M26.5904 33.0416C25.8438 33.0416 25.1108 32.8412 24.468 32.4614C23.8346 32.1042 23.3069 31.5859 22.9384 30.9591C22.5699 30.3322 22.3737 29.619 22.3697 28.8919V20.4986C22.3565 19.7551 22.5445 19.0219 22.9139 18.3766C23.2833 17.7312 23.8202 17.1977 24.468 16.8326C25.1108 16.4528 25.8438 16.2524 26.5904 16.2524C27.3371 16.2524 28.07 16.4528 28.7129 16.8326L35.9484 21.0292C36.567 21.4089 37.0779 21.9408 37.4323 22.5742C37.7867 23.2076 37.9728 23.9212 37.9728 24.647C37.9728 25.3728 37.7867 26.0865 37.4323 26.7198C37.0779 27.3532 36.567 27.8851 35.9484 28.2648L28.7129 32.4614C28.07 32.8412 27.3371 33.0416 26.5904 33.0416Z"
            stroke="#FFC000"
            stroke-width="3"
        />
    </motion.svg>
);

const staffSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="64"
        height="70"
        viewBox="0 0 64 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M9.29871 52.8226C12.3628 43.3039 21.2916 36.4165 31.8291 36.4165C42.3666 36.4165 51.2954 43.304 54.3595 52.8227"
            stroke="#FFC820"
            stroke-width="3"
        />
        <motion.circle
            variants={childVariants}
            cx="31.8291"
            cy="32.6699"
            r="30.228"
            stroke="black"
            stroke-width="3"
        />
        <motion.circle
            variants={childVariants}
            cx="31.8291"
            cy="26.2239"
            r="10.1925"
            stroke="black"
            stroke-width="3"
        />
    </motion.svg>
);

const collaboratorsSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="81"
        height="70"
        viewBox="0 0 81 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M51.0396 72.0953C46.6227 74.5238 41.7108 75.9148 36.6764 76.1629C31.6419 76.4109 26.6171 75.5095 21.9828 73.527C17.3485 71.5444 13.2265 68.5328 9.92909 64.7204C6.63173 60.908 4.24563 56.3949 2.9517 51.5233C1.65777 46.6516 1.48997 41.5493 2.46103 36.6032C3.43209 31.6571 5.51651 26.997 8.55627 22.9762C11.596 18.9553 15.5113 15.6794 20.0053 13.3966C24.4994 11.1139 29.4541 9.88428 34.494 9.80103L35.0342 42.5039C35.0395 42.8296 35.1244 43.149 35.2813 43.4344L51.0396 72.0953Z"
            stroke="black"
            stroke-width="3"
        />
        <motion.path
            variants={childVariants}
            d="M60.2014 74.1665C65.4747 71.2662 69.8605 66.9871 72.89 61.787C75.9194 56.5868 77.4785 50.6611 77.4006 44.6433L45.8665 45.0516C45.1117 45.0614 44.6394 45.872 45.0032 46.5335L60.2014 74.1665Z"
            stroke="black"
            stroke-width="3"
        />
        <motion.path
            variants={childVariants}
            d="M79.4768 35.0515C79.4768 30.6911 78.618 26.3735 76.9494 22.3451C75.2807 18.3167 72.835 14.6564 69.7518 11.5732C66.6686 8.48996 63.0083 6.04422 58.9799 4.3756C54.9514 2.70697 50.6338 1.84814 46.2735 1.84814V34.0515C46.2735 34.6037 46.7212 35.0515 47.2735 35.0515H79.4768Z"
            stroke="#FFC820"
            stroke-width="3"
        />
    </motion.svg>
);

const JESvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="54"
        height="60"
        viewBox="0 0 54 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M43.8652 47.1976H52.2978V58.4411M43.8652 47.1976H35.4326V58.4411M43.8652 47.1976V35.9542H29.8109V24.3406M24.1892 24.3406V35.9542H10.1348V47.1976M10.1348 47.1976H1.70221V58.4411M10.1348 47.1976H18.5674V58.4411"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M26.106 2.57985C26.4054 1.65854 27.7088 1.65854 28.0081 2.57985L30.2708 9.54364C30.4047 9.95566 30.7886 10.2346 31.2219 10.2346H38.544C39.5127 10.2346 39.9155 11.4742 39.1318 12.0436L33.208 16.3475C32.8576 16.6021 32.7109 17.0535 32.8448 17.4655L35.1074 24.4293C35.4068 25.3506 34.3523 26.1167 33.5686 25.5473L27.6449 21.2435C27.2944 20.9888 26.8198 20.9888 26.4693 21.2435L20.5455 25.5473C19.7618 26.1167 18.7073 25.3506 19.0067 24.4293L21.2694 17.4655C21.4032 17.0535 21.2566 16.6021 20.9061 16.3475L14.9823 12.0436C14.1986 11.4742 14.6014 10.2346 15.5701 10.2346H22.8923C23.3255 10.2346 23.7095 9.95566 23.8433 9.54364L26.106 2.57985Z"
            stroke="#FFC820"
            stroke-width="3"
        />
    </motion.svg>
);

const trainerSvg = (
    <motion.svg
        variants={parentVariants}
        initial="initial"
        animate="final"
        width="61"
        height="68"
        viewBox="0 0 61 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            variants={childVariants}
            d="M53.6027 3.93537C53.6027 3.93537 53.6027 21.8888 53.6027 37.5119C53.6027 42.4824 49.5733 46.5097 44.6027 46.5097H33.35H26.9921C26.9921 46.5097 21.6481 46.5097 15.7396 46.5097C10.769 46.5097 6.73941 42.4802 6.73941 37.5097V2.93537M58.7817 2.00427H1.56046"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
        />
        <motion.path
            variants={childVariants}
            d="M19.558 17.9107H15.9113C15.4277 17.9107 14.964 17.7099 14.622 17.3525C14.2801 16.9951 14.088 16.5103 14.088 16.0049C14.088 15.4994 14.2801 15.0147 14.622 14.6573C14.964 14.2999 15.4277 14.0991 15.9113 14.0991H19.558C20.0416 14.0991 20.5054 14.2999 20.8473 14.6573C21.1893 15.0147 21.3814 15.4994 21.3814 16.0049C21.3814 16.5103 21.1893 16.9951 20.8473 17.3525C20.5054 17.7099 20.0416 17.9107 19.558 17.9107Z"
            stroke="#FFC000"
        />
        <motion.path
            variants={childVariants}
            d="M15.9938 21.9991H27.4287C27.9341 21.9991 28.4189 22.1999 28.7763 22.5573C29.1337 22.9147 29.3345 23.3995 29.3345 23.905C29.3345 24.4104 29.1337 24.8952 28.7763 25.2526C28.4189 25.61 27.9341 25.8108 27.4287 25.8108H15.9938C15.4883 25.8108 15.0036 25.61 14.6462 25.2526C14.2888 24.8952 14.088 24.4104 14.088 23.905C14.088 23.3995 14.2888 22.9147 14.6462 22.5573C15.0036 22.1999 15.4883 21.9991 15.9938 21.9991Z"
            stroke="#FFC000"
        />
        <motion.path
            variants={childVariants}
            d="M16.7392 29.8992H32.6468C33.35 29.8992 34.0244 30.1785 34.5216 30.6757C35.0188 31.1729 35.2981 31.8473 35.2981 32.5505C35.2981 33.2536 35.0188 33.928 34.5216 34.4252C34.0244 34.9224 33.35 35.2017 32.6468 35.2017H16.7392C16.0361 35.2017 15.3617 34.9224 14.8645 34.4252C14.3673 33.928 14.088 33.2536 14.088 32.5505C14.088 31.8473 14.3673 31.1729 14.8645 30.6757C15.3617 30.1785 16.0361 29.8992 16.7392 29.8992Z"
            stroke="#FFC000"
        />
        <motion.path
            variants={childVariants}
            d="M30.2213 65.5834L30.2213 52.7116M30.2213 46.5096V52.7116M30.2213 52.7116L11.7586 64.3782M30.2213 52.7116L48.5836 64.3782"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
        />
    </motion.svg>
);
