import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const InnerNavBar = () => {
  return (
    <Navbar className="shadow" bg="light">
      <Navbar.Brand href="/home">BiyeKorun</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#">Get Pro</Nav.Link>
          <NavDropdown title="Search" id="basic-nav-dropdown">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </NavDropdown>
          <Nav.Link href="/">Help</Nav.Link>
          <Nav.Link href="/">
            <FontAwesomeIcon style={{ color: "#b9b8c9" }} icon={faBell} />
          </Nav.Link>
          <img
            src="https://zc64xuggxl-flywheel.netdna-ssl.com/wp-content/uploads/2019/04/team.png"
            alt=""
            style={{ width: 35, borderRadius: 35 }}
            className="ml-3"
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default InnerNavBar;
