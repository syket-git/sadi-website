import React from "react";
import { faCog, faEdit, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconBar.css";
import { Link } from "react-router-dom";

const IconBar = () => {
  return (
    <div className="d-flex row justify-content-between shadow icon-bar pb-3 pt-3 mx-auto px-5 mt-5">
      <Link to="">
        <FontAwesomeIcon className="icon-bar-icon" icon={faEnvelope} />
      </Link>
      <Link to="">
        <FontAwesomeIcon className="icon-bar-icon" icon={faEdit} />
      </Link>
      <Link to="">
        <FontAwesomeIcon className="icon-bar-icon" icon={faCog} />
      </Link>
    </div>
  );
};

export default IconBar;
