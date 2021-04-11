import React from "react";
import ReactDom from "react-dom";
import { Navbar, Nav } from "react-bootstrap";
import bootstrap from "bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Validators } from "../components/validator_component";
import { BlockchainInfo } from "../components/block_component";
function Navigation() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Zarb Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/BlockchainInfo">Blocks</Nav.Link>
            <Nav.Link href="/Validators">Validators</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        {/* <Route exact path="/">
          <Home /> */}
        {/* </Route> */}
        <Route path="/BlockchainInfo">
          <BlockchainInfo />
        </Route>
        <Route path="/Validators">
          <Validators />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
