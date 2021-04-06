import React, { createContext, useState } from "react";
import light_logo from "../images/sochware.svg";
import dark_logo from "../images/sochwarelogo.svg";
import sun from "../images/Sun.svg";
import night from "../images/Moon.svg";
import listImageLight from "../images/bullet-point.svg";
import listImageDark from "../images/bullet-point-light.svg";

export const LightContext = createContext();

const LightToggleProvider = (props) => {
    const [state, setState] = useState({
        isDark: true,
        dark: {
            bg: "root-dark ",
            mode: sun,
            logo: dark_logo,
            lightClass: "dark-class navbar-dark",
            heroColor: "hero-dark",
            customButton: "dark-btn",
            borderButton: "custom-btn-sm-border-dark",
            listImage: listImageDark,
        },
        light: {
            bg: "root-light",
            mode: night,
            logo: light_logo,
            lightClass: "light-class navbar-light",
            heroColor: "hero-light",
            customButton: "light-btn",
            borderButton: "custom-btn-sm-border-light",
            listImage: listImageLight,
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
