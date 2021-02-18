import React from "react";
import HeroSection from "../HeroSection/HeroSection";

function Home({ heroColor }) {
    return (
        <>
            <HeroSection heroColor={heroColor} />
        </>
    );
}

export default Home;
