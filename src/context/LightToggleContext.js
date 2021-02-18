import React, { createContext, useState } from "react";
import light_logo from "../images/light-logo.svg";
import dark_logo from "../images/logo.svg";
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
        },
        light: {
            bg: "root-light",
            mode: night,
            logo: light_logo,
            lightClass: "light-class",
            heroColor: "hero-light",
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
