import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Personal from "../Personal/Personal";
import Lifestyle from "../Lifestyle/Lifestyle";
import Career from "../Career/Career";
import NavBar from "../../Home/NavBar/NavBar";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="d-flex justify-content-between col-md-6">
          <Navbar bg="light" variant="light">
            <Nav className="d-flex justify-content-around">
              <Link to="/personal">
                <Nav.Link href="#personal">Personal Details</Nav.Link>
              </Link>
              <Link to="/career">
                <Nav.Link href="#career">Career Details</Nav.Link>
              </Link>
              <Link to="/lifestyle">
                <Nav.Link href="#lifestyle">
                  Lifestyle & Family Details
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Registration;
