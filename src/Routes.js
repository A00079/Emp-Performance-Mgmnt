import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";
import ComposeEmails from "./pages/ComposeEmails";
import { CBUserLogs, CBAddCampaign } from "./pages/CreditBuddy";
import { DCSUserRegistrationLogs, DCSUserEnquireLogs } from "./pages/DCSUserRegistrationLogs";
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
          path="/creditbuddy-add-offers"
          layout={PublicLayout}
          component={CBAddCampaign}
        />
        <WithLayoutRoute
          exact
          path="/dcs-user-registration-logs"
          layout={PublicLayout}
          component={DCSUserRegistrationLogs}
        />
        <WithLayoutRoute
          exact
          path="/dcs-user-enquire-logs"
          layout={PublicLayout}
          component={DCSUserEnquireLogs}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;
