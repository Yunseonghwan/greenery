import React from "react";
import { INavigation } from "./Navigation.interface";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const Navigation: React.FC<INavigation.IProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
