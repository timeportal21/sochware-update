import React from "react";
import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";
import SochwareEnhance from "../SochwareEnhance/SochwareEnhance";

function Home({ heroColor }) {
    return (
        <>
            <HeroSection heroColor={heroColor} />
            <Features />
            <SochwareEnhance />
        </>
    );
}

export default Home;
