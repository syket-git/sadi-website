import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({ style }) => {
  return (
    <>
      <div
        className="card shadow profile-card"
        style={style}
        // style={{ width: "22rem" }}
      >
        <img
          className="card-img-top profile-img rounded-circle"
          src="https://zc64xuggxl-flywheel.netdna-ssl.com/wp-content/uploads/2019/04/team.png"
          alt=""
        ></img>
        <div className="card-body text-center">
          <h5 className="card-title">Kamal Jamal</h5>
          <h6 className="card-subtitle mb-2 text-muted">KJ124i68</h6>
          <p className="card-text mt-3">21 Years Old || Paris France</p>
          <Link to="/user" className="btn premium-btn mt-3">
            Get Premium
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
