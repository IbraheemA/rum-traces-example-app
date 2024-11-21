import React from "react";
import { withRouter } from "react-router";
// import { window.DD_RUM } from "@datadog/browser-rum";

const Home = () => {
  return (
    <div
      id="home"
      className="page"
      onClick={window.DD_RUM.addTiming("ra_318_onclick")}
      onScroll={window.DD_RUM.addTiming("ra_318_onscroll")}
      onLoad={window.DD_RUM.addTiming("ra_318_onload")}
      onChange={window.DD_RUM.addTiming("ra_318_onchange")}
      onError={window.DD_RUM.addTiming("ra_318_onerror")}
      onBlur={window.DD_RUM.addTiming("ra_318_onblur")}
      onFocus={window.DD_RUM.addTiming("ra_318_onfocus")}>
      <div id="homeContent">
        <div className="page-title">Home Page</div>
        <h3> Welcome! </h3>
      </div>
    </div>
  );
};

export default withRouter(Home);
