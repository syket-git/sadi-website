import React from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./VisitorDistance.css";
const VisitorDistance = () => {
  return (
    <>
      <div className="card shadow profile-card" style={{ width: "22rem" }}>
        <h4
          className="brand-text text-center"
          style={{ paddingBottom: 10, paddingTop: 10 }}
        >
          People Near Me
        </h4>

        <FontAwesomeIcon
          style={{ color: "#8e8be6", width: 280, height: 200, paddingLeft: 70 }}
          icon={faMapMarkerAlt}
        />
        <div className="card-body text-center">
          <p className="card-text mt-3">
            This members can be your potential match.They have visited your
            profile/album in the last 15 days
          </p>
        </div>
      </div>
    </>
  );
};

export default VisitorDistance;
