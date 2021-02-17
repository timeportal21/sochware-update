import React, { createContext, useState } from "react";

export const LightContext = createContext();

const LightToggleProvider = (props) => {
    const [state, setState] = useState({
        isDark: true,
        dark: { bg: "dark" },
        light: { bg: "light" },
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
