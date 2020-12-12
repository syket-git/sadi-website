import { faCheckCircle, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MatchProfileCard = () => {
  return (
    <div style={{ borderBottom: "1px solid #e4d9d9" }} className="row py-4">
      <div className="col-md-3">
        <img
          className="img-fluid"
          src="https://i.imgur.com/mtxJUHB.jpg"
          alt=""
        ></img>
      </div>
      <div className="col-md-5">
        <div>
          <h5>Kamali Begum</h5>
          <h6>KJ1246i8</h6>
          <p>
            <small>Active Now</small>
          </p>
        </div>
        <div
          style={{ marginTop: 70 }}
          className="row d-flex justify-content-start"
        >
          <div
            style={{ lineHeight: "50%", borderRight: "1px solid grey" }}
            className="col-md-4 pr-4"
          >
            <p>
              <small>21 Years</small>
            </p>
            <p>
              <small>Paris, France</small>
            </p>
            <p>
              <small>Muslim</small>
            </p>
            <p>
              <small>Pakistani</small>
            </p>
          </div>
          <div style={{ lineHeight: "50%" }} className="col-md-4 ml-4">
            <p>
              <small>B.E./ B.Tech</small>
            </p>
            <p>
              <small>Software Engineer</small>
            </p>
            <p>
              <small>$60,000 - 80,000</small>
            </p>
            <p>
              <small>Never Married</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 text-center">
        <h5>Like This Profile?</h5>
        <FontAwesomeIcon
          style={{ fontSize: "75", backgroundColor: "white", color: "#0af662" }}
          className="mt-3 "
          icon={faCheckCircle}
        ></FontAwesomeIcon>
        <div className="mt-5">
          <Link className="btn premium-btn" to="/">
            <span>
              <FontAwesomeIcon
                className="mr-2"
                icon={faUserPlus}
              ></FontAwesomeIcon>
            </span>{" "}
            Connect Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MatchProfileCard;
