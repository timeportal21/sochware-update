import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import SochwareEnhance from "../../components/SochwareEnhance/SochwareEnhance";

function Home({ heroColor, customButton, borderButton }) {
    return (
        <>
            <HeroSection heroColor={heroColor} customButton={customButton} />
            <Features
                heroColor={heroColor}
                customButton={customButton}
                borderButton={borderButton}
            />
            <SochwareEnhance heroColor={heroColor} />
        </>
    );
}

export default Home;
