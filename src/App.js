import { Fragment, useContext } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { LightContext } from "./context/LightToggleContext";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

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
                <Footer />
            </div>
        </Fragment>
    );
}

export default App;
