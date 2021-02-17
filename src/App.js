import { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
    return (
        <Fragment>
            <NavigationBar />
            <Route path="/" exact={true} component={Home} />
        </Fragment>
    );
}

export default App;
