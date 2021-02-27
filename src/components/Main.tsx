import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AllCountries } from "./AllCountries";
import { Continents } from "./Continents";
import { Countries } from "./Countries";
import { Country } from "./Country";
import { Home } from "./Home";
import { Languages } from "./Languages";

export const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/languages">
          <Languages />
        </Route>
        <Route path="/country/:countryCode">
          <Country />
        </Route>
        <Route path="/countries/:continentCode">
          <Countries />
        </Route>
        <Route path="/countries">
          <AllCountries />
        </Route>
        <Route path="/continents">
          <Continents />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
