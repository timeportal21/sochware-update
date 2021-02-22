import React from "react";
import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";

function Home({ heroColor }) {
    return (
        <>
            <HeroSection heroColor={heroColor} />
            <Features />
        </>
    );
}

export default Home;
