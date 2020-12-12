import React from "react";
import UserRequestCard from "../UserRequestCard/UserRequestCard";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faLeaf,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YouMayLike = () => {
  return (
    <div className="shadow">
      <h4 className="text-center pt-3 my-3">
        <span>
          <FontAwesomeIcon
            style={{ color: "#cd3cb5" }}
            className="mr-3"
            icon={faLeaf}
          />
        </span>
        You may like
      </h4>
      <UserRequestCard></UserRequestCard>
      <UserRequestCard></UserRequestCard>

      <div className="text-center pb-3">
        <FontAwesomeIcon
          style={{ color: " #8e8be6", fontSize: 20 }}
          className="mr-2"
          icon={faArrowCircleLeft}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          style={{ color: " #8e8be6", fontSize: 20 }}
          icon={faArrowCircleRight}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default YouMayLike;
