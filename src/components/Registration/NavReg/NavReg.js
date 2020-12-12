import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavReg = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Nav style={{ fontWeight: 700, fontSize: 17 }}>
          <Link to="/personal">
            <Nav.Link href="#personal">Personal Details</Nav.Link>
          </Link>
          <Link to="/career">
            <Nav.Link href="#career">Career Details</Nav.Link>
          </Link>
          <Link to="/lifestyle">
            <Nav.Link href="#lifestyle">Lifestyle & Family Details</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavReg;
