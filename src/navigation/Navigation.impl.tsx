import React from "react";
import { INavigation } from "./Navigation.interface";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Magzine from "../pages/Magzine";

const Navigation: React.FC<INavigation.IProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/magzine">
          <Magzine />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
