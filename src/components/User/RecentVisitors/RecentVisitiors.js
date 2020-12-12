import React from "react";
import {
  faEye,
  faSync,
  faTruckLoading,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisitorCard from "../VisitorCard/VisitorCard";
import { Link } from "react-router-dom";

const RecentVisitors = () => {
  return (
    <div className="shadow">
      <h4 className="text-center pt-3 mt-5 mb-3">
        <span>
          <FontAwesomeIcon
            style={{ color: "#cd3cb5" }}
            className="mr-3"
            icon={faEye}
          />
        </span>
        Recent Visitors
      </h4>

      <VisitorCard></VisitorCard>
      <VisitorCard></VisitorCard>
      <VisitorCard></VisitorCard>
      <VisitorCard></VisitorCard>

      <div className="text-center pb-3">
        <Link style={{ fontSize: 14 }} to="/" className="btn premium-btn mt-3">
          <span>
            <FontAwesomeIcon className="mr-3" icon={faSync}></FontAwesomeIcon>
          </span>
          Load More
        </Link>
      </div>
    </div>
  );
};

export default RecentVisitors;
