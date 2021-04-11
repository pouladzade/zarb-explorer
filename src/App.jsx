import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Navigation from "./components/navbar_component";
import { Validators } from "./components/validator_component";

export default function App() {
  return (
    <div className="App">
      <div>
        <Navigation></Navigation>
      </div>
      <Validators></Validators>
    </div>
  );
}
