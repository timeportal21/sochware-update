import { Fragment, useContext } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { LightContext } from "./context/LightToggleContext";

function App() {
    const { isDark, dark, light, toggleLight } = useContext(LightContext);
    const { bg, mode, logo, lightClass, heroColor } = isDark ? dark : light;
    return (
        <Fragment>
            <div className={bg}>
                <NavigationBar
                    toggleLight={toggleLight}
                    lightClass={lightClass}
                    mode={mode}
                    logo={logo}
                />
                <Route path="/" exact={true}>
                    <Home heroColor={heroColor} />
                </Route>
            </div>
        </Fragment>
    );
}

export default App;
