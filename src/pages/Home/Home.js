import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import SochwareEnhance from "../../components/SochwareEnhance/SochwareEnhance";
import WorkSection from "../../components/WorkingStrategy/WorkSection";

function Home({ heroColor, customButton, borderButton }) {
    return (
        <>
            <HeroSection heroColor={heroColor} customButton={customButton} />
            <WorkSection heroColor={heroColor} />
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
