import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";
import DemoGraphics from "./pages/DemoGraphics";
import ComposeEmails from "./pages/ComposeEmails";
import CBUserLogs from "./pages/CreditBuddyUserLogs";
import DCSUserRegistrationLogs from "./pages/DCSUserRegistrationLogs/DCSUserRegistrationLogs";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
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
          path="/compose-email"
          layout={PublicLayout}
          component={ComposeEmails}
        />
        <WithLayoutRoute
          exact
          path="/creditbuddy-user-logs"
          layout={PublicLayout}
          component={CBUserLogs}
        />
        <WithLayoutRoute
          exact
          path="/dcs-user-registration-logs"
          layout={PublicLayout}
          component={DCSUserRegistrationLogs}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;
