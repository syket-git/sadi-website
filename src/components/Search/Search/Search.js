import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="row container">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Navbar bg="light" variant="light">
          <Nav className="container d-flex justify-content-between navSettings">
            <Link to="search/basic">
              <Nav.Link href="#account">Basic Search</Nav.Link>
            </Link>
            <Link to="search/advance">
              <Nav.Link href="#account">Advance Search</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default Search;
