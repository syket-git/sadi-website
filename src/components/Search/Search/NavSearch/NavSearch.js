import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavSearch = () => {
  return (
    <div>
      <Navbar>
        <Nav
          className="container d-flex justify-content-between navSettings"
          style={{ fontWeight: 700, fontSize: 17 }}
        >
          <Link to="search/basic">
            <Nav.Link href="#account">Basic Search</Nav.Link>
          </Link>
          <Link to="search/advance">
            <Nav.Link href="#account">Advance Search</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavSearch;
