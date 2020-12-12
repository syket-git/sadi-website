import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavSettings.css";

const NavSettings = () => {
  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Navbar bg="light" variant="light">
          <Nav className="container d-flex justify-content-between navSettings">
            <Nav.Link href="#account">Account Settings</Nav.Link>
            <Nav.Link href="#contact">Contact filter</Nav.Link>
            <Nav.Link href="#privacy">Privacy Options</Nav.Link>
            <Nav.Link href="#hide-profile">Hide Account</Nav.Link>
            <Nav.Link href="#delete">Delete Account</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default NavSettings;
