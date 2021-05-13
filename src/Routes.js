import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";
import DemoGraphics from "./pages/DemoGraphics";
import ComposeEmails from "./pages/ComposeEmails";
import ComposeSms from "./pages/ComposeSMS";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CreateOffer from "./pages/CreateOffer";
import AllOffers from "./pages/AllOffers";
import Reports from "./pages/Reports";
import AddEmployee from "./pages/AddEmployee";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={PublicLayout}
          component={Home}
        />
        <WithLayoutRoute
          exact
          path="/signup"
          layout={SecondaryPublicLayout}
          component={Signup}
        />
        <WithLayoutRoute
          exact
          path="/Login"
          layout={SecondaryPublicLayout}
          component={Login}
        />
        <WithLayoutRoute
          exact
          path="/demo-graphics"
          layout={PublicLayout}
          component={DemoGraphics}
        />
        <WithLayoutRoute
          exact
          path="/create-offer"
          layout={PublicLayout}
          component={CreateOffer}
        />
        <WithLayoutRoute
          exact
          path="/add-employee"
          layout={PublicLayout}
          component={AddEmployee}
        />
        <WithLayoutRoute
          exact
          path="/reports"
          layout={PublicLayout}
          component={Reports}
        />
        <WithLayoutRoute
          exact
          path="/all-offers"
          layout={PublicLayout}
          component={AllOffers}
        />
        <WithLayoutRoute
          exact
          path="/compose-email"
          layout={PublicLayout}
          component={ComposeEmails}
        />
        <WithLayoutRoute
          exact
          path="/compose-sms"
          layout={PublicLayout}
          component={ComposeSms}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;
