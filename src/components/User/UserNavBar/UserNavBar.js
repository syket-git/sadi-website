import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./UserNavBar.css";

const UserNavBar = ({ className }) => {
  return (
    <div>
      <Navbar className="shadow" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className={className} href="#">
              Dashboard
            </Nav.Link>
            <Nav.Link className={className} href="#">
              Profile
            </Nav.Link>
            <Nav.Link className={className} href="#">
              Inbox
            </Nav.Link>
            <Nav.Link className={className} href="#">
              Matches
            </Nav.Link>
            <Nav.Link className={className} href="#">
              Saved Search
            </Nav.Link>
            <Nav.Link className={className} href="#">
              Near Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default UserNavBar;
