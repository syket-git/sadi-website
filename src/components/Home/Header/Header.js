import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import img from "../../../images/biye1.png";

const Header = () => {
  return (
    // <Container>
    //   <Row>
    //     <Col className="row align-items-center sm={8}">
    //       <h1
    //         style={{
    //           textAlign: "center",
    //           fontWeight: 700,
    //           color: "#d47edf",
    //           paddingLeft: 30,
    //           fontSize: 60,
    //         }}
    //       >
    //         Are you ready to meet <br />
    //         your perfect one?
    //       </h1>
    //     </Col>
    //     <Col className=" sm={4}">
    //       <img
    //         style={{ padding: 30, margin: 50 }}
    //         src={img}
    //         alt="biye"
    //         srcSet=""
    //       />
    //     </Col>
    //   </Row>
    // </Container>

    // <div class="container top-banner">
    //   <div class="row">
    //     <div class="col-md-6">
    //       <span style="color: #FD511A;">Are you ready to learn?</span>
    //       <h1 style="line-height: 50px;">
    //         Learn With fun <br /> on{" "}
    //         <span style="color: #21B573;">any schedule</span>
    //       </h1>
    //       <p style="line-height: 36px;">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
    //         blandit facilisis quam netus.
    //       </p>
    //       <button type="button" id="get-started-btn" class="btn">
    //         Get Started
    //       </button>
    //     </div>
    //     <div class="col-sm-12 col-md-6">
    //       <img id="top-image" src="images/photos/illustration.png" alt="" />
    //     </div>
    //   </div>
    // </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-7">
          <h1
            style={{
              textAlign: "center",
              fontWeight: 700,
              color: "#d47edf",
              paddingLeft: 30,
              fontSize: 55,
            }}
          >
            Are you ready to meet <br />
            your perfect one????
          </h1>
        </div>

        <div class="col-sm-5">
          <img
            style={{ paddingTop: 30, marginTop: 50, paddingLeft: 70 }}
            src={img}
            alt="biye"
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
