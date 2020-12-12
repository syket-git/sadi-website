import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import NotificationCard from "../NotificationCard/NotificationCard";

const NotificationList = () => {
  return (
    <div className="shadow mt-1 pt-1 pb-3 px-4">
      <div className="text-center">
        <h4 className="mt-3 mb-2">
          <span className="mr-3" style={{ color: "#8e8be6" }}>
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </span>
          Notification List
        </h4>
      </div>
      <div className="m-2 mt-3">
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
      </div>
      <Link className="text-center" style={{ color: "#8e8be6" }} to="/">
        <p>
          <small>View All</small>
        </p>
      </Link>
    </div>
  );
};

export default NotificationList;
