import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import NoMatch from "../views/NoMatch";
import RutaPrivada from "./RutaPrivada";
import RutaPublica from "./RutaPublica";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <RutaPrivada exact path="/" component={Home} />
                <RutaPublica exact path="/login" component={Login} />
                <Route  path="*" component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default AppRouter;