import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import SochwareEnhance from "../../components/SochwareEnhance/SochwareEnhance";

function Home({ heroColor }) {
    return (
        <>
            <HeroSection heroColor={heroColor} />
            <Features heroColor={heroColor} />
            <SochwareEnhance heroColor={heroColor} />
        </>
    );
}

export default Home;
