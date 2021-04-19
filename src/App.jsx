import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Navigation from "./components/navbar_component";
import { Validators } from "./components/validator_component";
import { NetworkInfo } from "./components/network_component";
import { BlockchainInfo } from "./components/block_component";
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
              <Route path="/Validators" component={Validators}></Route>
            </Switch>
          </div>
          {/* <div className="col-md-12">
            <Switch>
              <Route path="/BlockchainInfo" component={BlockchainInfo}></Route>
            </Switch>
          </div> */}
          <div className="col-md-12">
            <Switch>
              <Route path="/NetworkInfo" component={NetworkInfo}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
