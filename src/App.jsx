import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Navigation from "./components/navbar_component";
import {
  GetValidators,
  GetNetworkInfo,
  GetBlockInfo,
} from "../src/proxy/proxy";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="col-md-12">
          <Navigation></Navigation>
        </div>
        <br></br>
        <div className="content">
          <div className="col-md-12">
            <Switch>
              <Route
                path="/proxy.GetValidators"
                component={GetValidators}
              ></Route>
            </Switch>
          </div>
          <div className="col-md-12">
            <Switch>
              <Route
                path="/proxy.GetBlockInfo"
                component={GetBlockInfo}
              ></Route>
            </Switch>
          </div>
          <div className="col-md-12">
            <Switch>
              <Route
                path="/proxy.GetNetworkInfo"
                component={GetNetworkInfo}
              ></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
