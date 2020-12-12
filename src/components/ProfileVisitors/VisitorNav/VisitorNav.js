import React from "react";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const VisitorNav = () => {
  return (
    <div style={{ width: 750, marginLeft: 13 }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex justify-content-around">
            <Nav.Link
              href="#recentVisitors"
              style={{ paddingRight: 45, fontWeight: 700, fontHeight: 80 }}
            >
              Recent Visitors
            </Nav.Link>
            <Nav.Link
              href="#topMatch"
              style={{ paddingRight: 45, fontWeight: 700, fontHeight: 80 }}
            >
              Top Match
            </Nav.Link>
            <Nav.Link
              href="#matchProfileList"
              style={{ paddingRight: 45, fontWeight: 700, fontHeight: 80 }}
            >
              Match Profile List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default VisitorNav;
