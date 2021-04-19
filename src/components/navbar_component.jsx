import React from "react";
import ReactDom from "react-dom";
import { Navbar, Nav } from "react-bootstrap";
import bootstrap from "bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Validators } from "../components/validator_component";
import { BlockchainInfo } from "../components/block_component";
import { NetworkInfo } from "../components/network_component";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>ZARB Explorer</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/Validators">
            <Nav.Link>Validators</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/BlockchainInfo">
            <Nav.Link>Blockchain</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/NetworkInfo">
            <Nav.Link>Network</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
