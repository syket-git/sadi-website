import React from "react";
import "./VisitorCount.css";
const VisitorCount = () => {
  return (
    <>
      <div className="card shadow profile-card" style={{ width: "22rem" }}>
        <h4
          className="brand-text text-center"
          style={{ paddingBottom: 10, paddingTop: 10 }}
        >
          People Near Me
        </h4>

        <h2 className="circle">460</h2>
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

export default VisitorCount;
