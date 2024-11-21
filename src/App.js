import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
import Home from "./components/Home";
import Nav from "./components/Nav";
import UserActionDemo from "./components/UserActionDemo";
import ResourceDemo from "./components/ResourceDemo";
import "./styles.css";
import { generateHandles, sampleUser } from "./generateHandles";
import { DD_RUM, DD_LOGS } from "./DD_RUM";
import { datadogLogs } from "@datadog/browser-logs";

// DD_RUM();
// DD_LOGS() && datadogLogs.logger.setLevel("debug");
//
// DD_RUM &&
//   window.DD_RUM.setUser({
//     ...sampleUser()
//   });

generateHandles();

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/userActionDemo"
          render={() => {
            return <UserActionDemo title="User Action Demo" />;
          }}
        />

        <Route
          exact
          path="/resourceDemo"
          render={() => {
            return <ResourceDemo title="Resource Demo" />;
          }}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
