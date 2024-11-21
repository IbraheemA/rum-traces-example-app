import React, { useState, useEffect } from "react";
import axios from "axios";
// import { window.DD_RUM } from "@datadog/browser-rum";

const ResourceDemo = (props) => {
  const [worldClock, setWorldClock] = useState("");

  const updateWorldClock = (event) => {
    axios.get("http://localhost:8080/clock")
      .then((res) => {
        console.log("got response:");
        console.log(res);
        return res.data;
      })
      .then((response) => setWorldClock(Object.assign({}, response)))
      .catch((error) =>
        // alert(
        //   "There was an error fetching World Clock info. Please refresh page and try again"
        // )
          alert(error)
      );
  };

  const clearForm = (event) => {
    event.preventDefault();
    setWorldClock("");
  };

  return (
    <div
      className="page"
      id="resourceDemoContainer"
      onClick={window.DD_RUM.addTiming("ra_318_onclick")}
      onScroll={window.DD_RUM.addTiming("ra_318_onscroll")}
      onLoad={window.DD_RUM.addTiming("ra_318_onload")}
      onChange={window.DD_RUM.addTiming("ra_318_onchange")}
      onError={window.DD_RUM.addTiming("ra_318_onerror")}
      onBlur={window.DD_RUM.addTiming("ra_318_onblur")}
      onFocus={window.DD_RUM.addTiming("ra_318_onfocus")}>
      {!!worldClock && (
        <div id="worldClockModule">
          <h3>Your location</h3>

          <div className="detailSection">
            {Object.keys(worldClock).map((detail) => {
              return (
                <div id={detail} key={detail} className="resource-detail-item">
                  <div className="resource-label">{detail} </div>
                  <div className="resource-value">{worldClock[detail]}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div id="buttons">
        {!worldClock ? (
          <button id="display-button" onClick={updateWorldClock}>
            Display World Clock
          </button>
        ) : (
          <button id="close-button" onClick={clearForm}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default ResourceDemo;
