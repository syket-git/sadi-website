import { faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MatchListCard = () => {
  return (
    <div className="row m-3 p-2">
      <div className="col-md-8 d-flex">
        <div>
          <img
            style={{ width: 75 }}
            className="img-fluid mr-3"
            src="https://i.imgur.com/mtxJUHB.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div>
          <h5>Kamali Begum</h5>
          <p>A Month Ago</p>
          <p>
            <small>
              <Link style={{ color: "#8e8be6" }} to="/">
                Visit Profile
              </Link>
            </small>
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <Link to="/" className="btn premium-btn">
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faUserCheck}
            ></FontAwesomeIcon>
          </span>
          Connected
        </Link>
      </div>
    </div>
  );
};

export default MatchListCard;
