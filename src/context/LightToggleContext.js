import React, { createContext, useState } from "react";
import light_logo from "../images/sochware_final.png";
import dark_logo from "../images/sochware_final.png";
import sun from "../images/Sun.svg";
import night from "../images/Moon.svg";

export const LightContext = createContext();

const LightToggleProvider = (props) => {
    const [state, setState] = useState({
        isDark: true,
        dark: {
            bg: "root-dark ",
            mode: sun,
            logo: dark_logo,
            lightClass: "dark-class",
            heroColor: "hero-dark",
            customButton: "dark-btn",
            borderButton: "custom-btn-sm-border-dark",
        },
        light: {
            bg: "root-light",
            mode: night,
            logo: light_logo,
            lightClass: "light-class",
            heroColor: "hero-light",
            customButton: "light-btn",
            borderButton: "custom-btn-sm-border-light",
        },
    });
    const toggleLight = () => {
        setState({ ...state, isDark: !state.isDark });
    };
    return (
        <LightContext.Provider value={{ ...state, toggleLight: toggleLight }}>
            {props.children}
        </LightContext.Provider>
    );
};

export default LightToggleProvider;
