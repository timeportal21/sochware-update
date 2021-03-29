import { Fragment, useContext } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { LightContext } from "./context/LightToggleContext";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import OurServices from "./pages/OurServices/OurServices";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Career from "./pages/Career/Career";

function App() {
    const { isDark, dark, light, toggleLight } = useContext(LightContext);
    const {
        bg,
        mode,
        logo,
        lightClass,
        heroColor,
        customButton,
        borderButton,
        listImage,
    } = isDark ? dark : light;
    return (
        <Fragment>
            <div className={bg}>
                <NavigationBar
                    toggleLight={toggleLight}
                    lightClass={lightClass}
                    mode={mode}
                    logo={logo}
                />

                <Route path="/career" exact>
                    <Career heroColor={heroColor} customButton={customButton} />
                </Route>
                <Route path="/services" exact>
                    <OurServices
                        heroColor={heroColor}
                        customButton={customButton}
                    />
                </Route>
                <Route path="/about" exact>
                    <About
                        heroColor={heroColor}
                        customButton={customButton}
                        listImage={listImage}
                    />
                </Route>
                <Route path="/contact" exact>
                    <Contact
                        heroColor={heroColor}
                        customButton={customButton}
                    />
                </Route>
                <Route path="/" exact>
                    <Home
                        heroColor={heroColor}
                        customButton={customButton}
                        borderButton={borderButton}
                    />
                </Route>

                <Footer logo={logo} heroColor={heroColor} />
            </div>
        </Fragment>
    );
}

export default App;
